export default {
  async fetch(request, env) {

    // Upload JS file
    await env.R2.put("scripts/test.js", `
      console.log("Hello from Webflow Cloud");
    `, {
      httpMetadata: {
        contentType: "application/javascript"
      }
    });

    // Serve JS file
    const file = await env.R2.get("scripts/test.js");

    return new Response(file.body, {
      headers: {
        "Content-Type": "application/javascript"
      }
    });
  }
};
