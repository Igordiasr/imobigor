import { Link } from 'react-router-dom';
import form from './ImovelForm.module.css';
import cadastro from '../../assets/cadastro.svg'
import { useState } from 'react';
import { api } from "../../services/api";
import { Modal } from '../Modal/Modal';

export function ImovelForm() {
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
    });

    const [estaAberto, setEstaAberto] = useState(false);

    const [mensagemModal, setMensagemModal] = useState("");

    const [mostrarVoltar, setMostrarVoltar] = useState(false);

    function mudarEstaAberto() {
        setEstaAberto(!estaAberto);
    }

    function salvarValor(evento, propriedade) {
        const novoValor = { ...imovel };
        if (
            propriedade === "preco" ||
            propriedade === "quartos" ||
            propriedade === "banheiros" ||
            propriedade === "area"
        ) {
            novoValor[propriedade] = Number(evento.target.value);
        } else {
            if (propriedade === "tipo") {
                novoValor["imagem"] = evento.target.value != "Studio" ? evento.target.value + ".jpg" : "apartamento.jpg";
            }
            novoValor[propriedade] = evento.target.value;
        }
        console.log(novoValor);
        setImovel(novoValor);
    }

    function cadastrar() {
        if (imovel.titulo === null || imovel.titulo.trim() === "") { return setMensagemModal("O preenchimento do título é obrigatório"), mudarEstaAberto() }
        if (imovel.tipo === null || imovel.tipo.trim() === "") { return setMensagemModal("O preenchimento do tipo é obrigatório"), mudarEstaAberto() }
        if (imovel.endereco === null || imovel.endereco.trim() === "") { return setMensagemModal("O preenchimento do endereço é obrigatório"), mudarEstaAberto() }
        if (imovel.cidade === null || imovel.cidade.trim() === "") { return setMensagemModal("O preenchimento da cidade é obrigatório"), mudarEstaAberto() }
        if (imovel.uf === null || imovel.uf.trim() === "") { return setMensagemModal("O preenchimento do estado é obrigatório"), mudarEstaAberto() }
        if (imovel.preco === null || imovel.preco <= 0) { return setMensagemModal("O preenchimento do preço do imóvel é obrigatório"), mudarEstaAberto() }
        if (imovel.quartos === null || imovel.quartos < 0) { return setMensagemModal("O preenchimento da quantidade de quartos é obrigatório"), mudarEstaAberto() }
        if (imovel.banheiros === null || imovel.banheiros < 0) { return setMensagemModal("O preenchimento da quantidade de banheiros é obrigatório"), mudarEstaAberto() }
        if (imovel.area === null || imovel.area <= 0) { return setMensagemModal("O preenchimento da área do imóvel é obrigatório"), mudarEstaAberto() }
        if (imovel.descricao === null || imovel.descricao.trim() === "") { return setMensagemModal("O preenchimento da descrição é obrigatório"), mudarEstaAberto() }

        api.post("/imoveis", imovel)
            .then(() => {
                setMensagemModal("Imóvel cadastrado com sucesso!");
                setMostrarVoltar(true);
                mudarEstaAberto();
            })
            .catch((erro) => {
                console.log(erro);
                setMensagemModal("Ocorreu um erro ao cadastrar o imóvel");
                mudarEstaAberto();
            })
    }
    if (estaAberto) {
        if (mostrarVoltar) {
            return (
                <Modal>
                    <h3>{mensagemModal}</h3>
                    <Link className={form.botao} to={"/"}>Voltar</Link>
                </Modal>
            )
        } else {
            return (
                <Modal>
                    <h3>{mensagemModal}</h3>
                    <button onClick={mudarEstaAberto}>Fechar</button>
                </Modal>
            )

        }
    }
    return (
        <div className={form.container}>
            <div className={form.titulo}>
                <h1>Cadastrar imóvel</h1>
                <p>Preencha os dados do imóvel</p>
            </div>
            <div className={form.formulario}>
                <div className={form.campo}>
                    <label htmlFor="titulo">Título</label>
                    <input type="text" defaultValue={imovel.titulo != "" ? imovel.titulo : ""} id="titulo" placeholder='Ex: Apartamento moderno no centro' onChange={(evento) => salvarValor(evento, "titulo")} />
                </div>
                <div className={form.campo}>
                    <label htmlFor="tipo">Tipo</label>
                    <select id="tipo" onChange={(evento) => salvarValor(evento, "tipo")} defaultValue={imovel.tipo != "" ? imovel.tipo : ""}>
                        <option value="">Selecione o tipo de imóvel</option>
                        <option value="Apartamento">Apartamento</option>
                        <option value="Casa">Casa</option>
                        <option value="Cobertura">Cobertura</option>
                        <option value="Studio">Studio</option>
                    </select>
                </div>
                <div className={form.campo}>
                    <label htmlFor="endereco">Endereço</label>
                    <input type="text" defaultValue={imovel.endereco != "" ? imovel.endereco : ""} id="endereco" placeholder='Ex: Rua Haddock Lobo, 595' onChange={(evento) => salvarValor(evento, "endereco")} />
                </div>
                <div className={form.campo}>
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text" defaultValue={imovel.cidade != "" ? imovel.cidade : ""} id="cidade" placeholder='Ex: São Paulo' onChange={(evento) => salvarValor(evento, "cidade")} />
                </div>
                <div className={form.campo}>
                    <label htmlFor="uf">Estado</label>
                    <select id="uf" defaultValue={imovel.uf != "" ? imovel.uf : ""} onChange={(evento) => salvarValor(evento, "uf")}>
                        <option value="">Selecione o estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                </div>
                <div className={form.campo}>
                    <label htmlFor="preco">Preço</label>
                    <input type="number" defaultValue={imovel.preco != "" ? imovel.preco : ""} id="preco" placeholder='Ex: 500000,00' onChange={(evento) => salvarValor(evento, "preco")} />
                </div>
                <div className={form.campo}>
                    <label htmlFor="quartos">Quantidade de quartos</label>
                    <input type="number" defaultValue={imovel.quartos != "" ? imovel.quartos : ""} id="quartos" placeholder='Ex: 2' onChange={(evento) => salvarValor(evento, "quartos")} />
                </div>
                <div className={form.campo}>
                    <label htmlFor="banheiros">Quantidade de banheiros</label>
                    <input type="number" defaultValue={imovel.banheiros != "" ? imovel.banheiros : ""} id="banheiros" placeholder='Ex: 3' onChange={(evento) => salvarValor(evento, "banheiros")} />
                </div>
                <div className={form.campo}>
                    <label htmlFor="area">Área (m²)</label>
                    <input type="number" defaultValue={imovel.area != "" ? imovel.area : ""} id="area" placeholder='Ex: 75,2' onChange={(evento) => salvarValor(evento, "area")} />
                </div>
                <div className={form.campo}>
                    <label htmlFor="descricao">Descrição</label>
                    <textarea type="text" defaultValue={imovel.descricao != "" ? imovel.descricao : ""} maxLength={500} id="descricao" placeholder='Ex: Apartamento moderno no centro' onChange={(evento) => salvarValor(evento, "descricao")} />
                </div>
            </div>
            <div className={form.botoes}>
                <Link className={form.link} to={"/"}>Voltar</Link>
                <button onClick={cadastrar}><img src={cadastro} width={30} alt="" />Cadastrar Imóvel</button>
            </div>
        </div>
    )
}