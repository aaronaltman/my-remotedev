export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-zinc-200 min-h-screen">{children}</div>;
}
