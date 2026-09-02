import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Cadastro } from "./pages/Cadastro/Cadastro";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <div>Erro ao carregar a página inicial</div>
    },
    {
        path: "/cadastrar",
        element: <Cadastro />,
        errorElement: <div>Erro ao carregar a página de cadastro</div>
    }
])