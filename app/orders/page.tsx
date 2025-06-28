import Link from "next/link";
import Layout from "../components/slideLayout";


export default function Orders() {
    return(
       <Layout>
            <div className='flex justify-between items-center p-4'>
                <h1 className='font-bold text-2xl'>Orders</h1>
            </div>
            <section>
                <div className="flex flex-wrap gap-4 mt-4">
                    {/* Here you can map through your orders and display them */}
                    {/* Example order card */}
                    <div className="border p-4 rounded-lg w-full md:w-1/3">
                        <h2 className="font-bold">Order #12345</h2>
                        <p>Status: Shipped</p>
                        <p>Total: $250.00</p>
                    </div>
                </div>
                <Link href="/addCard"> login</Link>
            </section>
       </Layout>
    )
}