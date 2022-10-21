import React, { useEffect } from "react";
import Hello from "./appComponents/Hello";
import Main from "./appComponents/Main";
import AddDialog from "./appComponents/AddDialog";
import SCounters from "../store/SCounters";

export default function ApplicationPage() {
  useEffect(() => {
    if (localStorage.length !== 0) {
      SCounters.loadFromLocalStorage();
      console.log(
        "%cДорогой пользователь, ради сохранения своих счётчиков не производите никаких манипуляций с localStorage через консоль. Это может привести к удалению всех счётчиков или другим плохим последствиям.",
        "font-family: monospace; font-size: 20px; color: black; background: #FF9B41; padding: 20px; border-radius: 20px"
      );
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
