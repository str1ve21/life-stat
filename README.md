# LifeStat Documentation.

## FrontEnd.

--

## BackEnd.

> Авторизация:

Путем логина и пароля. Тут ничего необычного.  
В идеале бы ещё добавить вход через ВК, Яндекс, Гугл, но это если сможешь.  
Желательно сделать, чтоб авторизован был от 2 недель, или на твоё усмотрение.  

> Данные для хранения на сервере:

Данные пользователя:
- Логин (не почта).
- Пароль.
- В будущем будет храниться информация о кастомизации профиля в виде JSON.  
Название поля в БД предпочтительно "User Data"

Данные счётчиков:
- JSON массив.  
Название поля в БД предпочтительно "All Counters"
