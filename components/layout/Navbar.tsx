export default function Navbar() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(16px)',
        background: 'rgba(248, 250, 252, 0.7)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
        padding: '1rem 1.5rem',
      }}
    >
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <strong>CodeStory</strong>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span>ID | EN</span>
          <button type="button">☰</button>
        </div>
      </nav>
    </header>
  );
}
