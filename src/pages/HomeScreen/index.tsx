import React from 'react';
import {IMG, Form, PokeList} from './styles';
import background from '../../assets/images/logo.png';



const HomeScreen: React.FC = () =>{
    return (
        <>
            <IMG src={background} alt="Background" />

            <Form>
                <input placeholder= "Digite o nome do Pokémon" />
                <button type="submit">Pesquisar na Pokedex</button>
            </Form>
            <PokeList>
            <ul >
            <a href="/pokedexBulbasaur?nome=bulbasaur">
                <li>
                    <img alt=' ' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"/>
                    <h2>1. Bulbasaur</h2>
                    <p >Tipo: grama e veneno</p>
                </li>
                </a>
                <a href="/pokedexVenusaur?nome=ivysaur">
                <li>
                    <img alt=' ' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"/>
                    <h2>2. Ivysaur</h2>
                    <p >Tipo: grama e veneno</p>
                </li>
                </a>
                <a href="/pokedexIvysaur?nome=Venusaur">
                <li>
                    <img alt=' ' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"/>
                    <h2>3. Venusaur</h2>
                    <p >Tipo: grama e veneno</p>
                </li>
                </a>
                <a href="/pokedexCharmander?nome=charmander">
                <li>
                    <img alt=' ' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"/>
                    <h2>4. Charmander</h2>
                    <p >Tipo: fogo</p>
                </li>
                </a>
                <a href="/pokedexCharmeleon?nome=charmeleon">
                <li>
                    <img alt=' ' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"/>
                    <h2>5. Charmeleon</h2>
                    <p >Tipo: fogo</p>
                </li>
                </a>
                <a href="/pokedexCharizard?nome=charizard">
                <li>
                    <img alt=' ' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"/>
                    <h2>6. Charizard</h2>
                    <p >Tipo: fogo e voador</p>
                </li>
                </a>
                <a href="/pokedexSquirtle?nome=squirtle">
                <li>
                    <img alt=' ' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"/>
                    <h2>7. Squirtle</h2>
                    <p >Tipo: agua</p>
                </li>
                </a>
                <a href="/pokedexWartortle?nome=wartortle">
                <li>
                    <img alt=' ' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"/>
                    <h2>8. Wartortle</h2>
                    <p >Tipo: agua</p>
                </li>
                </a>
                <a href="/pokedexBlastoise?nome=blastoise">
                <li>
                    <img alt=' ' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"/>
                    <h2>9. Blastoise</h2>
                    <p >Tipo: agua</p>
                </li>
                </a>
            </ul>

            </PokeList>
        </>

    )
};


export default HomeScreen;
