import Background from "@/components/background";
import Footer from "@/components/footer";
import TheMain from "@/components/main";
import PrimaryHeader from "@/components/primary-header";

export default function Home() {
  return (
    <Background>
      <PrimaryHeader />
      <TheMain />
      <Footer />
    </Background>
  );
}
