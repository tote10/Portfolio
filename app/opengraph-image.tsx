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
        background: "#f1e7d8",
        color: "#344e41",
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
        <span style={{ fontSize: 24, color: "#49392f" }}>
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
        <span style={{ fontSize: 23, color: "#49392f" }}>
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
          background: "#344e41",
          color: "#f1e7d8",
        }}
      >
        <span style={{ fontSize: 45 }}>↗</span>
        <div style={{ display: "flex", fontSize: 20, lineHeight: 1.6 }}>
          Practical software. Thoughtfully built.
        </div>
        <span style={{ fontSize: 18, color: "#edbdd0" }}>
          github.com/tote10
        </span>
      </div>
    </div>,
    size,
  );
}
