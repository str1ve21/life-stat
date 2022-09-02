import React, { useEffect } from "react";

//func
import { createParallaxY, createOpacity } from "../../func/parallax";

// interfaces
import IParallaxYOptions from "../../interfaces/IParallaxYOptions";

export default function Section2() {
  const aboutParallaxItems: IParallaxYOptions[] = [
    {
      scrollBlock: "#page",
      elem: "#about-title",
      power: 2,
      initialTranslateY: -200,
      finishAfter: 200,
    },
  ];
  useEffect(() => {
    aboutParallaxItems.forEach((item) => {
      createParallaxY(item);
    });
    createOpacity({
      scrollBlock: "#page",
      elem: "#about-text",
      filterType: "opacity",
      initialFilterValue: 0,
      startFrom: window.outerHeight / 3,
      finishAfter: 200,
    });
  }, []);
  return (
    <section id="About" className="relative h-[3000px] bg-app-100 z-50">
      <div className="lg:w-full mx-[5vw] lg:mx-0 lg:px-[120px] overflow-hidden">
        <h2
          id="about-title"
          className="text-[4vh] lg:text-[10vh] text-ssp text-center"
        >
          В чём смысл?
        </h2>
        <p
          id="about-text"
          className="lg:max-w-[66vw] mx-auto text-[1.5vh] lg:text-[3vh] text-raleway text-center"
        >
          Мне всегда было интересно знать некоторые вещи о себе. Например,
          сколько печенек я съел? Надеяться на то, что я буду знать об этом
          после сморти мне не очень нравилось, а использовать блокнот или
          заметки в телефоне не очень удобно. Для этих целей я решил создать это
          приложение, возможно, не одному мне оно пригодится.
        </p>
      </div>
    </section>
  );
}
