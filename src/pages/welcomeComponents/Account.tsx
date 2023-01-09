// react, router, mobx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// stores
import SDialog from "../../store/SDialog";

// local functions
import { getCheckboxValue, getInputValue } from "../../func/getInputValue";
import { postAccountBody, serverURL } from "../../func/fetchData";

// interfaces
import IAccountData from "../../interfaces/IAccountData";
import ISureDialog from "../../interfaces/ISureDialog";

// components
//import HCaptcha from "@hcaptcha/react-hcaptcha";

// images
import AccountAsset from "@/src/assets/WelcomeAssets/account.jpg";

export default function Account() {
  const navigation = useNavigate();

  let [formState, setFormState] = useState("login");

  let [isShowPass, setIsShowPass] = useState(false);

  const dialogData: ISureDialog = {
    id: "wrongData",
    title: ``,
    text: ``,
    yesText: "Попробовать ещё",
    noText: "Закрыть",
    isYesFunc: false,
    isNoFunc: true,
    canClose: true,
    noFunction: () => {
      document
        .querySelector<HTMLDialogElement>("#sureDialog" + dialogData.id)!
        .close();
      SDialog.deleteDialog();
    },
  };

  async function accountLogic() {
    const data: IAccountData = {
      username: getInputValue("#input-login"),
      password: getInputValue("#input-password"),
    };

    const checkboxLicense: boolean = getCheckboxValue("#checkbox-license");
    const checkboxUserData: boolean = getCheckboxValue("#checkbox-userdata");

    if (data.username.length < 3) {
      dialogData.title = `Короткий логин.`;
      dialogData.text = `Длинна логина должна быть больше 4 символов.`;
      SDialog.createDialog(dialogData);
      return;
    }

    if (data.password.length < 7) {
      dialogData.title = `Ненадежный пароль.`;
      dialogData.text = `Пароль должен быть длиннее 8 символов.`;
      SDialog.createDialog(dialogData);
      return;
    }

    if (formState === "login") {
      const response = await fetch(
        `${serverURL()}/login`,
        postAccountBody(data)
      );
      switch (response.status) {
        case 200:
          localStorage.setItem("Username", data.username);
          navigation("/app");
          break;

        case 403:
          dialogData.title = `Неверный логин или пароль.`;
          dialogData.text = `Вероятно, что вы ввели неверный логин или пароль. Код ошибки: ${response.status}`;
          SDialog.createDialog(dialogData);
          break;

        default:
          dialogData.title = `Неизвестная ошибка.`;
          dialogData.text = `Возможно это проблема с сервером. Для большей информации поищите код ошибки сервера: ${response.status}`;
          SDialog.createDialog(dialogData);
      }
      return;
    }

    if (!checkboxLicense) {
      dialogData.title = `Пользовательское соглашение.`;
      dialogData.text = `При регистрации вы не поставили галочку напротив пользовательского соглашения. Это необходимо для дальнейшей регистрации`;
      SDialog.createDialog(dialogData);
      return;
    }

    if (!checkboxUserData) {
      dialogData.title = `Персональные данные.`;
      dialogData.text = `При регистрации вы не поставили галочку напротив согласия на передачу пользовательских данных. Это необходимо для дальнейшей регистрации`;
      SDialog.createDialog(dialogData);
      return;
    }

    const response = await fetch(
      `${serverURL()}/register`,
      postAccountBody(data)
    );
    switch (response.status) {
      case 200:
        setFormState((formState = "login"));
        localStorage.setItem("Username", data.username);
        dialogData.title = `Регистрация успешна.`;
        dialogData.text = `Теперь вы можете войти в свой аккаунт. Сохраните данные, восстановление пароля пока не работает!`;
        SDialog.createDialog(dialogData);
        break;

      case 409:
        dialogData.title = `Пользователь уже существует.`;
        dialogData.text = `Пользователь с таким логином уже существует. Код ошибки: ${response.status}`;
        SDialog.createDialog(dialogData);
        break;

      default:
        dialogData.title = `Неизвестная ошибка.`;
        dialogData.text = `Возможно это проблема с сервером. Для большей информации поищите код ошибки сервера: ${response.status}`;
        SDialog.createDialog(dialogData);
    }
  }

  // function onVerifyCaptcha(token: any) {
  //   console.log("Token is: " + token);
  // }

  return (
    <section
      id="Аккаунт"
      className="relative flex flex-col lg:flex-row justify-center h-screen min-h-[800px] bg-gradient-to-b from-app-100 dark:from-app-150 to-app-200 dark:to-app-250 round rounded-t-none overflow-hidden z-50"
    >
      <div className="content-data">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="form-vertical max-w-xl w-full mx-auto"
        >
          <h2
            className="title my-0 md:mb-[20px] md:mx-[40px] text-center"
            style={formState === "oauth" ? { margin: 0 } : {}}
          >
            {formState === "login"
              ? "С возвращением!"
              : formState === "register"
              ? "Добро пожаловать!"
              : "В разработке :("}
          </h2>
          <div className="buttons-bar">
            <button
              onClick={() => {
                setFormState((formState = "login"));
              }}
              aria-label="Вход"
              className={`button ${
                formState === "login"
                  ? "dark:bg-neutral-200 dark:text-neutral-800 bg-neutral-800 text-neutral-200"
                  : "bg-neutral-200 dark:bg-neutral-800"
              }`}
            >
              Вход
            </button>
            <button
              onClick={() => {
                setFormState((formState = "register"));
              }}
              aria-label="Регистрация"
              className={`button ${
                formState === "register"
                  ? "dark:bg-neutral-200 dark:text-neutral-800 bg-neutral-800 text-neutral-200"
                  : "bg-neutral-200 dark:bg-neutral-800"
              }`}
            >
              Регистрация
            </button>
            <button
              onClick={() => {
                setFormState((formState = "oauth"));
              }}
              aria-label="Регистрация"
              className={`button ${
                formState === "oauth"
                  ? "dark:bg-neutral-200 dark:text-neutral-800 bg-neutral-800 text-neutral-200"
                  : "bg-neutral-200 dark:bg-neutral-800"
              }`}
            >
              Другие способы
            </button>
          </div>
          {(formState === "login" || formState === "register") && (
            <>
              <label className="label">
                <span>Логин</span>
                <input id="input-login" type="text" />
              </label>
              <label className="label">
                <span>Пароль</span>
                <input
                  id="input-password"
                  type={isShowPass ? "text" : "password"}
                />
                <div className="absolute grid place-content-center right-[10px] bottom-[10px] h-[30px] w-[30px] dark:bg-neutral-200 bg-neutral-800 hover:scale-95 duration-200 cursor-pointer z-[100] rounded-full">
                  <svg
                    onClick={() => {
                      setIsShowPass(true);
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`icon dark:text-neutral-900 text-neutral-100 ${
                      isShowPass ? "hidden" : "block"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                  <svg
                    onClick={() => {
                      setIsShowPass(false);
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`icon dark:text-neutral-900 text-neutral-100 ${
                      isShowPass ? "block" : "hidden"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </label>
            </>
          )}
          {formState === "login" && (
            <div className="flex flex-col md:flex-row gap-[20px]">
              <button
                onClick={accountLogic}
                type="submit"
                aria-label="Вход"
                className="button w-full bg-neutral-200 dark:bg-neutral-800"
              >
                Вход
              </button>
              <button
                onClick={() => {
                  alert("Вспоминайте, функция пока в разработке :(");
                }}
                aria-label="Восстановление пароля"
                className="button w-full bg-neutral-200 dark:bg-neutral-800"
              >
                Забыли пароль?
              </button>
            </div>
          )}
          {formState === "register" && (
            <>
              <button
                onClick={accountLogic}
                type="submit"
                aria-label="Регистрация"
                className="button w-full mx-auto bg-neutral-200 dark:bg-neutral-800"
              >
                Регистрация
              </button>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  className="checkbox ml-3"
                  id="checkbox-userdata"
                />
                <span className="text-manrope ml-3 leading-none">
                  Я согласен с{" "}
                  <a href="#" className="text-app-150 dark:text-app-100">
                    обработкой персональных данных
                  </a>
                </span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  className="checkbox ml-3"
                  id="checkbox-license"
                />
                <span className="text-manrope ml-3 leading-none">
                  Я прочитал{" "}
                  <a href="#" className="text-app-150 dark:text-app-100">
                    пользовательское соглашение
                  </a>
                </span>
              </label>
            </>
          )}
          {/* <div className="mx-auto rounded-xl overflow-hidden">
            <HCaptcha
              sitekey={import.meta.env.VITE_HCAPTCHA_SITEKEY}
              onVerify={onVerifyCaptcha}
            ></HCaptcha>
          </div> */}
        </form>
      </div>
      <div className="content-image">
        <div className="image-crop">
          <img src={AccountAsset} alt="AccountAsset" id="reason-image" />
        </div>
      </div>
    </section>
  );
}
