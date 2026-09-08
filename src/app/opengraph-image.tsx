import { ImageResponse } from "next/og";

export const runtime = "edge";

export default function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0a0a0c",
          fontFamily: "system-ui, sans-serif",
          padding: 80,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#5b8dff",
              lineHeight: 1,
              fontFamily: "JetBrains Mono, ui-monospace, monospace",
              letterSpacing: "0.1em",
            }}
          >
            B I L O L
          </span>
          <span
            style={{
              fontSize: 36,
              fontWeight: 400,
              color: "#f5f5f7",
              lineHeight: 1.2,
              fontFamily: "Inter, system-ui, sans-serif",
              opacity: 0.9,
            }}
          >
            Full-Stack Developer
          </span>
        </div>
        <div
          style={{
            marginTop: 48,
            width: "100%",
            maxWidth: 600,
            height: 2,
            background: "linear-gradient(90deg, #5b8dff, #a78bfa)",
            borderRadius: 1,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}