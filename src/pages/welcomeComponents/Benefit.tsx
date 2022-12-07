// react, router, mobx
import React, { useEffect } from "react";

// plugins, libs
import { animate, inView } from "motion";

// images
import UseAsset from "@/src/assets/WelcomeAssets/use.jpg";

export default function Benefit() {
  useEffect(() => {
    inView("#benefit-title", (elem) => {
      animate(
        elem.target,
        { filter: "opacity(1)", x: ["-100px", "0px"] },
        { duration: 0.5, delay: 0.5 }
      );
    });
    inView("#benefit-info", (elem) => {
      animate(
        elem.target,
        { filter: "opacity(1)", y: ["100px", "0px"] },
        { duration: 0.5, delay: 0.5 }
      );
    });
    if (window.innerWidth >= 1024) {
      window.addEventListener("pointermove", (event) => {
        document.querySelector<HTMLImageElement>(
          "#benefit-image"
        )!.style.transform = `scale(1.1) translate(${
          event.clientX / 75 + "px"
        }, ${event.clientY / 50 + "px"})`;
      });
    }
  }, []);

  return (
    <section
      id="Польза"
      className="relative flex justify-center flex-col lg:flex-row h-max rounded-none z-30 overflow-hidden"
    >
      <div className="content-text">
        <div id="benefit-title" style={{ filter: "opacity(0)" }}>
          <h2 className="hello-title">Стоит ли использовать?</h2>
          <p className="hello-subtitle mb-[20px] lg:mb-[40px]">
            Что тебе даст использование приложения?
          </p>
        </div>
        <div
          id="benefit-info"
          className="flex flex-col"
          style={{ filter: "opacity(0)" }}
        >
          <p id="benefit-text" className="text">
            В первую очередь оно подойдёт тем, кто собирается вести разного рода
            статистику. Если же у вас есть область, за которой вы хотите следить
            - думаю, вам стоит попробовать это приложение.
          </p>
          <a
            className="mr-auto button bg-app-400 dark:bg-app-450"
            href="#Аккаунт"
          >
            Создать аккаунт
          </a>
        </div>
      </div>
      <div className="content-image">
        <div className="image-crop">
          <img src={UseAsset} alt="UseAsset" id="benefit-image" />
        </div>
      </div>
    </section>
  );
}
