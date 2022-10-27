import { makeAutoObservable } from "mobx";

class themeStore {
  constructor() {
    makeAutoObservable(this);
  }

  themeData = {
    isMenuVisible: false,
    isSystemTheme: true,
    current: "system",
  };

  setTheme(theme: string) {
    this.themeData.isMenuVisible = false;
    if (theme === "dark" || "light") {
      this.themeData.isSystemTheme = false;
      this.themeData.current = theme;
    }
    if (theme === "system") {
      this.themeData.isSystemTheme = true;
      this.themeData.current = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
    }
  }

  toggleVisibility() {
    this.themeData.isMenuVisible = !this.themeData.isMenuVisible;
  }
}

export default new themeStore();
