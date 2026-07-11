type SectionProps = React.HTMLAttributes<HTMLElement>;

export function Section({ style, ...props }: SectionProps) {
  return (
    <section
      {...props}
      style={{
        padding: '4rem 1.5rem',
        ...style,
      }}
    />
  );
}
