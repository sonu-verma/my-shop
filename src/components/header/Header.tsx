import Logo from './../../assets/images/logo.png'
import './Header.css'
const Header = () =>{
    return <>
        <header>
            <div className="container-fluid header-container">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search for items..." />
                    <i className="bi bi-search"></i>
                </div>
                <div className="header-links">
                    Links
                </div>
            </div>  
        </header>
        
    </>;
}

export default Header