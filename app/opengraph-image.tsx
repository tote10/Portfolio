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
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        background: "#f2e9dc",
        color: "#493a31",
        padding: "70px",
      }}
    >
      <div style={{ display: "flex", fontSize: 28 }}>
        MOTI ALEMU / SOFTWARE ENGINEER
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          letterSpacing: -3,
        }}
      >
        <span>Behind every interface,</span>
        <span>there’s a system.</span>
        <span style={{ color: "#435a45" }}>I like building that.</span>
      </div>
      <div style={{ display: "flex", fontSize: 24 }}>
        Python · Backend APIs · Practical software
      </div>
    </div>,
    size,
  );
}
