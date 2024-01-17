export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-between max-w-5xl mx-auto bg-zinc-50 rounded-lg -mt-10 min-h-96 px-4 py-6">
      {children}
    </div>
  );
}
