type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function Container({ style, ...props }: ContainerProps) {
  return (
    <div
      {...props}
      style={{
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        ...style,
      }}
    />
  );
}
