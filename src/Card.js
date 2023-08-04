import React from "react"
import "./Card.css"
import Img from "./imgs/image.svg"
export default function Card(){
    return(
        <div className="card">
        <div className="image">
            <img className="form-img"  src={Img} alt="form-img"></img>
        </div>
        <div className="forms">
            <form action="#">
                <div className="formHeader">
                    <h1 className="title">Cadastro</h1>
                <div className="login-button">  
                    <button className="button"> <a href="https://google.com.br">Entre</a> </button>
                </div>  
                </div>
                <div className="inputs">
                    <div className="inputBox">
                        <label className="label1" for="firstName">Primeiro nome</label>
                        <input type="text" id="firstName" name="firstName" placeholder="Digite seu nome" required></input>
                    </div>
                    <div className="inputBox">
                        <label className="label2" for="secondname">Sobrenome</label>
                        <input type="text" id="secondname" name="secondname" placeholder="Digite seu sobrenome" required></input>
                    </div>
                    <div className="inputBox">
                        <label className="label3" for="email">Email</label>
                        <input type="email" id="email" name="firstName" placeholder="Digite seu email" required></input>
                    </div>
                    <div className="inputBox">
                        <label className="label4" for="number">Telefone</label>
                        <input type="tel" id="number" name="number" placeholder="(xx) xxxx-xxxx" required></input>
                    </div>
                    <div className="inputBox">
                        <label className="label5" for="password">Senha</label>
                        <input type="password" id="password" name="password" placeholder=" *********" required></input>
                    </div>
                    <div className="inputBox">
                        <label className="label6" for="confirmpassword">Confirmar Senha</label>
                        <input type="password" id="confirmpassword" name="confirmpassword" placeholder=" ********* " required></input>
                    </div>
                </div>
                <div className="genderInputs">
                    <div className="genderTitle">
                        <h3>Gênero</h3>
                    </div>
                    <div className="genderGroup">
                        <div className="genderInput">
                            <input type="radio" id="male" name="gender"></input>
                            <label for="male">Masculino</label>
                        </div>
                        <div className="genderInput">
                            <input type="radio" id="female" name="gender"></input>
                            <label for="female">Feminino</label>
                        </div>
                        <div className="genderInput">
                            <input type="radio" id="other" name="gender"></input>
                            <label for="other">Outro</label>
                        </div>
                        <div className="genderInput">
                            <input type="radio" id="nottosay" name="gender"></input>
                            <label for="nottosay">Prefiro não dizer</label>
                        </div>

                    </div>

                </div>
                <button className="bigbutton">Continuar</button>
            </form>

        </div>
        </div>
    )
}