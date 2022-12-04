// react, router, mobx
import React, { useEffect, useState } from "react";

// local functions
import { getBody, serverURL } from "../../func/fetchData";

// components
import Settings from "./Settings";
import HelloButtons from "./HelloButtons";

export default function WelcomePage() {
  let [username, setUsername] = useState(localStorage.getItem("Username"));

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
  }, []);

  return (
    <section className="grid place-content-center min-h-[420px] h-[50vh] content-padding bg-neutral-100 dark:bg-neutral-800 rounded-t-none overflow-hidden">
      <div
        id="hello-content"
        className="flex flex-col justify-center gap-[20px]"
      >
        <h1 className="hello-title text-center leading-none break-words">
          {helloText[Math.floor(Math.random() * helloText.length)]}, {username}!
        </h1>
        <p className="hello-subtitle text-center leading-none">
          {factArray[Math.floor(Math.random() * factArray.length)]}
        </p>
        <HelloButtons></HelloButtons>
      </div>
      <Settings></Settings>
    </section>
  );
}
