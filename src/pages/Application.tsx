import React, { useEffect } from "react";
import Hello from "./appComponents/Hello";
import Main from "./appComponents/Main";
import CounterDialog from "./appComponents/CounterDialog";
import SCounters from "../store/SCounters";
import SCounterDialog from "../store/SCounterDialog";
import { observer } from "mobx-react-lite";
import Navbar from "./allComponents/Navbar";

const ApplicationPage = observer(() => {
  useEffect(() => {
    if (!!localStorage.getItem("All Counters")) {
      SCounters.loadFromLocalStorage();
      console.log(
        "%cПривет! Ради сохранения своих счётчиков не производи никаких манипуляций с localStorage через консоль. Это может привести к удалению всех счётчиков или другим плохим последствиям. Ты же не хочешь проблем?",
        "font-family: monospace; font-size: 20px; color: black; background: linear-gradient(145deg, #FF9B41 0%, #FF7A9E 100%); padding: 20px; border-radius: 20px"
      );
    }
  }, []);
  return (
    <main id="app" className="bg-neutral-200 dark:bg-neutral-900">
      {SCounterDialog.counterDialogData.length > 0 && (
        <CounterDialog></CounterDialog>
      )}
      <Navbar href="/" customClass="absolute"></Navbar>
      <Hello></Hello>
      <Main></Main>
    </main>
  );
});

export default ApplicationPage;
