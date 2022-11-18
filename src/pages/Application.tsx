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
    const getResult = await SCounters.fetchGetCounters();

    console.log(
      `[LOG]: Application GET fetch finished. Response status: ${getResult}.`
    );

    if (import.meta.env.PROD && getResult === 401) {
      console.warn(
        `[WARN]: Application GET (if). More info: ${getResult}. Войдите в аккаунт, прежде чем открывать приложение!`
      );

      navigator("/");

      return;
    }

    if (!!localStorage.getItem("All Counters")) {
      SCounters.loadFromLocalStorage();

      console.log(
        `[LOG]: Application loading LocalStorage finished. More info: ${localStorage.getItem(
          "All Counters"
        )}`
      );

      await SCounters.fetchPostCounters();
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
