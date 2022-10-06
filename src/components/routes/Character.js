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
                console.log(response.data)
                // setCharacter(response.data)
                
                
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
            Character Component
        </div>
    )
}