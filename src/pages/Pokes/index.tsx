import React, {useState, useEffect} from 'react';
import {Button, Title, Info} from './styles'
import pokeController from '../../Controller/PokeController'
import { RouteComponentProps, useParams } from 'react-router-dom';
import PokeAPI from "pokeapi-typescript";


import Poke from '../../model/Poke'

interface MatchParams {
    name: string;
  }


    const PokeInfo: React.FC<RouteComponentProps<MatchParams>> = props => {

    const [poke, setPoke] = useState<Poke>();

      useEffect(() => {
        const { name } = props.match.params
       // console.log(name);
        PokeAPI.Pokemon.fetch(name).then(result => setPoke(result));



      }, []);

    function getColor(type:string | undefined): string{

        switch(type){
            case 'normal':
                return '#BABAAE';

            case 'fighting':
                return '#A75543';

            case 'flying':
                return '#78A2FF';

            case 'poison':
                return '#A95CA0';

            case 'ground':
                return '#EECC55';

            case 'rock':
                return '#CCBD72';

            case 'bug':
                return '#C2D21E';

            case 'ghost':
                return '#7975D7';

            case 'steel':
                return '#C4C2DB';

            case 'fire':
                return '#FA5643';

            case 'water':
                return '#56ADFF';

            case 'grass':
                return '#8CD750';

            case 'electric':
                return '#FDE139';

            case 'psychic':
                return '#FA65B4';

            case 'ice':
                return '#96F1FF';

            case 'dragon':
                return '#8673FF';

            case 'dark':
                return '#8D6855';

            case 'fairy':
                return '#F9AEFF';

            case undefined:
                return '#fff';

            default:
                return '#fff';


        }


    }

    return (
        <>

        <a href="/">
                <Button>Voltar</Button>

            </a>
            <Title>Informações</Title>
            <Info style={{background: `linear-gradient(180deg, ${poke?.types[1] !== undefined  ?   getColor(poke?.types[1].type.name) :  getColor(poke?.types[0].type.name)} 45%, ${getColor(poke?.types[0].type.name)} 55%)`}}>
                <div >
                <img alt=' ' src={`${poke?.sprites.other?.["official-artwork"].front_default}`}/>
                <h1>{poke?.name}</h1>
                    <p>{poke?.stats[0].stat.name + ": " + poke?.stats[0].base_stat}</p>
                    <p>{poke?.stats[1].stat.name + ": " + poke?.stats[1].base_stat}</p>
                    <p>{poke?.stats[2].stat.name + ": " + poke?.stats[2].base_stat}</p>
                    <p>{poke?.stats[3].stat.name + ": " + poke?.stats[3].base_stat}</p>
                    <p>{poke?.stats[4].stat.name + ": " + poke?.stats[4].base_stat}</p>
                    <p>{poke?.stats[5].stat.name + ": " + poke?.stats[5].base_stat}</p>
                </div>
            </Info>
        </>
    )
};


export default PokeInfo;
