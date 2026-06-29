/**
 * One-time: generate Ed25519 keypair for Web Bot Auth (IETF WebBotAuth).
 * Writes public JWKS to lib/http-message-signatures-directory.jwks.json (safe to commit).
 * Writes private PKCS#8 PEM to web-bot-auth-directory-private.pem (gitignored via *.pem).
 *
 * @see https://datatracker.ietf.org/wg/webbotauth/about/
 * @see https://developers.cloudflare.com/bots/reference/bot-verification/web-bot-auth/
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outJwks = path.join(root, "lib/http-message-signatures-directory.jwks.json");
const outPem = path.join(root, "web-bot-auth-directory-private.pem");

const { publicKey, privateKey } = crypto.generateKeyPairSync("ed25519");
const pubJwk = publicKey.export({ format: "jwk" });
const jwks = JSON.stringify({ keys: [pubJwk] }, null, 2);
fs.writeFileSync(outJwks, `${jwks}\n`, "utf8");
fs.writeFileSync(outPem, privateKey.export({ format: "pem", type: "pkcs8" }), "utf8");
console.log(`Wrote ${path.relative(root, outJwks)}`);
console.log(`Wrote ${path.relative(root, outPem)} (keep secret; use for signing bot requests or directory responses)`);
