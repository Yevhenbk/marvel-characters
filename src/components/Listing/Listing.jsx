import React, { useState, useEffect } from 'react';
import MD5 from 'crypto-js/md5'
import axios from 'axios';
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
import Modal from '../Modal/Modal';
import { DivStyled, OptionStyled, SectionStyled, SelectStyled, SpanStyled, SearchIcon, CloseIcon, 
LoaderStyled, CenteredDivStyled } from './ListingStyled';



/**
 * ! Define the Listing component
 */


const Listing = () => {

    // Defining states
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    const [order, setOrder] = useState('none')
    const [query, setQuery] = useState('')
    const [show, setShow] = useState(false)

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

        // Fetch Props
        const API_URL = process.env.REACT_APP_BASE_URL;
        const baseUrl = `${API_URL}/v1/public/characters`
        const ts = Date.now().toString()
        const apiKey = process.env.REACT_APP_PUBLIC_KEY
        const privateKey = process.env.REACT_APP_PRIVATE_KEY
        const hash = getHash(ts, privateKey, apiKey)
        
        // Define requests
        // const request_1 = 0
        // const request_2 = 100
        // const request_3 = 200
        // const request_4 = 300
        // const request_5 = 400
        const request_6 = 500
        // const request_7 = 600
        // const request_8 = 700
        // const request_9 = 800
        // const request_10 = 900
        
        setLoading(true)
        axios.get(`${baseUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=100&offset=${request_6}`).then(res => {
            setCharacters(res.data.data.results)
            setLoading(false)
            setTimeout(() => {setShow(true)}, 1000) 
            // console.log(res.data.data.results)
        }).catch(error => console.log(error))
        }, [])


        //* View Builder
        return (
            <>
            {show ? <Modal /> : <></>}
            <SectionStyled>
                <div>
                    <SpanStyled>Order</SpanStyled>                    
                    <SelectStyled defaultValue={'ascendic'} onChange={(e) => setOrder(e.target.value)}>
                        <OptionStyled value="ascending">Ascending A - Z</OptionStyled>
                        <OptionStyled value="descending">Descending Z - A</OptionStyled>
                    </SelectStyled>  
                </div>
                <SearchBar placeholder="Search by hero name..." value={query} onChange={(e) => setQuery(e.target.value.toLowerCase())}>
                    {query.length === 0 ? <SearchIcon/> : <CloseIcon onClick={() => setQuery("")} />}
                </SearchBar>
            </SectionStyled>
            {!loading ? 
            <DivStyled>{characters.filter(char => char.name.toLowerCase().includes(query))
            .sort(sortMethods[order].method).map((char) => (
                <Card 
                key={char.id} 
                img={char.thumbnail.path + '.jpg'}  
                title={char.name} 
                onError={event => {
                    event.target.src = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                    event.onerror = null
                }}
                detailImg={char.thumbnail.path + '.jpg'}
                detailName={char.name}
                detailDescription={char.description}
                detailResource={char.resourceURI}
                detailOnError={event => {
                    event.target.src = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
                    event.onerror = null
                }}
                detailComics={char.comics.collectionURI}
                />
            ))}
            </DivStyled>
            :
            <CenteredDivStyled>
                <LoaderStyled />
            </CenteredDivStyled>
            }
            </>
        )
}

//* Export component
export default Listing;