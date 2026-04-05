// Generiert einen Pencil-Design-Prompt via Claude API

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "fs";
import { join } from "path";
import type { PencilPromptInput } from "./prompt-mapping";
import { buildPromptGeneratorMessage } from "./prompt-mapping";

const anthropic = new Anthropic();

// System-Prompt aus der Skill-Datei laden
function loadSkillPrompt(): string {
  const skillPath = join(
    process.env.HOME || "/root",
    ".claude/skills/pencil-prompt-generator/SKILL.md"
  );
  const content = readFileSync(skillPath, "utf-8");

  // Frontmatter entfernen (alles zwischen --- und ---)
  const frontmatterEnd = content.indexOf("---", content.indexOf("---") + 3);
  if (frontmatterEnd !== -1) {
    return content.slice(frontmatterEnd + 3).trim();
  }
  return content;
}

export async function generatePencilPrompt(
  input: PencilPromptInput
): Promise<string> {
  const systemPrompt = loadSkillPrompt();
  const userMessage = buildPromptGeneratorMessage(input);

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 8000,
    system: systemPrompt,
    messages: [
      {
        role: "user",
        content: `Erstelle einen vollständigen Pencil-Design-Prompt für folgendes Unternehmen:\n\n${userMessage}`,
      },
    ],
  });

  // Text-Blöcke aus der Response extrahieren
  const textBlocks = response.content.filter((block) => block.type === "text");
  if (textBlocks.length === 0) {
    throw new Error("Keine Text-Antwort von Claude erhalten");
  }

  return textBlocks.map((block) => block.text).join("\n\n");
}
