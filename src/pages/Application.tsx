import React, { useEffect } from "react";
import Hello from "./appComponents/Hello";
import Main from "./appComponents/Main";
import AddDialog from "./appComponents/AddDialog";
import SCounters from "../store/SCounters";

export default function ApplicationPage() {
  useEffect(() => {
    if (localStorage.length !== 0) {
      SCounters.loadFromLocalStorage();
    }
  }, []);
  return (
    <main id="app">
      <AddDialog></AddDialog>
      <Hello></Hello>
      <Main></Main>
    </main>
  );
}
