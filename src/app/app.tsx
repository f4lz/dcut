import { AppProvider, ProtectedRoute } from "./providers";
import { Routes, Route } from "react-router-dom";
import { Login } from "@/pages/login/index";
import { Home } from "@/pages/home";
import { ErrorPage } from "@/pages/error";

export const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AppProvider>
  );
};
