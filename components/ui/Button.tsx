type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export function Button({ variant = 'primary', style, ...props }: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    borderRadius: 9999,
    padding: '0.85rem 1.25rem',
    border: '1px solid transparent',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'transform 180ms ease, box-shadow 180ms ease, background 180ms ease',
  };

  const variants: Record<NonNullable<ButtonProps['variant']>, React.CSSProperties> = {
    primary: {
      background: '#2563eb',
      color: '#fff',
      boxShadow: '0 12px 30px rgba(37, 99, 235, 0.22)',
    },
    secondary: {
      background: 'rgba(255,255,255,0.6)',
      color: '#0f172a',
      border: '1px solid rgba(226, 232, 240, 0.9)',
    },
  };

  return <button {...props} style={{ ...baseStyle, ...variants[variant], ...style }} />;
}
