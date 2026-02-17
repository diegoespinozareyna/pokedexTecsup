import { Link } from "react-router-dom"

const PokemonCard = ({ poke }) => {
    return (
        <Link
            to={`/pokedex/${poke.id}`}
        >
            <div className="rounded-xl bg-white shadow-lg p-5 flex flex-col justify-center items-center gap-2 px-10">
                <img
                    src={poke.imageUrl}
                    alt="Pokemon"
                    className="w-40 h-40 object-contain"
                />
                <span className="text-gray-300">{`#${poke.id}`}</span>
                <h2 className="font-bold" >{poke.name}</h2>
                <button

                    style={{
                        backgroundColor: poke.color
                    }}

                    className="hover:scale-105 text-white px-6 py-2 rounded-full cursor-pointer transition duration-300 uppercase"
                >
                    {poke.genus}
                </button>
            </div>
        </Link>
    )
}

export default PokemonCard