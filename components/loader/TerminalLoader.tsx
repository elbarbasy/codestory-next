export default function TerminalLoader() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background: '#000',
        color: '#22c55e',
        fontFamily: 'monospace',
        padding: '2rem',
      }}
    >
      <pre style={{ margin: 0, whiteSpace: 'pre-wrap', maxWidth: 720, lineHeight: 1.7 }}>
{`Initializing CodeStory...
Loading Environment...
Checking Dependencies...
✓ Next.js Ready
✓ Tailwind Ready
✓ Supabase Connected
✓ Loading Components...
✓ Optimizing Assets...
✓ Building UI...
✓ Running Performance Test...
✓ Deploy Success

npm run dev

Ready in 1.8s`}
      </pre>
    </div>
  );
}
