"use client";

import Background from "@/components/background";
import Footer from "@/components/footer";
import TheMain from "@/components/main";
import PrimaryHeader from "@/components/primary-header";
import { useState } from "react";

export default function Home() {
  const [searchJobs, setSearchJobs] = useState("");

  return (
    <Background>
      <PrimaryHeader setSearchJobs={setSearchJobs} searchJobs={searchJobs} />
      <TheMain />
      <Footer />
    </Background>
  );
}
