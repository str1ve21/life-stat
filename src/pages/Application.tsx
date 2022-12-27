// react, router, mobx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

// stores
import SDialog from "../store/SDialog";
import SCounters from "../store/SCounters";

// local functions
import counterStorage from "../func/counterStorage";
import { errText, logResponse, logText, warnResponse } from "../func/console";

// interfaces
import ISureDialog from "../interfaces/ISureDialog";

// components
import Hello from "./appComponents/Hello";
import Main from "./appComponents/Main";
import Navbar from "./allComponents/Navbar";
import Footer from "./allComponents/Footer";

const ApplicationPage = observer(() => {
  const navigator = useNavigate();

  const dataDialog: ISureDialog = {
    id: `conflictDialog`,
    title: `Конфликт данных.`,
    text: "",
    yesText: "Отправить на сервер",
    noText: "Загрузить с сервера",
    isYesFunc: true,
    isNoFunc: true,
    canClose: false,
    yesFunction: () => {
      try {
        console.log(logText("Application", "dialog", "POST started..."));
        if (localStorage.getItem(counterStorage())) {
          SCounters.loadFromLocalStorage();
          console.log(
            logText("Application", "dialog", "Found localStorage data...")
          );
        }
        SCounters.fetchPostCounters();
        console.log(logText("Application", "dialog", "POST finished. Done"));
        SDialog.deleteDialog();
      } catch (error) {
        console.error(
          errText(
            "Application",
            "dialog",
            `Sendidng finished with error ${error}`
          )
        );
      }
    },
    noFunction: () => {
      try {
        console.log(logText("Application", "dialog", "GET started..."));
        SCounters.fetchGetCounters({ isInitial: false });
        console.log(
          logText("Application", "dialog", "Saved to localStorage. Done")
        );
        SDialog.deleteDialog();
      } catch (error) {
        console.error(
          errText(
            "Application",
            "dialog",
            `Sendidng finished with error ${error}`
          )
        );
      }
    },
  };

  async function countersLogic() {
    SCounters.clearCounters();

    const getResult = await SCounters.fetchGetCounters({ isInitial: true });

    if (getResult === undefined) return;

    if (import.meta.env.PROD && getResult.code === 401) {
      console.warn(
        warnResponse(
          "Application",
          "GET",
          "if",
          getResult.code,
          "Войдите в аккаунт, прежде чем открывать приложение!"
        )
      );
      navigator("/");
      return;
    }

    if (getResult.type === "Data conflict") {
      dataDialog.text = `Обнаружена разница между данными счётчиков на сервере и локальным хранилищем.
      Возможно это было вызвано внесением изменений офлайн.
      В данной ситуации вы можете или отправить локальные данные на сервер, либо загрузить данные с сервера и заменить ими локальные.`;
      SDialog.createDialog(dataDialog);
      return;
    }

    console.log(
      logResponse(
        "Application",
        "GET",
        "fetch finish",
        getResult.code,
        "По кайфу работает"
      )
    );
  }

  useEffect(() => {
    countersLogic();
  }, []);

  return (
    <main id="app" className="bg-neutral-200 dark:bg-neutral-900">
      <Navbar href="/" isMobileExist={false} customClass="absolute"></Navbar>
      <Hello></Hello>
      <Main></Main>
      <Footer></Footer>
    </main>
  );
});

export default ApplicationPage;
