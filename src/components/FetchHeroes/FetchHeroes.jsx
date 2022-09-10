import React, { useState, useEffect } from 'react';
import MD5 from 'crypto-js/md5'
import axios from 'axios';
import Card from '../Card/Card';
import {DivStyled} from './FetchHeroes.Styled';

//* Functions
const getHash = (ts, secretKey, apiKey) => {
    return MD5(ts + secretKey + apiKey).toString()
}


/**
 * ! Define the FetchHeroes component
 */


const FetchHeroes = () => {

    const [characters, setCharacters] = useState([])

    useEffect( () => {

        //* Fetch Props
        const API_URL = process.env.REACT_APP_BASE_URL;
        const baseUrl = `${API_URL}/v1/public/characters`
        const ts = Date.now().toString()
        const apiKey = process.env.REACT_APP_PUBLIC_KEY
        const privateKey = process.env.REACT_APP_PRIVATE_KEY
        const hash = getHash(ts, privateKey, apiKey)

        //* Define requests
        const request_1 = `&limit=100&offset=0`
        const request_2 = `&limit=100&offset=100`
        const request_3 = `&limit=100&offset=200`
        const request_4 = `&limit=100&offset=300`
        const request_5 = `&limit=100&offset=400`
        const request_6 = `&limit=100&offset=500`
        const request_7 = `&limit=100&offset=600`
        const request_8 = `&limit=100&offset=700`
        const request_9 = `&limit=100&offset=800`
        const request_10 = `&limit=100&offset=900`
        
        axios.get(`${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}${request_1}`).then(res => {
           setCharacters(res.data.data.results)
            console.log(res.data.data.results) 
        }).catch(error => console.log(error))
        }, [])


        //* View Builder
        return (
            <DivStyled>{characters.map((char) => (
                <Card key={char.id} img={char.thumbnail.path + '.jpg'}  title={char.name} />
            ))}</DivStyled>
        )
}

//* Export component
export default FetchHeroes;