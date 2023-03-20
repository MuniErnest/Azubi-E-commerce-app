import "./NavbarStyles.css"

function Navbar(){
    return(
        <>
        <nav>
            <div className="home">Azubi FrontEnd</div>

            <div>
                <ul id="navbar">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Cart</a></li>
                </ul>
            </div>

            <div className="btn">
                <button>Login</button>
            </div>
        </nav>
        </>
    )  
}

export default Navbar