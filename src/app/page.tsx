import Background from "@/components/background";
import Container from "@/components/container";
import PrimaryHeader from "@/components/primary-header";

export default function Home() {
  return (
    <Background>
      <PrimaryHeader />
      <main>
        <Container>
          <h2>Job Sidebar</h2>
        </Container>
      </main>
      <footer className="flex flex-col md:flex-row justify-between px-4 py-1 mt-auto max-w-8xl">
        <p className="text-sm">&copy; Big Boss Enterprises.</p>
        <p className="text-sm">All Rights Reserved.</p>
      </footer>
    </Background>
  );
}
