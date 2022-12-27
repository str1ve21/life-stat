// react, router, mobx
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { autorun } from "mobx";

// stores
import STheme from "../../store/STheme";

const ThemeSwitcher = observer(() => {
  useEffect(() => {
    if (!!localStorage.getItem("Theme Data")) {
      STheme.loadFromLocalStorage();
    } else {
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? STheme.setTheme("dark", true)
        : STheme.setTheme("light", true);
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        if (STheme.themeData.isSystemTheme) {
          event.matches
            ? STheme.setTheme("dark", true)
            : STheme.setTheme("light", true);
        }
      });

    autorun(() => {
      if (STheme.themeData.current === "dark") {
        return document.documentElement.classList.add("dark");
      }
      if (STheme.themeData.current === "light") {
        return document.documentElement.classList.remove("dark");
      }
      if (STheme.themeData.isSystemTheme) {
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? STheme.setTheme("dark", true)
          : STheme.setTheme("light", true);
      }
    });
  }, []);

  return (
    <>
      <button
        className="h-max p-[5px] lg:p-[10px] hover:scale-95 bg-white dark:bg-black rounded-full duration-200"
        aria-label="Переключение темы"
        onClick={() => {
          STheme.toggleVisibility();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`icon hover:text-neutral-900 ${
            STheme.themeData.current === "light" ? "block" : "hidden"
          } ${
            STheme.themeData.isSystemTheme
              ? "text-emerald-500 dark:text-emerald-500"
              : "text-yellow-600"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`icon hover:text-neutral-100 ${
            STheme.themeData.current === "dark" ? "block" : "hidden"
          } ${
            STheme.themeData.isSystemTheme
              ? "text-emerald-500 dark:text-emerald-500"
              : "dark:text-sky-400"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </button>
      <div
        className={`absolute flex flex-col gap-[10px] top-[65px] md:top-[90px] lg:top-[110px] right-[15px] md:right-[35px] lg:right-[40px] xl:right-[60px] p-[10px] bg-white dark:bg-black rounded-2xl duration-200 ${
          STheme.themeData.isMenuVisible
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-[20px]"
        }`}
      >
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon hover:text-yellow-600"
            onClick={() => {
              STheme.setTheme("light", false);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon hover:text-sky-400"
            onClick={() => {
              STheme.setTheme("dark", false);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon hover:text-emerald-500"
            onClick={() => {
              STheme.setTheme("system", true);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
            />
          </svg>
        </button>
      </div>
    </>
  );
});

export default ThemeSwitcher;
