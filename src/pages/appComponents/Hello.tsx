// react, router, mobx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// stores
import SCounterDialog from "../../store/SCounterDialog";

// local functions
import { throttle } from "throttle-debounce";
import { createParallaxY } from "../../func/parallax";
import { getBody, serverURL } from "../../func/fetchData";

// interfaces
import IParallaxYOptions from "../../interfaces/IParallaxYOptions";
import ICounterDialog from "../../interfaces/ICounterDialog";

// components
import Settings from "./Settings";

export default function WelcomePage() {
  let [username, setUsername] = useState(localStorage.getItem("Username"));

  const createCounterDialog: ICounterDialog = {
    id: "counterDialog",
    text: "Добавление счётчика.",
    title:
      "Здесь вы можете создать новый счётчик со своими параметрами, и кастомизировать его. Необязательными являются заголовок, описание и цель.",
    buttonText: "Создать",
    isEdit: false,
  };

  const helloText: string[] = [
    "Привет",
    "Здравствуйте",
    "Добро пожаловать",
    "С возвращением",
    "Доброго времени суток",
    "Salve",
    "Салам алейкум",
    "Hej",
    "Hello",
    "Ahlan wa sahlan",
    "Hola",
    "Прывитанне",
    "Здравейте",
    "Chao",
    "Aloha",
    "Shalom",
    "Buenas dias",
    "Buon giorno",
    "Ave",
    "Guten Tag",
    "Ola",
    "Buna",
    "Здраво",
    "Привіт",
    "Paivaa",
    "Bonjour",
    "Namaste",
    "Zdravo",
    "God dag",
    "Saluton",
    "Konnichi wa",
  ];

  const factArray: string[] = [
    "Приложение было создано 2 людьми.",
    "Приложение работает благодаря React, MobX, Tailwind и Vite.",
    "Разработка заняла 2.5 месяца до выпуска первой версии приложения.",
    "Если значок темы - зелёный, значит тема выбрана системой.",
    "Ваши идеи для развития приложения вы можете написать разработчикам на Boosty.",
    "У этого сайта есть приложение (PWA), вы можете добавить его на главный экран.",
    "Планы на обновления вы можете найти на главной странице.",
    "Счётчики сохраняются автоматически.",
    "Вы любите сплэши из Майнкрафта? Разработчики да.",
    "Мы рады, что хоть кто-то использует это приложение.",
    "*место для шуток и фактов*",
    "Ваша поддержка на Boosty мотивирует нас стать лучше!",
    "Внизу страницы есть лапка котика.",
    "Эта строка была написана в 29.10.22 22:55, делай с этой информацией что хочешь.",
    "В первой версии было только 16 строк с шутками и фактами, включая эту.",
    "owo uwu",
  ];

  const welcomeParallaxItems: IParallaxYOptions[] = [
    {
      elem: "#hello-content",
      power: 2,
      startFrom: 0,
      block: 0,
      finishBefore: 0,
      finishAfter: 75,
    },
  ];

  async function getUser() {
    const response = await fetch(`${serverURL()}/user`, getBody());
    const serverData = await response.json();
    if (username !== serverData.message) {
      setUsername(serverData.message);
      localStorage.setItem("Username", serverData.message);
    }
  }

  useEffect(() => {
    getUser();
    welcomeParallaxItems.forEach((item) => {
      window.addEventListener(
        "scroll",
        throttle(15, () => {
          createParallaxY(item);
        })
      );
    });
  }, []);

  return (
    <section className="grid place-content-center min-h-[420px] h-[50vh] content-padding bg-neutral-100 dark:bg-neutral-800 rounded-b-[40px] overflow-hidden">
      <div
        id="hello-content"
        className="flex flex-col justify-center gap-[20px]"
      >
        <h1 className="hello-title text-center leading-none break-all">
          {helloText[Math.floor(Math.random() * helloText.length)]}, {username}!
        </h1>
        <p className="hello-subtitle text-center leading-none">
          {factArray[Math.floor(Math.random() * factArray.length)]}
        </p>
        <div
          id="buttons"
          className="flex flex-wrap content-gap w-full justify-center"
        >
          <button
            onClick={() => {
              SCounterDialog.createDialog(createCounterDialog);
            }}
            className="button bg-emerald-300 dark:bg-emerald-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[20px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              document
                .querySelector<HTMLDialogElement>("#settingsDialog")
                ?.showModal();
            }}
            className="button bg-sky-300 dark:bg-sky-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[20px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <Settings></Settings>
    </section>
  );
}
