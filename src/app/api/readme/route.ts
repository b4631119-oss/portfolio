import { getRepoReadme } from "@/lib/github";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const owner = searchParams.get("owner");
  const repo = searchParams.get("repo");

  if (!owner || !repo || !/^[A-Za-z0-9_.-]+$/.test(owner) || !/^[A-Za-z0-9_.-]+$/.test(repo)) {
    return Response.json({ content: null, error: "Invalid repository" }, { status: 400 });
  }

  try {
    const content = await getRepoReadme(owner, repo);
    return Response.json(
      { content },
      { headers: { "Cache-Control": "private, max-age=300" } }
    );
  } catch {
    return Response.json({ content: null }, { status: 502 });
  }
}
