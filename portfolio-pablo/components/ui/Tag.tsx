type TagProps = {
  children: string;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface-subtle px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-text-muted">
      {children}
    </span>
  );
}
