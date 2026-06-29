import defaultJwks from "@/lib/http-message-signatures-directory.jwks.json";

const CONTENT_TYPE = "application/http-message-signatures-directory+json";

type PublicJwks = {
  keys: Array<Record<string, unknown>>;
};

function parseJwks(raw: string): PublicJwks {
  const parsed = JSON.parse(raw) as unknown;
  if (
    typeof parsed !== "object" ||
    parsed === null ||
    !("keys" in parsed) ||
    !Array.isArray((parsed as PublicJwks).keys) ||
    (parsed as PublicJwks).keys.length === 0
  ) {
    throw new Error("JWKS must be an object with a non-empty keys array");
  }
  return parsed as PublicJwks;
}

function getJwks(): PublicJwks {
  const raw = process.env.WEB_BOT_AUTH_JWKS_JSON?.trim();
  if (raw) {
    return parseJwks(raw);
  }
  return defaultJwks as PublicJwks;
}

/**
 * Web Bot Auth key directory (JWKS) for HTTP Message Signatures.
 * @see https://datatracker.ietf.org/wg/webbotauth/about/
 */
export function GET() {
  let body: string;
  try {
    body = JSON.stringify(getJwks());
  } catch {
    return new Response("Invalid Web Bot Auth JWKS configuration", {
      status: 500,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  return new Response(`${body}\n`, {
    headers: {
      "Content-Type": CONTENT_TYPE,
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
