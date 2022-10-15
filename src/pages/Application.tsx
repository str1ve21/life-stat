import React from "react";
import Hello from "./appComponents/Hello";
import Main from "./appComponents/Main";
import AddDialog from "./appComponents/AddDialog";

export default function ApplicationPage() {
  return (
    <main id="app">
      <AddDialog></AddDialog>
      <Hello></Hello>
      <Main></Main>
    </main>
  );
}
