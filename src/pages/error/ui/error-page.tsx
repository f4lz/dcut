import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div>
      <h1>Страница не найдена</h1>
      <Link to="/" replace>
        На главную
      </Link>
    </div>
  );
};
