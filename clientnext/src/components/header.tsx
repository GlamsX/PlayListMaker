import { GetServerSideProps } from "next"
import { useState, useEffect } from "react"

export default function Header() {
    const [login, setLogin] = useState(false)

    // useEffect(() => {

    // }, [])

    return (
        <header className="flex items-center justify-between w-full h-24 px-24">
            <h1 className="text-4xl font-bold">Playlist Maker</h1>
            <div className="flex items-center space-x-3">
                {!login ? 
                    <>
                        <button className="bg-gray-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                            Connexion
                        </button>
                        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Inscription
                        </button>
                    </>
                : 
                    <>
                        <a className="cursor-pointer hover:underline">Paramètres</a>
                        <a 
                            className="cursor-pointer hover:underline" 
                            onClick={() => setLogin(false)}
                        >
                            Déconnexion
                        </a>
                    </>
                }
            </div>
        </header>
    )
}