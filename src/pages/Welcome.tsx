import React, { useEffect } from "react";
import Navbar from "./allComponents/Navbar";
import Hello from "./welcomeComponents/Hello";
import Reason from "./welcomeComponents/Reason";
import Benefit from "./welcomeComponents/Benefit";
import Account from "./welcomeComponents/Account";
import Roadmap from "./welcomeComponents/Roadmap";
import Footer from "./welcomeComponents/Footer";

export default function WelcomePage() {
  useEffect(() => {
    window.scrollTo(0, window.outerHeight);
    document.documentElement.classList.add("scroll-smooth");
  }, []);
  const links: string[] = [
    "Аккаунт",
    "Главная",
    "Смысл",
    "Польза",
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
        <Account />
        <Hello />
        <Reason />
        <Benefit />
        <Roadmap />
      </main>
      <Footer />
    </>
  );
}
