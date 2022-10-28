import { makeAutoObservable, toJS } from "mobx";
import ITheme from "../interfaces/ITheme";

class themeStore {
  constructor() {
    makeAutoObservable(this);
  }

  themeData: ITheme = {
    isMenuVisible: false,
    isSystemTheme: true,
    current: "system",
  };

  setTheme(theme: string, isSystem: boolean) {
    this.themeData.isMenuVisible = false;
    this.themeData.isSystemTheme = isSystem;
    if (theme === "dark" || "light") {
      this.themeData.current = theme;
    }
    if (theme === "system") {
      this.themeData.current = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
    }
    this.saveToLocalStorage();
  }

  toggleVisibility() {
    this.themeData.isMenuVisible = !this.themeData.isMenuVisible;
  }

  saveToLocalStorage() {
    const savedThemeObject = JSON.stringify(toJS(this.themeData));
    localStorage.setItem("Theme Data", savedThemeObject);
  }

  loadFromLocalStorage() {
    const loadedThemeObject: ITheme = JSON.parse(
      localStorage.getItem("Theme Data")!
    );
    this.themeData = loadedThemeObject;
  }
}

export default new themeStore();
