// react, router, mobx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

// stores
import SCounters from "../store/SCounters";
import SCounterDialog from "../store/SCounterDialog";

// components
import Hello from "./appComponents/Hello";
import Main from "./appComponents/Main";
import Navbar from "./allComponents/Navbar";
import Footer from "./allComponents/Footer";
import CounterDialog from "./appComponents/CounterDialog";

const ApplicationPage = observer(() => {
  const navigator = useNavigate();

  async function countersLogic() {
    if (!!localStorage.getItem("All Counters")) {
      SCounters.loadFromLocalStorage();

      console.warn(
        "%cВнимание! Локальные сохранения загружаются на сервер. Пытаются, по крайней мере.",
        "font-family: monospace; font-size: 20px; padding: 20px;"
      );

      await SCounters.fetchPostCounters();
      return;
    }

    const getResult = await SCounters.fetchGetCounters();

    if (import.meta.env.PROD && getResult === 401) {
      console.warn(
        `GET status: ${getResult}. Войдите в аккаунт, прежде чем открывать приложение!`
      );

      navigator("/");
    }
  }

  useEffect(() => {
    countersLogic();
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
