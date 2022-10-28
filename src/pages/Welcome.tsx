import React from "react";
import Navbar from "./allComponents/Navbar";
import Section1 from "./welcomeComponents/Section1";
import Section2 from "./welcomeComponents/Section2";
import Section3 from "./welcomeComponents/Section3";
import Section4 from "./welcomeComponents/Section4";

export default function WelcomePage() {
  const links: string[] = [
    "Главная",
    "Смысл",
    "Польза",
    "Аккаунт",
    "Планы",
    "Ссылки",
  ];
  return (
    <main id="page" className="bg-neutral-200 dark:bg-neutral-900">
      <Navbar
        href="/"
        customClass="fixed bg-white/50 dark:bg-black/30"
        linksArray={links}
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </main>
  );
}
