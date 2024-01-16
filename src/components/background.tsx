export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col bg-zinc-200 min-h-screen">{children}</div>
  );
}
