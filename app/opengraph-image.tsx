import { ImageResponse } from "next/og";

export const alt = "Studio do Serralheiro";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #050A14 0%, #0E2345 100%)",
          color: "#fff",
        }}
      >
        <div style={{ fontSize: 34, color: "#7CB0FF", fontWeight: 700 }}>Studio do Serralheiro</div>
        <div style={{ fontSize: 78, fontWeight: 900, lineHeight: 1.05, marginTop: 24, display: "flex" }}>
          Centenas de projetos de serralheria na palma da sua mão
        </div>
        <div style={{ fontSize: 40, marginTop: 40, color: "#A9BCD3", display: "flex" }}>
          8x de R$ 5,58 ou R$ 37 à vista
        </div>
      </div>
    ),
    { ...size }
  );
}
