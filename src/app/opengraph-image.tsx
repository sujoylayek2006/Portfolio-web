import { ImageResponse } from "next/og";

export const alt = "Sujoy Layek — Full-Stack Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          fontFamily: "sans-serif",
          color: "#ffffff",
          border: "2px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: 32,
              fontWeight: 800,
              color: "#c084fc",
              letterSpacing: "1px",
            }}
          >
            SUJOY LAYEK.
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#d4d4d4",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              padding: "8px 22px",
              borderRadius: "999px",
              background: "rgba(255, 255, 255, 0.05)",
              letterSpacing: "2px",
            }}
          >
            PORTFOLIO 2026
          </div>
        </div>

        {/* Center Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: 58,
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#ffffff",
            }}
          >
            Crafting Scalable Systems &amp; High-Performance Web Apps
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#a855f7",
              letterSpacing: "0.5px",
            }}
          >
            Full-Stack Web Development &bull; Cybersecurity &bull; Ethical Hacking &bull; AI
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "24px",
            fontSize: 18,
            color: "#a3a3a3",
            width: "100%",
          }}
        >
          <div>B.Tech CSE &bull; NSHM Knowledge Campus Durgapur</div>
          <div>github.com/sujoylayek2006</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
