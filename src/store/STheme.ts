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
  }

  toggleVisibility() {
    this.themeData.isMenuVisible = !this.themeData.isMenuVisible;
  }
}

export default new themeStore();
