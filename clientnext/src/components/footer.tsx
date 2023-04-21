import { useState } from "react";

export default function Footer() {

    const [utilisateurs, setUtilisateurs] = useState(0);
    const [abonnes, setAbonnes] = useState(0);

    return (
        <footer className="w-full h-24 flex items-center justify-center border-t">
            <div className="container mx-auto py-10">
                <div className="bg-white shadow-md rounded-lg p-6 w-64 mx-auto">
                    <div className="flex justify-between">
                        <div>
                            <p className="text-gray-500 uppercase">Utilisateurs</p>
                            <p className="text-xl font-bold">1,234</p>
                        </div>
                        <div>
                            <p className="text-gray-500 uppercase">Abonnés</p>
                            <p className="text-xl font-bold">567</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}