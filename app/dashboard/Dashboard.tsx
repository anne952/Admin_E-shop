"use client";
import React from 'react'
import Layout from "@/app/components/slideLayout"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
   PieChart, Pie, Cell 
} from "recharts";

const data = [
  { mois: "Jan", mobile: 400, desktop: 240 },
  { mois: "Fév", mobile: 300, desktop: 139 },
  { mois: "Mars", mobile: 200, desktop: 980 },
  { mois: "Avr", mobile: 278, desktop: 390 },
  { mois: "Mai", mobile: 189, desktop: 480 },
  { mois: "Juin", mobile: 239, desktop: 380 },
];


const datas = [
  { name: "Revenu", value: 7500 },
  { name: "Restant", value: 2500 }
];

const COLORS = ["#3b82f6", "#e5e7eb"];



const Dashboard = () => {
  return (
   <Layout>
     
      <h1 className='font-bold text-2xl'>Dashboard</h1>
      <section className='ml-auto p-2'>
      <div className="cards flex flex-wrap gap-4 mt-4 ">
        <div className="card  text-black p-6  rounded-lg shadow-md w-60">
          <h2 className='text-xl'> Products</h2>
          <div className="flex  gap-2">
            <p className='text-3xl font-bold'>150</p>
            <div className="barre-progress bg-gray-200 w-full h-2 rounded-lg mt-3">
              <div className="bg-blue-200 h-2 rounded-lg " style={{ width: '50%' }}></div>
            </div>
          </div>
           <div className="rounded-lg bg-red-400 p-2 mt-2">
              <p className='text-sm'>18.11 %</p>
            </div>
        </div>
        <div className="card  text-black p-4 rounded-lg shadow-md w-60">
          <h2 className='text-xl'>Orders</h2>
           <div className="flex  gap-2">
            <p className='text-3xl font-bold'>75</p>
            <div className="barre-progress bg-gray-200 w-full h-2 rounded-lg mt-3">
              <div className="bg-blue-200 h-2 rounded-lg " style={{ width: '30%' }}></div>
            </div>
          </div>
          <div className="rounded-lg bg-red-400 p-2 mt-2">
              <p className='text-sm'>12.06 %</p>
            </div>

       </div>
        <div className="card  text-black p-4 rounded-lg shadow-md w-60">
          <h2 className='text-xl'>Users</h2>
          <div className="flex  gap-2">
            <p className='text-3xl font-bold'>300</p>
            <div className="barre-progress bg-gray-200 w-full h-2 rounded-lg mt-3">
              <div className="bg-blue-200 h-2 rounded-lg " style={{ width: '70%' }}></div>
            </div>
          </div>
          
            <div className="rounded-lg bg-blue-100 p-2 mt-2">
              <p className='text-sm'>36.45 %</p>
            </div>
          
        </div>
        <div className="card  text-black p-4 rounded-lg shadow-md w-60">
          <h2 className='text-xl'>Revenue</h2>
          <div className="flex  gap-2">
            <p className='text-3xl font-bold'>$5000</p>
            <div className="barre-progress bg-gray-200 w-full h-2 rounded-lg mt-3">
              <div className="bg-blue-200 h-2 rounded-lg " style={{ width: '80%' }}></div>
            </div>
          </div>
          
            <div className="rounded-lg bg-green-100 p-2 mt-2">
              <p className='text-sm'>25.00 %</p>
            </div>
          </div>
          <div className="card  text-black p-4 rounded-lg shadow-md w-60">
          <h2 className='text-xl'>Vues</h2>
          <div className="flex  gap-2">
            <p className='text-3xl font-bold'>5k</p>
            <div className="barre-progress bg-gray-200 w-full h-2 rounded-lg mt-3">
              <div className="bg-blue-200 h-2 rounded-lg " style={{ width: '80%' }}></div>
            </div>
          </div>
          
            <div className="rounded-lg bg-green-100 p-2 mt-2">
              <p className='text-sm'>25.00 %</p>
            </div>
          </div>

      </div>
     </section>

     <section className='diagramme  mt-10 '>
      <div className="flex space-x-4">
        <div className="en-bâton">
        <div className="w-[900px] h-[400px] bg-white p-4 rounded shadow">
      <h2 className="text-sm mb-4 ">Visites par mois</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="mois" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="mobile" fill="#039af3 " name="Mobile" />
          <Bar dataKey="desktop" fill="#d6ecf9 " name="Desktop" />
        </BarChart>
      </ResponsiveContainer>
    </div>
      </div>

      <div className="circulaire ">
         <div className="flex flex-col items-center p-4 bg-white rounded shadow w-fit">
      <h2 className="text-lg font-bold mb-4">Revenu Total</h2>

      <div className="relative w-[300px] h-[320px] items-center justify-center">
        <div className="mt-2"></div>
        <PieChart width={300} height={300} >
          <Pie
            data={datas}
            innerRadius={70}
            outerRadius={90}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            paddingAngle={5}
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        <div className="mt-4"></div>

          {/* Légende automatique */}
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            formatter={(value) => (
              <span className="text-sm text-gray-700 mt-2">{value}</span>
            )}
          />
        </PieChart>

        {/* Montant centré */}
        <div className="flex items-center justify-center">
          <span className="text-xl font-bold text-blue-600">7 500 €</span>
        </div>
      </div>
    </div>
      </div>
      
      </div>
     </section>
    
   </Layout>
  )
}

export default Dashboard