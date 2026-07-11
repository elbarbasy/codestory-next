export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(226, 232, 240, 0.8)',
        padding: '2rem 1.5rem',
        background: 'rgba(248, 250, 252, 0.85)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <strong>CodeStory</strong>
        <nav style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
