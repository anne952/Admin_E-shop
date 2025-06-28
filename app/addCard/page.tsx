"use client";
import React, { useState } from 'react';

export default function AddCard() {
    const [conpteur, setConpteur] = useState(0);
    const increment = () => {
        setConpteur(conpteur + 1);
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Add New Card</h1>
     <div>
        <table>
            <thead>
                <tr>
                <th className="px-4 py-2">Card Name</th>
                <th className="px-4 py-2">Card Number</th>
                <th className="px-4 py-2">Expiry Date</th>
                <th className="px-4 py-2">CVV</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="border px-4 py-2"><input type="text" placeholder="Card Name" className="w-full" /></td>
                <td className="border px-4 py-2"><input type="text" placeholder="Card Number" className="w-full" /></td>
                <td className="border px-4 py-2"><input type="text" placeholder="MM/YY" className="w-full" /></td>
                <td className="border px-4 py-2"><input type="text" placeholder="CVV" className="w-full" /></td>
                </tr>
            </tbody>
        </table>
     </div>
    </div>
  );
}