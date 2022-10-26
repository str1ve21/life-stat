import React, { useEffect } from "react";

// img
import UseAsset from "@/src/assets/WelcomeAssets/use.jpg";

// func
import { createFilter } from "../../func/filter";
import { createParallaxY } from "../../func/parallax";

// interfaces
import IFilterOptions from "../../interfaces/IFilterOptions";
import IParallaxYOptions from "../../interfaces/IParallaxYOptions";

export default function Section3() {
  // const benefitParallaxItems: IParallaxYOptions[] = [
  //   {
  //     elem: "#benefit-title",
  //     power: 2,
  //     startFrom: window.outerHeight / 1.5,
  //     initialTranslateY: -400,
  //     finishAfter: 400,
  //   },
  // ];
  // const benefitFilterItems: IFilterOptions[] = [
  //   {
  //     elem: "#benefit-text",
  //     filterType: "opacity",
  //     initialFilterValue: 0,
  //     startFrom: window.outerHeight * 1.4,
  //     finishAfter: 400,
  //   },
  // ];
  // useEffect(() => {
  //   benefitParallaxItems.forEach((item) => {
  //     createParallaxY(item);
  //   });
  //   benefitFilterItems.forEach((item) => {
  //     createFilter(item);
  //   });
  // }, []);
  return (
    <section
      id="Польза"
      className="relative flex h-[80vh] lg:h-screen bg-neutral-100 z-30"
    >
      <div className="flex flex-col justify-center lg:max-w-[70vw] 2xl:max-w-[50vw] content-padding">
        <div id="benefit-title">
          <h2 className="hello-title">Стоит ли тебе его использовать?</h2>
          <p className="hello-subtitle mb-[20px] lg:mb-[40px]">
            Что тебе даст использование приложения?
          </p>
        </div>
        <p id="benefit-text" className="text">
          В первую очередь оно подойдёт тем, кто собирается вести разного рода
          статистику. Если же у вас есть область, за которой вы хотите следить -
          думаю, вам стоит попробовать это приложение.
        </p>
        <a className="mr-auto button bg-app-200" href="#Аккаунт">
          Создать аккаунт
        </a>
      </div>
      <div className="hidden lg:flex justify-center items-center w-full h-screen">
        <img
          src={UseAsset}
          alt="UseAsset"
          className=" h-2/3 object-cover rounded-l-3xl"
        />
      </div>
    </section>
  );
}
