
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return ( 
//         <header>
//             <nav className="navbar">
//             <h1 className="logo"><Link to="/">Logo</Link></h1>
//             <div className="link">
//                 <Link to="/">Home</Link>
//                 <Link to="/create">Blog</Link>
//             </div>
//         </nav>
//         </header>        
//      );
// }
 
// export default Navbar;


import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <h1 className="logo"><Link to="/">Logo</Link></h1>
                <div className="link">
                    <Link to="/">Home</Link>
                    <Link to="/create">Blog</Link>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;