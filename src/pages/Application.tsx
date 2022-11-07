import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hello from "./appComponents/Hello";
import Main from "./appComponents/Main";
import Navbar from "./allComponents/Navbar";
import Footer from "./allComponents/Footer";
import CounterDialog from "./appComponents/CounterDialog";
import SCounters from "../store/SCounters";
import SCounterDialog from "../store/SCounterDialog";
import { observer } from "mobx-react-lite";

const ApplicationPage = observer(() => {
  const navigator = useNavigate();

  useEffect(() => {
    SCounters.clearCounters();
    SCounters.fetchGetCounters().then((status) => {
      if (status === 401) {
        navigator("/");
      }
    });
    // if (!!localStorage.getItem("All Counters")) {
    //   SCounters.loadFromLocalStorage();
    //   console.log(
    //     "%cПривет! Ради сохранения своих счётчиков не производи никаких манипуляций с localStorage через консоль. Это может привести к удалению всех счётчиков или другим плохим последствиям. Ты же не хочешь проблем?",
    //     "font-family: monospace; font-size: 20px; color: black; background: linear-gradient(145deg, #FF9B41 0%, #FF7A9E 100%); padding: 20px; border-radius: 20px"
    //   );
    // }
  }, []);
  return (
    <main id="app" className="bg-neutral-200 dark:bg-neutral-900">
      {SCounterDialog.counterDialogData.length > 0 && (
        <CounterDialog></CounterDialog>
      )}
      <Navbar href="/" isMobileExist={false} customClass="absolute"></Navbar>
      <Hello></Hello>
      <Main></Main>
      <Footer></Footer>
    </main>
  );
});

export default ApplicationPage;
