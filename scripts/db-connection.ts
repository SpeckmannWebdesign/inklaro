/**
 * Stellt eine Verbindung zur Produktions-Datenbank her via SSH-Tunnel.
 * Wird von load-anfrage.ts und update-anfrage.ts genutzt.
 */
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { execSync, spawn, type ChildProcess } from "child_process";

const LOCAL_PORT = 54320;
const SERVER_IP = "167.235.136.129";
const DB_CONTAINER = "bodpreu5n5wrroyyl9qkkpoq";
const DB_PASSWORD = "J2wKaNe4cvvFTZ7uG6sB57JsRzvwI2wO70e7HiOvKp9KXuTrCHWPmQBEPrH98wGg";

let tunnel: ChildProcess;

export async function connectProductionDb(): Promise<PrismaClient> {
  // Docker-interne IP des DB-Containers ermitteln
  const dbIp = execSync(
    `ssh root@${SERVER_IP} "docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' ${DB_CONTAINER}"`,
    { encoding: "utf-8" }
  ).trim();

  // SSH-Tunnel starten
  tunnel = spawn("ssh", [
    "-N", "-L", `${LOCAL_PORT}:${dbIp}:5432`,
    `root@${SERVER_IP}`,
  ], { stdio: "ignore" });

  // Kurz warten bis Tunnel steht
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const connectionString = `postgres://postgres:${DB_PASSWORD}@localhost:${LOCAL_PORT}/postgres`;
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
}

export async function disconnect(prisma: PrismaClient): Promise<void> {
  await prisma.$disconnect();
  if (tunnel) tunnel.kill();
}
