// react, router, mobx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

// stores
import SDialog from "../store/SDialog";
import SCounters from "../store/SCounters";
import SCounterDialog from "../store/SCounterDialog";

// interfaces
import ISureDialog from "../interfaces/ISureDialog";

// components
import Hello from "./appComponents/Hello";
import Main from "./appComponents/Main";
import Navbar from "./allComponents/Navbar";
import Footer from "./allComponents/Footer";
import CounterDialog from "./appComponents/CounterDialog";

const ApplicationPage = observer(() => {
  const navigator = useNavigate();

  const dataDialog: ISureDialog = {
    id: `conflictDialog`,
    title: `Конфликт данных.`,
    text: `Обнаружена разница между данными счётчиков на сервере и локальным хранилищем. Возможно это было вызвано внесением изменений офлайн. В данной ситуации вы можете или отправить локальные данные на сервер, либо загрузить данные с сервера и заменить ими локальные.`,
    yesText: "Отправить на сервер",
    noText: "Загрузить с сервера",
    isYesFunc: true,
    isNoFunc: true,
    canClose: false,
    yesFunction: () => {
      try {
        console.log(`[LOG]: Application (dialog): POST started...`);
        if (localStorage.getItem("All Counters")) {
          SCounters.loadFromLocalStorage();
          console.log(
            `[LOG]: Application (dialog): Found localStorage data...`
          );
        }
        SCounters.fetchPostCounters();
        console.log(`[LOG]: Application (dialog): POST finished. Done.`);
        SDialog.deleteDialog();
      } catch (error) {
        console.error(
          `[ERROR]: Application (dialog): Sendidng finished with error ${error}.`
        );
      }
    },
    noFunction: () => {
      try {
        console.log(`[LOG]: Application (dialog): GET started...`);
        SCounters.fetchGetCounters();
        console.log(`[LOG]: Application (dialog): GET finished...`);
        console.log(
          `[LOG]: Application (dialog): Saved to localStorage. Done.`
        );
        SDialog.deleteDialog();
      } catch (error) {
        console.error(
          `[ERROR]: Application (dialog): Sendidng finished with error ${error}.`
        );
      }
    },
  };

  async function countersLogic() {
    const getResult = await SCounters.fetchGetCounters(true);

    if (import.meta.env.PROD && getResult === 401) {
      console.warn(
        `[WARN]: Application GET (if). More info: ${getResult}. Войдите в аккаунт, прежде чем открывать приложение!`
      );
      navigator("/");
      return;
    }

    if (getResult === "Data conflict") {
      SDialog.createDialog(dataDialog);
      return;
    }

    if (getResult !== undefined) {
      console.log(
        `[LOG]: Application GET fetch finished. Response status: ${getResult}.`
      );
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
