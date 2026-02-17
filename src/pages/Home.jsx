import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">

            <div className="w-40 h-40 rounded-full bg-red-600 mb-5 animate-bounce flex justify-center items-center">
                <div className="w-32 h-32 rounded-full bg-white relative">
                    <div className="absolute top-1/2 h-2 bg-red-600 w-full -translate-y-1/2">
                    </div>
                    <div className="absolute top-1/2 h-8 w-8 bg-white border-4 border-red-600 rounded-full left-1/2 -translate-x-1/2  -translate-y-1/2">
                    </div>
                </div>
            </div>


            <h1 className="text-5xl font-extrabold text-gray-700 mb-7 text-center">Bienvenido Maestro Pokémon</h1>
            <h3 className="text-xl text-center text-gray-700 mb-7">Descubre el mundo de los Pokémon, explora sus estadísticas y conviértete en el mejor.</h3>
            <Link
                to="/pokedex"
                className="bg-red-600 hover:bg-red-800 hover:scale-105 text-white px-6 py-4 rounded-full cursor-pointer transition duration-300"
            >
                🚀 Ir a mi Pokedex
            </Link>
        </div>
    )
}

export default Home