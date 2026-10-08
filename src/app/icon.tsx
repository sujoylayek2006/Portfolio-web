import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          borderRadius: "7px",
          border: "1.5px solid rgba(168, 85, 247, 0.85)",
          fontFamily: "system-ui, sans-serif",
          color: "#ffffff",
        }}
      >
        SL
      </div>
    ),
    {
      ...size,
    }
  );
}
