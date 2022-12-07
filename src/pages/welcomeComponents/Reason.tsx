// react, router, mobx
import React, { useEffect } from "react";

// plugins, libs
import { animate, inView } from "motion";

// images
import ReasonAsset from "@/src/assets/WelcomeAssets/reason.jpg";

export default function Reason() {
  useEffect(() => {
    inView("#reason-title", (elem) => {
      animate(
        elem.target,
        { filter: "opacity(1)", x: ["100px", "0px"] },
        { duration: 0.5, delay: 0.5 }
      );
    });
    inView("#reason-info", (elem) => {
      animate(
        elem.target,
        { filter: "opacity(1)", y: ["100px", "0px"] },
        { duration: 0.5, delay: 0.5 }
      );
    });
    if (window.innerWidth >= 1024) {
      window.addEventListener("pointermove", (event) => {
        document.querySelector<HTMLImageElement>(
          "#reason-image"
        )!.style.transform = `scale(1.1) translate(${
          -event.clientX / 75 + "px"
        }, ${-event.clientY / 50 + "px"})`;
      });
    }
  }, []);

  return (
    <section
      id="Смысл"
      className="relative flex flex-col lg:flex-row-reverse justify-center h-max bg-gradient-to-b from-app-300 dark:from-app-350 to-app-400 dark:to-app-450 round rounded-b-none z-20 overflow-hidden"
    >
      <div className="content-text">
        <div id="reason-title" style={{ filter: "opacity(0)" }}>
          <h2 className="hello-title lg:text-right">В чём смысл?</h2>
          <p className="hello-subtitle mb-[20px] lg:mb-[40px] lg:text-right">
            Почему это приложение появилось на свет.
          </p>
        </div>
        <div
          id="reason-info"
          className="flex flex-col"
          style={{ filter: "opacity(0)" }}
        >
          <p id="reason-text" className="text lg:text-right">
            Мне всегда было интересно знать некоторые вещи о себе. Например,
            сколько раз я гулял? Использовать блокнот или заметки в телефоне не
            очень удобно, поэтому для этих целей я решил создать это приложение.
          </p>
          <a
            className="mr-auto lg:mr-0 lg:ml-auto button bg-neutral-100 dark:bg-neutral-800"
            href="#Польза"
          >
            А нужно ли оно мне?
          </a>
        </div>
      </div>
      <div className="content-image">
        <div className="image-crop">
          <img src={ReasonAsset} alt="ReasonAsset" id="reason-image" />
        </div>
      </div>
    </section>
  );
}
