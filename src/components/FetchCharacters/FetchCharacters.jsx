import React, { useState, useEffect } from 'react';
import MD5 from 'crypto-js/md5'
import axios from 'axios';
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
import { DivStyled, OptionStyled, SectionStyled, SelectStyled, SpanStyled } from './FetchCharactersStyled';



/**
 * ! Define the FetchCharacters component
 */


const FetchCharacters = ({value}) => {

    // Defining states
    const [characters, setCharacters] = useState([])
    const [order, setOrder] = useState('none')

    //* Methods

    // Function to generate the hash for the API route
    const getHash = (ts, secretKey, apiKey) => {
        return MD5(ts + secretKey + apiKey).toString()
    }

    // Methods for sorting data
    const sortMethods = {
        none: { method: (a, b) => null },
        ascending: { method: function(a, b) {
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;} 
        },
        descending: { method: function(a, b) {
            if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase() < b.name.toLowerCase()) return 1;
            return 0;} 
        },
    };

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
            console.log(characters) 
        }).catch(error => console.log(error))
        }, [])


        //* View Builder
        return (
            <>
            <SectionStyled>
                <div>
                    <SpanStyled>Order</SpanStyled>
                    <SelectStyled defaultValue={'ascendic'} onChange={(e) => setOrder(e.target.value)}>
                        <OptionStyled value="ascending">Ascending A - Z</OptionStyled>
                        <OptionStyled value="descending">Descending Z - A</OptionStyled>
                    </SelectStyled>  
                </div>
                <SearchBar />
            </SectionStyled>
            <DivStyled>{characters.sort(sortMethods[order].method).map((char) => (
                <Card 
                key={char.id} 
                img={char.thumbnail.path + '.jpg'}  
                title={char.name} 
                onError={event => {
                    event.target.src = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                    event.onerror = null
                }}/>
            ))}
            </DivStyled>
            </>
        )
}

//* Export component
export default FetchCharacters;