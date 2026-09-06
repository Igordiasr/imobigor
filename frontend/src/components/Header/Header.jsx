import { Link } from "react-router-dom";
import header from "./Header.module.css"
import homeUrl from "../../assets/home-smile.svg"


export function Header() {
    return (
        <div className={header.navbar}>
            <h2 style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                color: "white"
            }}><img src={homeUrl} width={40} />ImobIgor</h2>
            <div className={header.links}>
                <Link className={header.link} to="/">Imóveis</Link>
                <Link className={header.link} to="/cadastrar">Cadastrar imóvel</Link>
            </div>
        </div>
    )
}