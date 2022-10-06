import { useParams, Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from "axios"

export default function Character() {
    const [character, setCharacter] = useState({})
    const [errorMessage, setErrorMessage] = useState(' ')
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect( () => {
        const getCharacter = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/character/${id}`)
                // console.log(response.data.editCharacter)
                setCharacter(response.data.editCharacter)
                
                
            } catch(err) {
                console.warn(err)
                if(err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }

            
        }
        getCharacter()
    }, [])


    return(
        <div>
            <div>
                <h1>Name: {character.name}</h1>
                <h2>Class: {character.class}</h2>
            </div>
            <div>
                <p>{character.ancestry}</p>
                <p>{character.diety}</p>
                <p>{character.age}</p>
            </div>
        </div>
    )
}