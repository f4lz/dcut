**Демо:** https://f4lz.github.io/dcut/

## Архитектура

Проект построен по методологии **Feature-Sliced Design**:

```
src/
  app/        — инициализация приложения, провайдеры, роутинг
  pages/      — страницы (login, home, error)
  widgets/    — самостоятельные блоки UI (header, main-carousel)
  features/   — пользовательские сценарии (auth, logout, add-slide, delete-slide)
  entities/   — бизнес-сущности и их состояние (user, slide)
  shared/     — переиспользуемые утилиты без бизнес-логики (local-storage)
```

## Запуск проекта

```bash
npm ci

# режим разработки
npm run dev

# продакшн-сборка
npm run build

# локальный просмотр собранной сборки
npm run preview

# линт
npm run lint
```

## Деплой

Деплой на GitHub Pages настроен через GitHub Actions (`.github/workflows/deploy.yml`): при пуше в `main` проект собирается и публикуется в Pages. Ссылка репозитория — `f4lz/dcut`, поэтому `base` в `vite.config.ts` указывает на `/dcut/`.
