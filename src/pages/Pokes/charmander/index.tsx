import React from 'react';
import {Button, Title, Info} from './styles'

const PokeInfo: React.FC = () => {

    return (
        <>

        <a href="/">
                <Button>Voltar</Button>

            </a>
            <Title>Informações</Title>
            <Info>
                <div>
                <img alt=' ' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"/>
                <h1>Nome: Charmander</h1>
                    <p>Vida: 39</p>
                    <p>Ataque: 43</p>
                    <p>Velocidade: 27</p>
                    <p>Defesa: 60</p>
                    <p>Ataque Especial: 50</p>
                    <p>Defesa Especial: 65</p>
                </div>
            </Info>
        </>
    )
};


export default PokeInfo;
