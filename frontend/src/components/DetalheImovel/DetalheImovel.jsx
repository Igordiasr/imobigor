import detalhe from './DetalheImovel.module.css';
import areaUrl from "../../assets/area.svg"
import quartoUrl from "../../assets/bed.svg"
import banheiroUrl from "../../assets/bath.svg"
import casaUrl from "../../assets/house.svg"
import apUrl from "../../assets/building.svg"
import pinUrl from "../../assets/pin.svg"
import { Link } from 'react-router-dom';
import { Modal } from '../Modal/Modal';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function DetalheImovel(props) {
    const imovel = props.imovel;

    const [estaAberto, setEstaAberto] = useState(false);

    const [mensagem, setMensagem] = useState("");

    const getImageUrl = (nome) => {
        return new URL(`../../assets/${nome}`, import.meta.url).href;
    }

    function mudarEstaAberto() {
        setEstaAberto(!estaAberto);
    }

    function excluir() {
        api.delete(`/imoveis/${imovel.id}`)
            .then(response => {
                setMensagem("Imóvel excluído com sucesso!");
                setEstaAberto(false);
            })
            .catch(erro => {
                console.error("Erro ao excluir imóvel:", erro);
                setMensagem("Erro ao excluir imóvel, tente novamente em alguns instantes.");
                setEstaAberto(false);
            });
    }

    function confirmar() {
        setEstaAberto(true);
    }

    return (
        <div className={detalhe.container}>
            <Link className={detalhe.link} to={"/"}>Voltar para a lista de imóveis</Link>
            <div className={detalhe.imovel}>
                <img src={getImageUrl(imovel.imagem)} alt={imovel.tipo} width={600} />
                <div className={detalhe.info}>
                    <div className={detalhe.titulo}>
                        <h3>{imovel.titulo}</h3>
                        <p><img src={pinUrl} width={15} alt="Icone de alfinete de mapa" />{imovel.cidade} - {imovel.estado}</p>
                        <h2>{(imovel.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
                    </div>
                    <div className={detalhe.icons}>
                        <div className={detalhe.square}>
                            <div className={detalhe.squareIcons}>
                                <img src={quartoUrl} width={20} alt="Icone de cama" />
                                <h5>Quartos</h5>
                            </div>
                            <p>{imovel.quartos}</p>
                        </div>
                        <div className={detalhe.square}>
                            <div className={detalhe.squareIcons}>
                                <img src={banheiroUrl} width={20} alt="Icone de cama" />
                                <h5>Banheiros</h5>
                            </div>
                            <p>{imovel.banheiros}</p>
                        </div>
                        <div className={detalhe.square}>
                            <div className={detalhe.squareIcons}>
                                <img src={areaUrl} width={20} alt="Icone de cama" />
                                <h5>Área</h5>
                            </div>
                            <p>{imovel.area} m²</p>
                        </div>
                        <div className={detalhe.square}>
                            <div className={detalhe.squareIcons}>
                                {imovel.tipo === "Casa" ? <img src={casaUrl} width={20} alt="Icone de cama" /> : <img src={apUrl} width={20} alt="Icone de cama" />}
                                <h5>Tipo</h5>
                            </div>
                            <p>{imovel.tipo}</p>
                        </div>
                    </div>
                    <div className={detalhe.descricao}>
                        <h5>Descrição</h5>
                        <p>{imovel.descricao}</p>
                    </div>
                    <div className={detalhe.endereco}>
                        <h5>Endereço</h5>
                        <p>{imovel.endereco}</p>
                        <p>{imovel.cidade} - {imovel.uf}</p>
                    </div>
                </div>
            </div>
            <div className={detalhe.botao}>
                <button onClick={confirmar}>Excluir</button>
            </div>
            {estaAberto && (
                <Modal>
                    <h3>Você deseja realmente excluir esse imóvel?</h3>
                    <div className={detalhe.confirmacao}>
                        <button className={detalhe.confirmar} onClick={excluir}>Sim</button>
                        <button className={detalhe.cancelar} onClick={mudarEstaAberto}>Não</button>
                    </div>
                </Modal>
            )}
            {mensagem != "" && (
                <Modal>
                    <h3>{mensagem}</h3>
                    <Link className={detalhe.link} to={"/"}>Voltar</Link>
                </Modal>
            )}
        </div>
    )
}