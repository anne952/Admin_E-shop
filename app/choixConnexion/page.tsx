import Link from "next/link";

export default function ChoixConnexion() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Choix de Connexion</h1>
            <div className="flex space-x-4">
                <Link href="/connexionAdmin" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Connexion Admin</Link>
                <Link href="/connexionClient" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Connexion Client</Link>
            </div>
        </div>
    );
}