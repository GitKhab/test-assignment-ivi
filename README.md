# Тестовое задание для ivi.ru

## Содержание

- [Описание приложения](#Описание-приложения)
- [Стек](#Стек)
- [Почему я выбрал такой стек?](#Почему-я-выбрал-такой-стек?)
- [Установка](#Установка)
- [Сборка проекта](#Сборка-проекта)

## Описание приложения

Проект представляет собой страницу с кнопкой по центру. Размеры кнопки и ее
содержимого зависят от ширины экрана. При наведении на кнопку (или тапу по ней)
изменяется фон страницы. При клике (или тапе) по кнопке запускается счетчик с
бесконечным циклом. Каждая итерация длится 750 миллисекунд. При завершении
одного цикла счетчик останавливается на 3 секунды и запускается заново.

## Стек

- Vue, Vuex (Nuxt)
- Sass (Scss)
- Netlify ([перейти к демо](https://priceless-cori-5b69aa.netlify.app))

## Почему я выбрал такой стек?

- **Реактивность**. Благодаря связке модели с представлением разрабатывать
  приложение и управлять его состоянием становится максимально быстро и
  комфортно. [Подробнее о реактивности](https://ru.vuejs.org/v2/guide/reactivity.html)
- **SEO**. Используя Nuxt + SSR можно сохранить прозрачность приложения для
  веб-краулеров
- **Простота**. В данном приложении нет сложных конструкций. Можно было бы
  обойтись классической связкой css + css-variables. Тем не менее я выбрал
  dart-sass за двукратный прирост скорости в совокупности с fibers.
  [Подробнее о sass-loader и fibers](https://webpack.js.org/loaders/sass-loader/)
- **Удобство**. С помощью Netlify можно быстро и комфортно развернуть
  приложение, как через Continuous Deployment, так и обычным drag-n-drop

> 📝 **Примечание** <br>
> После того, как я закончил тестовое задание, я подумал, а почему бы
> не написать альтернативную сборку с другим стеком. Собственно,
> [по этой ссылке](https://github.com/GitKhab/test-assignment-ivi-alt)
> доступна другая версия сборки данного проекта с использованием `Gulp`,
> `Vanilla JS`, `Pug` и `Stylus`

## Установка

В корне проекта выполнить команду установки зависимостей:

```bash
$ npm ci
```

<br>

> 📝 **Примечание** <br>
> Почему вместо `npm i` лучше использовать `npm ci` и в чем между ними различия
> можно посмотреть в [официальной документации](https://docs.npmjs.com/cli/v7/commands/npm-ci)

<br>

## Сборка проекта

Запуск сборки с параллельным запуском локального сервера и отслеживанием
изменений исходных файлов:

```bash
$ npm run dev
```

Запуск сборки на продакшен:

```bash
$ npm run generate
```

Запуск локального сервера для теста собранного проекта:

```bash
$ npm run start
```
