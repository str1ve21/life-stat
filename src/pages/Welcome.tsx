import React, { useEffect } from "react";
import Navbar from "./allComponents/Navbar";
import Hello from "./welcomeComponents/Hello";
import Reason from "./welcomeComponents/Reason";
import Benefit from "./welcomeComponents/Benefit";
import Account from "./welcomeComponents/Account";
import Roadmap from "./welcomeComponents/Roadmap";
import Footer from "./allComponents/Footer";
import SureDialog from "./allComponents/SureDialog";
import SDialog from "../store/SDialog";
import { observer } from "mobx-react-lite";

const WelcomePage = observer(() => {
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
        {SDialog.sureDialogData.length > 0 && <SureDialog></SureDialog>}
        <Navbar
          href="/"
          isMobileExist={true}
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
});

export default WelcomePage;
