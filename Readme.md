# Домашнее задание к лекции «Unit-тестирование» "Чистые функции"

[![Build status](https://ci.appveyor.com/api/projects/status/iw78vc2cfqwpjgp5?svg=true)](https://ci.appveyor.com/project/NMYurchenko-max/ajs-hw-3-1-cleanfunction)

## Описание

Реализовано 2 функции:
обе принимают на вход объект вида:

```javascript
{name: 'Маг', health: 90}
```

1. Функция getHealthStatus:
Возвращает цвет здоровья в зависимости от значения здоровья:
green — здоров
yellow — ранен
red — критическое
Пример использования:

````js
const statusColor = getHealthStatus({name: 'Маг', health: 90});
console.log(statusColor); // 'green'
```

1. Функция showHealth:
выводятся сообщения о состоянии здоровья персонажей.
Возвращает ответ в виде одной из строк: `healthy`, `wounded`, `critical`.
Пример использования:

```js
const healthStatus = showHealth({name: 'Маг', health: 90});
console.log(healthStatus); // 'healthy'
```
Вместе они используются в файле app.js (точка входа) и после сборки проекта (bundle.js) демонстрируются в файле index.html.
В результате получился наглядный индикатор здоровья персонажей:![result.png](/image/result.png)

Для запуска тестов необходимо выполнить команду: `npm test`. Рапорт о покрытии тестами выводится в консоль.

Запуск линтера:
Для запуска линтера необходимо выполнить команду: `npm run lint`

Запуск сборки:
Для сборки проекта используйте команду: `npm run build`,

Для запуска сервера разработки используйте команду: `npm start`

Все три команды (lint, test, build) объедены для обязательного выполнения перед каждым коммитом в git.

Сделана интеграция с AppVeyor

## Использование проекта

Для использования проекта необходимо склонировать репозиторий:

```bash

git clone https://github.com/NMYurchenko-max/ajs-hw-3.1-CleanFunction.git
```
После чего установить зависимости:

```bash
npm install
```
