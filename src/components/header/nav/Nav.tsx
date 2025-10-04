import { Link } from 'react-router-dom'

import './Nav.css'
const Nav = () => {
    return <>
        <div className="nav">
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-2 part1'>
                        <button className='btn btn-primary'>Browse ALl Category</button>
                    </div>
                    <div className='col-sm-8 part2'>
                        <nav className="nav">
                            <ul className='mainMenuList'>
                                <li><Link to="/">Deals</Link></li>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/">Shop</Link></li>
                                <li><Link to="/">Vendors</Link></li>
                                <li className='megaMenuLi'>
                                    <div className="dropdown">
                                        <span>Mega Menu</span>
                                        <i className="bi bi-caret-down-fill"></i>
                                    </div>
                                    <div className='dropdown_menu mega_menu'>
                                        <div className='row'>
                                            <div className='col-sm-3'>
                                                <p>
                                                    Mega Menu
                                                </p>
                                                <ul>
                                                    <li><Link to="/">Action</Link></li>
                                                    <li><Link to="/">Another action</Link></li>
                                                    <li><Link to="/">Something else here</Link></li>
                                                </ul>
                                            </div>
                                            <div className='col-sm-3'>
                                                <p>
                                                    Mega Menu
                                                </p>
                                                <ul>
                                                    <li><Link to="/">Action</Link></li>
                                                    <li><Link to="/">Another action</Link></li>
                                                    <li><Link to="/">Something else here</Link></li>
                                                </ul>
                                            </div><div className='col-sm-3'>
                                                <p>
                                                    Mega Menu
                                                </p>
                                                <ul>
                                                    <li><Link to="/">Action</Link></li>
                                                    <li><Link to="/">Another action</Link></li>
                                                    <li><Link to="/">Something else here</Link></li>
                                                </ul>
                                            </div>
                                            <div className='col-sm-3'>
                                                <div className='megaMenuBanner'>
                                                    <img height="100px" width="100px" src="https://nest-frontend-v6.vercel.app/assets/imgs/banner/banner-menu.png" alt="banner" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><Link to="/">Blog</Link></li>
                                <li>
                                    <div className="dropdown">
                                        <span>Pages</span>
                                        <i className="bi bi-caret-down-fill"></i>
                                    </div>
                                    <div className='dropdown_menu'>
                                        <ul>
                                            <li><Link to="/">Action</Link></li>
                                            <li><Link to="/">Another action</Link></li>
                                            <li><Link to="/">Something else here</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><Link to="/">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='col-sm-2 part3'>
                        <div className='icon'>
                            <i className="bi bi-headset"></i>
                        </div>
                        <div className='info'>
                            <p className='contact'>1900 - 888</p>
                            <p className='timing'>24/7 Support Center</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </>
}

export default Nav