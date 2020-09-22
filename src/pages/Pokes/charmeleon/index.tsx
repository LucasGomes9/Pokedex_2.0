import React from 'react';
import { Title, Info} from './styles'

const PokeInfo: React.FC = () => {

    return (
        <>
            <Title>Informações</Title>
            <Info>
                <div>
                <img alt=' ' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"/>
                <h1>Nome: Charmeleon</h1>
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
