import { readFileSync } from "fs";

export async function GET() {
    const html = readFileSync("/root/aktivan-web-ui/static/policy.html", "utf-8");

    return new Response(html, {
        headers: {
            "Content-Type": "text/html"
        }
    });
}
