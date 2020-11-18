import React, {useState, useEffect} from 'react';
import {IMG, PokeList, Listas, Listas2} from './styles';
import background from '../../assets/images/logo.png';
import Poke from '../../model/Poke'
import api from '../../service/api'
import { Link } from 'react-router-dom';


import PokeAPI from "pokeapi-typescript";


interface PokeAPI2 {
    name:                string;
    url: string;

}

const HomeScreen: React.FC = () =>{


    //const [pokes, setPokesList] = useState<PokeAPI2[]>([]);
    const [listPokes, setListPokes] = useState<Poke[]>([])
    const [poke, setPoke] = useState<PokeAPI>();

    useEffect(() => {
        //PokeAPI.Pokemon.list(151, 0).then(result => setPokesList(result.results));
        //PokeAPI.Pokemon.fetch("pikachu").then(result => setPoke(result)); */
        let pokeArr: Poke[] = []

        for (let i = 1; i <= 151; i++) {
            const url = `pokemon/${i}`;
            api.get<Poke>(url).then((response: { data: any; }) => {

               // setListPokes([...listPokes, response.data]);
               setListPokes([...listPokes, response.data]);

                pokeArr.push(response.data);
              //  console.log(response.data);

            }).catch((error: string) => {

                console.log("error getAllpokes: " + error)


            });

        }
        console.log(pokeArr);
        setListPokes(pokeArr);

      }, []);


    return (
        <>
            <IMG src={background} alt="Background" />

        {     <PokeList>
                <ul>

                {
                    listPokes.map(poke =>

                        <>
                    <li key={poke.id}>

                        <Link  to={`/${poke.name}`}>
                        <img alt=' ' src={`${poke.sprites.other?.["official-artwork"].front_default}`}/>
                        <h2>{poke.id + ". " + poke.name}</h2>
                        <p >Tipo: {poke.types.map((poke: any) => poke.type.name).join(", ")}</p>
                        </Link>

                    </li>

                    <li key={poke.id}>

                        <Link  to={`/${poke.name}`}>
                        <img alt=' ' src={`${poke.sprites.other?.["official-artwork"].front_default}`}/>
                        <h2>{poke.id + ". " + poke.name}</h2>
                        <p >Tipo: {poke.types.map((poke: any) => poke.type.name).join(", ")}</p>
                        </Link>

                    </li>
                    </>


                )
                }

                </ul>


            </PokeList>
 }
        </>

    )
};


export default HomeScreen;
