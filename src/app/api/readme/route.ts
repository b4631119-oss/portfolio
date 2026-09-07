import { getRepoReadme } from "@/lib/github";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const owner = searchParams.get("owner");
  const repo = searchParams.get("repo");

  if (!owner || !repo) {
    return Response.json({ content: null }, { status: 400 });
  }

  try {
    const content = await getRepoReadme(owner, repo);
    return Response.json({ content });
  } catch {
    return Response.json({ content: null }, { status: 502 });
  }
}
