import axios from "axios"
import { useEffect, useState } from "react"
import PokemonCard from "../components/PokemonCard"

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                setLoading(true)
                const response = await axios.get("https://pokeapi.deno.dev/pokemon?limit=1000")
                console.log(response.data)
                setPokemons(response.data)
            }
            catch (err) {
                console.log(err)
            }
            finally {
                setLoading(false)
            }
        }
        fetchPokemon()
    }, [])

    useEffect(() => {
        console.log(search)
    }, [search])

    const filteredPokemons = pokemons?.filter(poke => poke.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <div className="mt-12 px-10 max-w-5xl flex justify-center items-center mx-auto">
                <input
                    // value={search}
                    type="text"
                    placeholder="Buscar Pokemon"
                    className="w-full rounded-lg border-2 border-gray-400 px-6 py-3 text-gray-700"
                    onChange={(event) => setSearch(event.target.value)}
                />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4  h-screen gap-5 pt-5 px-10 max-w-5xl items-center justify-center align-middle mx-auto">
                {
                    loading ?
                        <div className="flex text-center justify-center items-center text-5xl text-red-600 col-span-2 md:col-span-4 animate-bounce">
                            <div>
                                CARGANDO POKEMONES...
                            </div>
                        </div>
                        :
                        filteredPokemons?.map((poke, index) => {
                            return (
                                <PokemonCard poke={poke} key={poke.id} />
                            )
                        })
                }

            </div>
        </>
    )
}
export default Pokedex