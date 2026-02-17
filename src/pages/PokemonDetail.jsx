import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const PokemonDetail = () => {

    const { id } = useParams()
    const [pokemonUnique, setPokemonUnique] = useState(null)

    console.log(id)

    useEffect(() => {
        const fetchPokemonUnique = async () => {
            try {
                const response = await axios.get(`https://pokeapi.deno.dev/pokemon/${id}`)
                console.log(response?.data)
                setPokemonUnique(response?.data)
            }
            catch (err) {
                console.log(err)
            }
        }

        fetchPokemonUnique()
    }, [])

    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">


                <div className=" rounded-lg bg-white shadow-lg p-5 flex flex-col justify-center items-center gap-5 px-10">
                    <div className="w-full flex justify-start items-start gap-5">
                        <Link to="/pokedex" className="bg-red-600 hover:bg-red-800 hover:scale-105 text-white px-6 py-2 rounded-full cursor-pointer transition duration-300">
                            vover
                        </Link>
                    </div>
                    <img
                        src={pokemonUnique?.imageUrl}
                        alt="Pokemon"
                        className="w-40 h-40 object-contain"
                    />
                    <span className="text-gray-300">{`#${pokemonUnique?.id}`}</span>
                </div>
            </div>
        </>
    )
}

export default PokemonDetail