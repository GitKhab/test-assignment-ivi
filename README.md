# Тестовое задание для ivi.ru

### Содержание
- [Описание приложения](#Описание-приложения)
- [Пояснения](#Пояснения)
- [Процесс сборки](#Процесс-сборки)

### Описание приложения

Проект представляет собой страницу с кнопкой по центру. Размеры кнопки и ее содержимого зависят от ширины экрана. При
наведении на кнопку (или тапу по ней) изменяется фон страницы. При клике (или тапе) по кнопке запускается счетчик с
бесконечным циклом. Каждая итерация длится 750 миллисекунд. При завершении одного цикла счетчик останавливается на 3
секунды и запускается заново.

### Пояснения

<details>
<summary>Почему Nuxt?</summary>

- **Все из коробки**. Работая с Nuxt можно забыть о большом количестве механической работы (установка базовых пакетов,
  настройка кэширования и так далее). В Gulp все придется настраивать вручную. На 20 раз это выматывает
- **SEO**. Используя Nuxt на боевых проектах можно настроить SSR или сгенерировать проект статически
- **Комьюнити**. У Vue в общем и у Nuxt в частности большое сообщество. Всегда можно найти решение появившейся проблемы
</details>

<details>
<summary>Почему Sass?</summary>

> Выбор препроцессора не принципиален. Если нет требований - использую то, с чем имел больше опыта. В данном случае это
Sass
</details>

<details>
<summary>Почему, используя Sass, я не пользуюсь вложениями?</summary>

> Когда вложенных элементов становится много, становится очень сложно ориентироваться в классах. Приходится постоянно
скроллить до родителя, чтобы понять, к чему относится вложенный класс. Но есть исключения (например, псевдоклассы или
псевдоэлементы вкладывать довольно удобно)
</details>

<details>
<summary>Почему Netlify?</summary>

> Простейший способ развернуть приложение. Удобный процесс Continuous Deployment
</details>

<details>
<summary>О чем я позаботился?</summary>

- **Локальный сервер**. При запуске команды `npm run dev` вместо `localhost` определяется локальная сеть устройства. Это
  позволяет тестировать проект с любого устройства в пределах заданной сети
- **Поворот не туда**. Предусмотрен ответ для несуществующей страницы
- **Эстетика**. Шрифты + плавное переключение фона страницы + фавиконка
</details>

### Процесс сборки

```bash
# Установка зависимостей
$ npm install

# Запуск локального сервера с hot-reload
$ npm run dev

# Генерация финальной сборки и тест на локальном сервере
$ npm run generate
$ npm run start
```
