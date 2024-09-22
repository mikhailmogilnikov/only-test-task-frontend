# Тестовое задание Frontend в Only

[Live-версия](https://only-test-task-frontend.vercel.app)

### Инструкция по локальному запуску

1) Склонируйте репозиторий через SSH
```bash
git clone git@github.com:mikhailmogilnikov/only-test-task-frontend.git
```

2) Перейдите в директорию проекта
```bash
cd only-test-task-frontend
```

3) Установите зависимости
```bash
npm install
```

4) Соберите проект
```bash
npm run build
```

5) Запустите проект
```bash
npm run start
```

#### Решение будет доступно после запуска на `localhost:3000`

### Особенности

- Самописный сборщик на Webpack
- Настроенный линтер
- Прекоммит и препуш хуки (autolint, autoprettier, autobuild)
- Подключен CI (Github Actions)
- Архитектура FSD
- Стек: TypeScript, React, SCSS, GSAP, Swiper
- Оптимизации бандла (Chunk-splitting, Minified CSS, Tree Shaking) 
- Оптимизация CSS (PostCSS + Autoprefixer)

### Дополнительно

Посмотреть размер собранного бандла в расширенном формате
```bash
npm run build:analyze
```

Запустить проект в dev-режиме
```bash
npm run dev
```

Запустить проверку линтера
```bash
npm run lint
```


