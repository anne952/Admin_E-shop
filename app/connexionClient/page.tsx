export default function ConnexionClient(){
    return(
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                
             <h2 className="text-2xl font-bold mb-6 text-center mt-4">Connexion Client</h2>

                <form className="mt-6">
                    <div className="mb-4">
                        <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <input type="password" id="password" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">Login</button>
                {/* forget password? */}
                    <div className="mt-4 text-center">
                        <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a>
                    </div>
                    <div className=" flex items-center justify-center mt-6 gap-6">
                        se connecter avec :
                           <button
                        type="button"
                        className=" p-2 flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-100 transition duration-200"
                        // onClick={handleGoogleLogin} // à implémenter avec NextAuth ou Firebase
                    >
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                        
                    </button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}