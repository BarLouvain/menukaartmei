'use client'
export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#fff",
          borderRadius: "1rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          padding: "1.5rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#333" }}>
          Welkom bij Bar Louvain
        </h1>

        <img
          src="./foodkaartje.png"
          alt="Menukaart"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "0.5rem",
            border: "1px solid #ddd",
            marginBottom: "1rem",
          }}
        />

        <a
          href="/menukaart_juli_2025_louvain.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "0.5rem",
            textDecoration: "none",
            fontWeight: "500",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#333";
          }}
          onMouseOut={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#000";
          }}
        >
          Bekijk onze menukaart
        </a>
      </section>
    </main>
  );
}
