import React from "react"
import { Container } from "./styles"
import NotFoundImg from '../../assets/images/404_icon.png';
import { NavLink } from "react-router-dom";


export default function NotFoundPage() {
    return (
        <Container >
            <div className="container">
                <img src={NotFoundImg} alt="" />
                <h1>A página solicitada, não foi encontrada.</h1>
                <div>
                    <NavLink to="/" className="btn-404">
                        Voltar para a página inicial
                    </NavLink>
                </div>
            </div>
        </Container>
    )
}