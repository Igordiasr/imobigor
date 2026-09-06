import { useEffect, useState } from "react";
import { CardsImovel } from "../../components/CardsImovel/CardsImovel";
import { api } from "../../services/api";
import cardImovel from "./Imoveis.module.css"
import { Header } from "../../components/Header/Header";


export function Imoveis() {
    const [carregando, setCarregando] = useState(true);
    const [imoveis, setImoveis] = useState([]);

    useEffect(() => {
        api.get('/imoveis')
            .then(response => {
                setImoveis(response.data);
            })
            .catch(error => {
                console.log("Erro ao buscar dados: " + error);
                return (
                    <div className={cardImovel.erro}>
                        <p>Houve um erro ao buscar os imóveis</p>
                    </div>
                )
            })
            .finally(() => {
                setCarregando(false)
            })
    }, []);
    if (carregando) return (
        <div className={cardImovel.carregando}>
            <h1>Carregando...</h1>
        </div>
    );
    return (
        <div>
            <Header />
            <CardsImovel imoveis={imoveis} />
        </div>
    )
}