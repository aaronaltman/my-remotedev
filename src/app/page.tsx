"use client";

import Background from "@/components/background";
import Footer from "@/components/footer";
import TheMain from "@/components/main";
import PrimaryHeader from "@/components/primary-header";
import prisma from "@/lib/prisma";
import { useState } from "react";

export default async function Home() {
  const [searchJobs, setSearchJobs] = useState("");

  async function serverActions() {
    "use server";
    const results = await prisma.jobItem.findFirst({});
  }

  return (
    <Background>
      <PrimaryHeader setSearchJobs={setSearchJobs} searchJobs={searchJobs} />
      <TheMain />
      {results.map((result) => (
        <div key={result.id}>
          <h2 className="text-5xl text-black">{result.title}</h2>
          <p>{result.company}</p>
        </div>
      ))}
      <Footer />
    </Background>
  );
}
