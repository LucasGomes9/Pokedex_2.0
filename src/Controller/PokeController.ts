import Axios from 'axios'
import api from '../service/api'
import Poke from '../model/Poke';


async function getAllPokes(offset:string):Promise<Poke[] | undefined> {

    let resp:Poke[] | undefined = [];

    api.get<Poke[]>(`pokemon?limit=100&offset=${offset}`).then(response => {

        console.log(response.data)

        resp = response.data;

    }).catch(error => {

        console.log("error getAllpokes: " + error)

        resp = undefined

    });


    return resp;
}

async function getPoke(index:string):Promise<Poke | undefined>{

    let resp: Poke | undefined = undefined ;

    api.get<Poke>(`pokemon/${index}`).then(response => {

        console.log(response.data)

        resp = response.data

    }).catch(error =>{

        console.log("error getPoke: " + error)

        resp = undefined

    });

    return resp;

}


export default {getAllPokes, getPoke};



