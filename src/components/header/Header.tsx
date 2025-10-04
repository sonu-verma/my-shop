// import CategorySelect from './CategorySelect'
import Logo from './../../assets/images/logo.png'
import './Header.css'
import { useState } from 'react';
import type { Category } from './../../types/category';
import type { Location } from './../../types/location';
import Select from '../select/Select';
import Nav from './nav/Nav';
const Header = () =>{
    const PRODUCT_CATEGORIES: Category[] = [
        { id: "0", name: "All Category" },
        { id: "1", name: "Food & Beverage" },
        { id: "2", name: "Beauty & Fragrances" },
        { id: "3", name: "Office & Stationery" },
        { id: "4", name: "Consumer Electronics" },
        { id: "5", name: "Fashion & Accessories" },
        { id: "6", name: "Home & Furniture" },
        { id: "7", name: "Health & Personal Care" },
        { id: "8", name: "Construction & Hardware" },
        { id: "9", name: "Sports & Fitness" },
        { id: "10", name: "Toys" },
        { id: "11", name: "Automotive" },
        { id: "12", name: "Mobile" },
    ];

    
    const LOCACTIONS: Location[] = [
        { id: "0", name: "Location" },
        { id: "1", name: "India" },
        { id: "2", name: "Sri Lanka" },
        { id: "3", name: "Nepal" },
        { id: "4", name: "Dubai" },
        { id: "5", name: "UK" },
    ];


    const [headerCategorySelect, setHeaderCategorySelect] = useState(false);
    const [ currentCategory, setCurrentCategory] = useState<string>("");

    
    const [headerLocationSelect, setHeaderLocationSelect] = useState(false);
    const [ currentLocation, setCurrentLocation] = useState<string>("");

    const [selectedCategoryId, setSelectedCategoryId] = useState(0);
    const [selectedLocationId, setSelectedLocationId] = useState(0);

    const [accountMenuShow, setAccountMenuShow] = useState(false);

    const handleHeaderCategorySelect = () => {
        setHeaderCategorySelect(!headerCategorySelect);
        console.log("Header Category Select : ", headerCategorySelect);
    }

    const handleHeaderLocationSelect = () => {
        setHeaderLocationSelect(!headerLocationSelect);
        console.log("Header Location Select : ", currentLocation);
    }


    const handleCategorySelectionValue = ( category: Category ) => {
        setCurrentCategory(category?.name);
        setSelectedCategoryId(Number(category.id));
        setHeaderCategorySelect(false)
       console.log("Category Selected : ", category);
    }

    
    const handleLocationSelectionValue = ( location: Location ) => {
        setCurrentLocation(location?.name);
        setSelectedLocationId(Number(location.id));
        setHeaderLocationSelect(false)
       console.log("Category Selected : ", location);
    }

    return <>
        <header>
            <div className="container-fluid ">
                <div className='header-container'>
                    <div className="col-sm-2 logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="search-bar">
                         <div className='searchDropdownDiv'>
                            <div className='categoryTitle'  onClick={() => handleHeaderCategorySelect()}>
                                <span>
                                    {
                                        currentCategory ? currentCategory.substr(0,12)+'..'  : 'All Categories'
                                    }
                                </span>
                                <i className={ headerCategorySelect ? 'dropdownSelected' : ''}>^</i>
                            </div>
                           
                            { headerCategorySelect && <Select lists = {PRODUCT_CATEGORIES} selectedId = {selectedCategoryId} onSelect = { handleCategorySelectionValue} />  }
                        </div>
                        
                        <input type="text" placeholder="Search for items..." />
                        <div className='search-icon'>
                            <i className="bi bi-search"></i>
                        </div>
                    </div>
                    <div className="header-links">
                        <div className='searchDropdownDiv'>
                            <div className='categoryTitle'  onClick={() => handleHeaderLocationSelect()}>
                                <span>
                                    {
                                        currentLocation ? (currentLocation.length > 10 ? currentLocation.substr(0,12)+'..' : currentLocation) : 'Location'
                                    }
                                </span>
                                <i className={ headerLocationSelect ? 'dropdownSelected' : ''}>^</i>
                            </div>
                           
                            { headerLocationSelect && <Select lists = {LOCACTIONS} selectedId={selectedLocationId} onSelect = {handleLocationSelectionValue} />  }
                        </div>
                        <ul className='headerMenu'>
                            {/* <li>
                                 <div className='icon-counter'>
                                    <i className="bi bi-universal-access-circle"></i>
                                    <div className='total-count badge'>0</div>
                                </div>
                                <span>Compare</span>
                            </li> */}
                            <li>
                                <div className='icon-counter'>
                                    <i className="bi bi-heart"></i>
                                    <div className='total-count badge'>0</div>
                                </div>
                                <span>Whishlist</span>
                            </li>
                            <li>
                                <div className='icon-counter'>
                                    <i className="bi bi-cart3"></i>
                                    <div className='total-count badge'>0</div>
                                </div>
                                <span>Cart</span>
                            </li>
                            <li>
                                <div className='icon-counter'>
                                    <i className="bi bi-person-lines-fill"></i>
                                </div>
                                <div className='subMenu'>
                                    <span onClick={ () => setAccountMenuShow(!accountMenuShow)}>Account</span>
                                   {
                                     accountMenuShow &&  <ul className='subMenuList'>
                                        <li className='link'>
                                            <i className="bi bi-person"></i>
                                            <span>Login</span>
                                        </li>
                                        <li className='link'>
                                            <i className="bi bi-person-add"></i>
                                            <span>Register</span>
                                        </li>
                                    </ul> 
                                    }
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>  
            <Nav />
        </header>
    </>;
}

export default Header