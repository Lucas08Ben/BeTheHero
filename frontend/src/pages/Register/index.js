import React, { useState } from "react";

import logoImg from '../../assets/logo.svg';

import './styles.css'
import {FiArrowLeft} from "react-icons/fi";
import {Link, useHistory} from "react-router-dom";

import api from "../../services/api";

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [wpp, setWpp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();
    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name, email, wpp, city, uf
        };

        try{
            const response = await api.post('ong', data);

            alert(`Seu ID de acesso: ${response.data.id}`)
            history.push('/')
        }catch (err) {
            alert('Erro no cadastro, Tente novamente')
        }
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrar os casos da sua ONG.</p>
                    <Link className="back-link"  to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister} >
                    <input placeholder="Nome da ONG"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <input type="email" placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="Whatsapp"
                    value={wpp}
                    onChange={e => setWpp(e.target.value)}
                    />

                    <div className="input-group">
                        <input placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />
                        <input placeholder="UF" style={{width: 80}}
                        value={uf}
                        onChange={e => setUf(e.target.value)}/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    )

}