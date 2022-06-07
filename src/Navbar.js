const Navbar = () => {
    return ( 
        <header>
            <nav className="navbar">
            <h1 className="logo"><a href="/">Logo</a></h1>
            <div className="link">
                <a href="/">Home</a>
                <a href="/create">Blog</a>
            </div>
        </nav>
        </header>        
     );
}
 
export default Navbar;