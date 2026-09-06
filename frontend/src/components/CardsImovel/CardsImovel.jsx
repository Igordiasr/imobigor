import cards from "./CardsImovel.module.css"
import areaUrl from "../../assets/area.svg"
import quartoUrl from "../../assets/bed.svg"
import { Link } from "react-router-dom";
import banheiroUrl from "../../assets/bath.svg"

export function CardsImovel(props) {
    const getImageUrl = (nome) => {
        return new URL(`../../assets/${nome}`, import.meta.url).href;
    }
    return (
        <div className={cards.painel} >
            {props.imoveis.map(imovel =>
                <div key={imovel.id}>
                    <Link className={cards.card} id={imovel.id} to={`/${imovel.id}`}>
                        <img src={getImageUrl(imovel.imagem)} alt={imovel.tipo} width={300} height={235} />
                        <h4>{imovel.titulo}</h4>
                        <div className={cards.descricao}>
                            <p className={cards.destaque}>{imovel.cidade} - {imovel.uf}</p>
                            <p style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center"
                            }}><img src={quartoUrl} style={{ marginRight: "5px" }} width={20} /> {imovel.quartos}</p>
                            <p style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center"
                            }}><img src={banheiroUrl} style={{ marginRight: "5px" }} width={20} /> {imovel.banheiros}</p>
                            <p style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center"
                            }}><img src={areaUrl} style={{ marginRight: "5px" }} width={20} />{imovel.area}m²</p>
                        </div>
                        <h4>{(imovel.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
                    </Link>
                </div>
            )}
        </div>
    )
}