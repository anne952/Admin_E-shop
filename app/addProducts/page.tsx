"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddProducts() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const newProduct = {
            title: name,
            description,
            price: Number(price),
            image: "/compras.jpeg"
        };
        // Récupère les produits existants
        const products = JSON.parse(localStorage.getItem("products") || "[]");
        // Ajoute le nouveau produit
        products.push(newProduct);
        // Sauvegarde
        localStorage.setItem("products", JSON.stringify(products));
        // Redirige vers la page products
        router.push("/products");
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Add Products</h1>
            <form className="bg-white p-6 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded"
                        value={name} onChange={e => setName(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea className="w-full px-3 py-2 border border-gray-300 rounded"
                        value={description} onChange={e => setDescription(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                    <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded"
                        value={price} onChange={e => setPrice(e.target.value)} required />
                </div>
                
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Add Product</button>
            </form>
        </div>
    );
}