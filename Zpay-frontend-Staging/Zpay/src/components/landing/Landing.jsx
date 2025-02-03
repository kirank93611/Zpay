

const Landing = () => {
    return(
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black">
       <header className="sticky text-white"><div className="px-4 lg:px-6 py-0">
            <div className="flex items-center justify-between gap-2 lg:gap-6">
                <a href="/">logo</a>
                <ul className="hidden items-center gap-1 lg:flex lg:gap-3">
                    <li className="menu-item group relative py-6"><a href="/login">login</a></li>
                    <li className="menu-item group relative py-6"><a href="/signup">register</a></li>
                    <li className="menu-item group relative py-6">products</li>
                    <li className="menu-item group relative py-6">Testimonials</li>
                    <li className="menu-item group relative py-6">About Us</li>
                </ul>
            </div>
        </div></header>
       <div className="flex justify-center items-center mt-56">
        <h1 className="text-6xl font-bold text-center text-white drop-shadow-xl antialiased">Welcome to ZPay</h1>
       </div>
    </div>
    )
}

export default Landing;