import React from "react";
import Navbar from "./allComponents/Navbar";
import Hello from "./welcomeComponents/Hello";
import Reason from "./welcomeComponents/Reason";
import Benefit from "./welcomeComponents/Benefit";
import Account from "./welcomeComponents/Account";
import Roadmap from "./welcomeComponents/Roadmap";
import Footer from "./welcomeComponents/Footer";

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
    <>
      <main id="page" className="bg-neutral-200 dark:bg-neutral-900">
        <Navbar
          href="/"
          customClass="fixed bg-white/50 dark:bg-black/30"
          linksArray={links}
        />
        <Hello />
        <Reason />
        <Benefit />
        <Roadmap />
        <Account />
      </main>
      <Footer />
    </>
  );
}
