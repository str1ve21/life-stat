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

  useEffect(() => {
    SCounters.fetchGetCounters().then((status) => {
      if (status === 200) {
        console.log(`GET status: ${status}. По кайфу работает.`);
        if (!!localStorage.getItem("All Counters")) {
          SCounters.fetchPostCounters();
          SCounters.clearLocalStorage();
        }
        return SCounters.fetchPostCounters();
      }
      if (import.meta.env.PROD && status === 401) {
        console.warn(
          `GET status: ${status}. Войдите в аккаунт, прежде чем открывать приложение!`
        );
        return navigator("/");
      }
    });
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
