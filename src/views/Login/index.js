import React from "react";
import './style.css';
import imgEstoque from '../../assets/images/img-estoque.jpg';
import logo from '../../assets/images/logo.png';

export default function Login() {

    return (
        <main className="tela-login">
            <div className="tela-login__container-lado-esquerdo">
                <img src={ imgEstoque } className="tela-login__container-lado-esquerdo__foto-estoque" alt="Foto de um galpão de estoque de produtos" />
            </div>
            <div className="tela-login__container-lado-direito">
                <div className="tela-login__container-lado-direito__container-login">
                    <img src={ logo } className="tela-login__container-lado-direito__container-login__logo" alt="Logo do projeto Estoque Plus" />
                    <form className="tela-login__container-lado-direito__container-login__form">
                        <div className="tela-login__container-lado-direito__container-login__form__grupo">
                            <input type="email" className="tela-login__container-lado-direito__container-login__form__grupo__campo" placeholder="E-mail*" />
                        </div>
                        <div className="tela-login__container-lado-direito__container-login__form__grupo">
                            <input type="password" className="tela-login__container-lado-direito__container-login__form__grupo__campo" placeholder="Senha*" />
                        </div>
                        <button type="submit" className="tela-login__container-lado-direito__container-login__form__btn-entrar">Entrar</button>
                    </form>
                    <p className="tela-login__container-lado-direito__container-login__link-cadastrarse">Ainda não está cadastrado? <a href="#">Clique e cadastre-se</a></p>
                </div>
            </div>
        </main>
    );
}