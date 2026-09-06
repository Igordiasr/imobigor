import { useParams } from 'react-router-dom';
import casa from './Imovel.module.css';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { Modal } from '../../components/Modal/Modal'
import { Header } from '../../components/Header/Header'
import { DetalheImovel } from '../../components/DetalheImovel/DetalheImovel';

export function Imovel() {
    const { id } = useParams();
    const [imovel, setImovel] = useState({
        titulo: "",
        tipo: "",
        endereco: "",
        cidade: "",
        uf: "",
        preco: 0,
        quartos: 0,
        banheiros: 0,
        area: 0,
        descricao: "",
        imagem: ""
    })

    useEffect(() => {
        api.get(`/imoveis/${id}`)
            .then(response => {
                setImovel(response.data);
            })
            .catch(erro => {
                console.log("Erro ao buscar dados: " + erro);
                return (
                    <Modal>
                        <h3>Houve um erro ao buscar os dados desse imóvel</h3>
                        <Link className={casa.botao} to={"/"}>Voltar</Link>
                    </Modal>
                )
            })
    }, [])

    return (
        <div>
            <Header />
            <DetalheImovel imovel={imovel} />
        </div>
    )
}