import React from "react";
import Container from "./container";
import Sidebar from "./sidebar";
import SingleResult from "./single-result";

export default async function TheMain() {
  return (
    <main>
      <Container>
        <Sidebar />
        <SingleResult />
      </Container>
    </main>
  );
}
