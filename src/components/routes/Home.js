import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Home() {
    const [characters, setCharacters] = useState([])
    const [err, setErr] = useState('')

    // console.log('server URL', process.env.REACT_APP_SERVER_URL)

    // const testServer = async () => {
    //     try {
    //         const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/character`)
    //         console.log(response.data.characters)
    //     } catch(err) {
    //         console.warn(err)
    //     }
    // }
    // testServer()

    useEffect( () => {
        const getCharacter = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/character`)
                setCharacters(response.data.characters)
                
                
            } catch(err) {
                console.warn(err)
                if(err.response) {
                    setErr(err.response.data.message)
                }
            }

            
        }
        getCharacter()
    }, [])
    const characterLinks = characters.map(character => {
        return (
            <div key={character._id}>
                <Link to={`/characters/${character._id}`}>{character.name}</Link>
            </div>
        )
    })

    return (
        <div>
            <h2>Characters</h2>
            {characterLinks}
        </div>
    )
}