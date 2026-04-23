export async function GET(_: Request, context: any) {
  const env = context?.params?.cloudflare?.env || (globalThis as any).process?.env;

  const object = await env.R2.get("scripts/test.js");

  if (!object) {
    return new Response("File not found", { status: 404 });
  }

  return new Response(object.body, {
    headers: {
      "Content-Type": "application/javascript"
    }
  });
}