export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '2rem' }}>
      <section style={{ textAlign: 'center', maxWidth: 720 }}>
        <p style={{ marginBottom: '1rem', opacity: 0.7 }}>CodeStory</p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', lineHeight: 1.05, margin: 0 }}>
          Build websites that grow your business.
        </h1>
        <p style={{ marginTop: '1rem', fontSize: '1.125rem', opacity: 0.8 }}>
          Premium web development agency website foundation.
        </p>
      </section>
    </main>
  );
}
