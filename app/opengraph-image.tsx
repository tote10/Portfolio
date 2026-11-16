import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt = "Moti Alemu — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#F0E5DB",
        color: "#474329",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "70%",
          padding: "65px",
        }}
      >
        <span style={{ fontSize: 24, color: "#474329" }}>
          SOFTWARE ENGINEER / ETHIOPIA
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 120,
            lineHeight: 0.95,
            letterSpacing: -7,
          }}
        >
          <span>Moti</span>
          <span style={{ paddingLeft: 45 }}>Alemu.</span>
        </div>
        <span style={{ fontSize: 23, color: "#474329" }}>
          Python · Backend APIs · Full-stack development
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "30%",
          padding: "65px 35px",
          background: "#F0E5DB",
          color: "#474329",
        }}
      >
        <span style={{ fontSize: 45 }}>↗</span>
        <div style={{ display: "flex", fontSize: 20, lineHeight: 1.6 }}>
          Practical software. Thoughtfully built.
        </div>
        <span style={{ fontSize: 18, color: "#474329" }}>
          github.com/tote10
        </span>
      </div>
    </div>,
    size,
  );
}
