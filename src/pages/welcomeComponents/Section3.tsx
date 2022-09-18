import React, { useEffect } from "react";

// func
import { createFilter } from "../../func/filter";
import { createParallaxY } from "../../func/parallax";

// interfaces
import IFilterOptions from "../../interfaces/IFilterOptions";
import IParallaxYOptions from "../../interfaces/IParallaxYOptions";

export default function Section3() {
  const benefitParallaxItems: IParallaxYOptions[] = [
    {
      elem: "#benefit-title",
      power: 2,
      startFrom: window.outerHeight / 2,
      initialTranslateY: -400,
      finishAfter: 400,
    },
  ];
  const benefitFilterItems: IFilterOptions[] = [
    {
      elem: "#benefit-text",
      filterType: "opacity",
      initialFilterValue: 0,
      startFrom: window.outerHeight * 1.2,
      finishAfter: 400,
    },
  ];
  useEffect(() => {
    benefitParallaxItems.forEach((item) => {
      createParallaxY(item);
    });
    benefitFilterItems.forEach((item) => {
      createFilter(item);
    });
  }, []);
  return (
    <section id="Benefit" className="relative h-screen bg-neutral-200 z-30">
      <div className="flex flex-col justify-center lg:max-w-[60vw] h-full mx-[5vw] lg:ml-0 lg:mr-auto lg:px-[60px] overflow-hidden">
        <div className="mt-4 mb-8" id="benefit-title">
          <h2 className="text-[6vh] lg:text-[12vh] text-ssp text-left line-height-1">
            Стоит ли тебе его использовать?
          </h2>
          <p className="text-[1.5vh] lg:text-[2.5vh] text-raleway opacity-80">
            Что тебе даст использование приложения?
          </p>
        </div>
        <p
          id="benefit-text"
          className="mb-8 text-[2.5vh] lg:text-[3.5vh] text-raleway"
        >
          Данное приложение может быть использованно в различных областях, в том
          числе и для различных целей. В первую очередь оно подойдёт тем, кто
          собирается вести разного рода статистику. Если же у вас есть область,
          за которой вы хотите следить - думаю, вам стоит попробовать это
          приложение.
        </p>
        <a
          className="mr-auto mb-8 px-8 py-2 bg-app-200 hover:scale-95 text-[2vh] lg:text-[3vh] text-raleway rounded-2xl duration-200"
          href="#Account"
        >
          Создать аккаунт
        </a>
      </div>
    </section>
  );
}
