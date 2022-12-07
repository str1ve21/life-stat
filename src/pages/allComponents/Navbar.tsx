// react, router, mobx
import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import ThemeSwitcher from "./ThemeSwitcher";

// interfaces
interface IProps {
  href: string;
  linksArray?: string[];
  customClass: string;
  isMobileExist: boolean;
}

// images
import IconAsset from "@/src/assets/logo.svg";

export default function Navbar(props: IProps) {
  const linksArray: string[] = props.linksArray! || [];

  const [isMobileMenu, toggleMobileMenu] = useState(false);

  return (
    <header
      className={`${props.customClass} flex justify-between min-w-[320px] w-full h-[60px] md:h-[70px] lg:h-max py-[10px] lg:py-[20px] content-padding z-[100] rounded-b-2xl lg:rounded-b-[40px]`}
    >
      <Link
        to={props.href}
        className="flex items-center h-[30px] md:h-[40px] lg:h-[50px] my-auto"
      >
        <img src={IconAsset} alt="Logo" className="h-full rounded-lg" />
        <span className="ml-[10px] lg:ml-[20px] text-logo">LifeStat</span>
      </Link>
      <nav className="hidden lg:flex justify-around items-center w-max ml-auto mr-[60px] text-nav bg-clip-text bg-gradient-to-r from-app-100 to-app-600">
        {linksArray.map((item: string) => {
          return (
            <a
              className="ml-[20px] w-max hover:text-transparent text-raleway duration-200"
              href={"#" + item}
              key={item}
            >
              {item}
            </a>
          );
        })}
      </nav>
      <div className="flex gap-[20px] my-auto">
        {props.isMobileExist && (
          <button
            onClick={() => {
              toggleMobileMenu((prev) => !prev);
            }}
            className="flex lg:hidden h-max p-[5px] bg-white dark:bg-black rounded-full"
          >
            {isMobileMenu && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="icon text-rose-300 dark:text-rose-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
            {isMobileMenu === false && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        )}
        <div
          className={`absolute flex lg:hidden flex-col w-[calc(100%-95px)] md:w-[calc(100%-110px)] gap-[10px] top-[65px] md:top-[70px] left-[20px] right-[75px] md:right-[120px] p-[20px] bg-white dark:bg-black rounded-2xl ${
            isMobileMenu ? "flex" : "hidden"
          }`}
        >
          <nav className="flex flex-wrap gap-[10px] h-max text-nav bg-clip-text bg-gradient-to-r from-app-600 to-app-100">
            {linksArray.map((item: string) => {
              return (
                <a
                  className="mx-auto hover:text-transparent text-raleway duration-200"
                  href={"#" + item}
                  key={item}
                  onClick={() => {
                    toggleMobileMenu((prev) => !prev);
                  }}
                >
                  {item}
                </a>
              );
            })}
          </nav>
        </div>
        <ThemeSwitcher></ThemeSwitcher>
      </div>
    </header>
  );
}
