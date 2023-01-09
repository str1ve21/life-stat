# LifeStat Documentation.

## FrontEnd.

> Стилизация импортов:

- react, router, mobx
- plugins, libs
- stores
- local functions
- interfaces
- components
- css
- images
- other

> Стилизация компонентов:

- Основной стиль - RFC (arrow для observer)
- const плагинов и/или библиотек
- const/let useState
- const/let пременных
- functions
- useEffect
- return TSX

> Стилизация классов:

- Кастомные компоненты
- Позиционирование
- Дисплей
- Сопуствие для дисплея
- Высота, ширина
- Отступы
- Фон и др. цвета
- Настройки шрифтов
- Прочие элементы

Функции идут по очереди mobile first.  
Свойства min и max идут по очереди, посередине обычное значение.  
Очередь отступов: gap, top, right, bottom, left, boredr, margin, padding.

Пример:  
className="dialog relative flex flex-row md:flex-col min-h-1/2 h-full max-h-screen gap-4 top-0 bottom-0 border-2 m-2 md:m-4 bg-black border-white text-orange-500 font-raleway z-20"  
(В основном конечно так, но порой я забивал).

## BackEnd.

> Основная документация:

https://github.com/SAwckA/life-stat-backend

> Авторизация:

Версия 1.1.1122 (Preview):
Логин, пароль. acess_token на 30 дней

В будущем:
Привязка Email  
OAuth2 при помощи YandexID, Google, VK

YandexID Api:`https://yandex.ru/id/business?utm_source=yandex&utm_medium=yandex-id&utm_campaign=link-owners-sites`

> Данные для хранения на сервере:

Данные пользователя:

Версия 1.1.1122 (Preview):

- Логин (не почта)
- Пароль

Данные счётчиков:

- JSON массив
- Данные о теме хранятся локально
