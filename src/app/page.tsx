export default function FullscreenPDF() {
  return (
    <iframe
      src="/menukaart.pdf"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
      }}
    />
  );
}
