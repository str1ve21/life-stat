// react, router, mobx
import React, { useEffect } from "react";

// plugins, libs
import { animate, inView, timeline } from "motion";

// images
import welcomeAssetPC from "@/src/assets/WelcomeAssets/PC_Interface.png";
import welcomeAssetTablet from "@/src/assets/WelcomeAssets/Tablet_Interface.png";
import welcomeAssetPhone from "@/src/assets/WelcomeAssets/Phone_Interface.png";

export default function Hello() {
  const sequence: any[] = [
    [
      "#welcome-image",
      { top: ["10vh", "0vh"], filter: ["opacity(0)", "opacity(1)"] },
      { duration: 0.35, delay: 0.25, easing: "ease-out" },
    ],
    [
      "#welcome-text",
      { top: ["15vh", "-2vh", "0vh"], filter: ["opacity(0)", "opacity(1)"] },
      { duration: 0.5, easing: "ease-out" },
    ],
  ];
  useEffect(() => {
    timeline(sequence);
    inView("#welcome-text", () => {
      animate(
        "#title-logo",
        { color: ["#E8995A", "#EA81B6", "#EA81B6", "#E8995A"] },
        { duration: 5, repeat: Infinity }
      );
    });
  }, []);

  return (
    <section id="Главная" className="relative h-screen z-10 overflow-hidden">
      <div className="flex flex-col justify-between w-full h-full content-padding">
        <div
          id="welcome-text"
          className="relative flex flex-col justify-end h-full w-full mb-[80px] z-[12]"
        >
          <h1 className="hello-title text-center">
            Приложение <span id="title-logo">LifeStat</span>.
          </h1>
          <h2 className="hello-subtitle text-center mt-[20px]">
            Облегчит ведение статистики в разы.
          </h2>
        </div>
        <div
          id="welcome-image"
          className="relative flex justify-center h-[50vh] z-[13]"
        >
          <img
            className="hidden xl:block h-full object-contain object-center"
            src={welcomeAssetPC}
            alt="PC App interface"
          />
          <img
            className="hidden md:block xl:hidden h-full object-contain object-center"
            src={welcomeAssetTablet}
            alt="Tablet App interface"
          />
          <img
            className="block md:hidden h-full object-contain object-center"
            src={welcomeAssetPhone}
            alt="Phone App interface"
          />
        </div>
      </div>
    </section>
  );
}
