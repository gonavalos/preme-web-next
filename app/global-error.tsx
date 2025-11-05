"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body style={{ padding: "3rem", fontFamily: "sans-serif" }}>
        <h2>⚠️ Ocurrió un error</h2>
        <p>{error.message}</p>
        <button
          onClick={() => reset()}
          style={{
            marginTop: "1rem",
            padding: "0.6rem 1.2rem",
            border: "none",
            background: "#33BAF0",
            color: "#fff",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Reintentar
        </button>
      </body>
    </html>
  );
}