import { createBrowserRouter } from "react-router-dom";
import { Imoveis } from "./pages/Imoveis/Imoveis";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Imovel } from "./pages/Imovel/Imovel";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Imoveis />,
        errorElement: <div>Erro ao carregar a página inicial</div>
    },
    {
        path: "/cadastrar",
        element: <Cadastro />,
        errorElement: <div>Erro ao carregar a página de cadastro</div>
    },
    {
        path: "/:id",
        element: <Imovel />,
        errorElement: <div>Erro ao carregar a página deste imóvel</div>
    }
])