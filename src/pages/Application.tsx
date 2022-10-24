import React, { useEffect } from "react";
import Hello from "./appComponents/Hello";
import Main from "./appComponents/Main";
import CounterDialog from "./appComponents/CounterDialog";
import SCounters from "../store/SCounters";
import SCounterDialog from "../store/SCounterDialog";
import { observer } from "mobx-react-lite";

const ApplicationPage = observer(() => {
  useEffect(() => {
    if (localStorage.length !== 0) {
      SCounters.loadFromLocalStorage();
      console.log(
        "%cДорогой пользователь, ради сохранения своих счётчиков не производите никаких манипуляций с localStorage через консоль. Это может привести к удалению всех счётчиков или другим плохим последствиям.",
        "font-family: monospace; font-size: 20px; color: black; background: linear-gradient(145deg, #FF9B41 0%, #FF7A9E 100%); padding: 20px; border-radius: 20px"
      );
    }
  }, []);
  return (
    <main id="app">
      {SCounterDialog.counterDialogData.length > 0 && (
        <CounterDialog></CounterDialog>
      )}
      <Hello></Hello>
      <Main></Main>
    </main>
  );
});

export default ApplicationPage;
