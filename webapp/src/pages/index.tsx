import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [youtubeUrl, setYoutubeUrl] = useState('')

  const handleButtonClick = () => {
    console.log(youtubeUrl)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <div className="w-full max-w-md bg-white p-8 rounded shadow">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold">
          Playlist Maker
        </h1>
      </div>

      <form className="space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <select className="w-32 px-2 py-2 border border-gray-300 rounded">
            <option value="spotify">Spotify</option>
            <option value="youtube">YouTube</option>
          </select>
          <span className="text-gray-500">→</span>
          <select className="w-32 px-2 py-2 border border-gray-300 rounded">
            <option value="spotify">Spotify</option>
            <option value="youtube">YouTube</option>
          </select>
        </div>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="text"
          placeholder="Entrez l'URL de la playlist"
        />
        <button
          className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded"
          type="submit"
        >
          Lancer la recherche
        </button>
      </form>

      <div className="mt-8">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">Nom de la playlist</h2>
          <div className="overflow-y-auto max-h-64">
            <ul className="space-y-2">
              {/* Bouclez sur la liste des titres et affichez chaque titre ici */}
              <li className="border-b  flex border-gray-200 py-2">
                <p className="font-semibold m-2">Titre de la chanson</p>
                <p className="text-gray-600 m-2">Nom de l'auteur</p>
              </li>
            </ul>
          </div>
        </div>

        <button
          className="w-full mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded"
          type="button"
        >
          <a href='http://localhost:3030/spotify/login'>
            Créer la liste sur la plateforme
          </a>
        </button>
      </div>

      <div className="mt-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-md font-semibold mb-2 border-b border-gray-200 pb-2">Titres indisponibles :</h3>
          <div className="overflow-y-auto max-h-32">
            <ul className="space-y-1">
              {/* Bouclez sur la liste des titres indisponibles et affichez chaque titre ici */}
              <li className="text-red-600">Titre indisponible 1</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
