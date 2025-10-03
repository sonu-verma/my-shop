// import CategorySelect from './CategorySelect'
import Logo from './../../assets/images/logo.png'
import './Header.css'
import { useState } from 'react';
import type { Category } from './../../types/category';
import type { Location } from './../../types/location';
import Select from '../select/Select';
const Header = () =>{


    const PRODUCT_CATEGORIES: Category[] = [
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
        { id: "1", name: "India" },
        { id: "2", name: "Sri Lanka" },
        { id: "3", name: "Nepal" },
        { id: "4", name: "Dubai" },
        { id: "5", name: "UK" },
    ];


    const [headerCategorySelect, setHeaderCategorySelect] = useState(false);
    const [ currentCategory, setCurrentCategory] = useState(false);

    
    const [headerLocationSelect, setHeaderLocationSelect] = useState(false);
    const [ currentLocation, setCurrentLocation] = useState(false);

    const handleHeaderCategorySelect = () => {
        setHeaderCategorySelect(!headerCategorySelect);
        console.log("Header Category Select : ", headerCategorySelect);
    }

    const handleHeaderLocationSelect = () => {
        setHeaderLocationSelect(!headerLocationSelect);
        console.log("Header Location Select : ", currentLocation);
    }


    const handleCategorySelectionValue = ( category: string ) => {
        setCurrentCategory(category?.name);
        setHeaderCategorySelect(false)
       console.log("Category Selected : ", category);
    }

    
    const handleLocationSelectionValue = ( location: string ) => {
        setCurrentLocation(location?.name);
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
                                        currentCategory ? currentCategory : 'All Categories'
                                    }
                                </span>
                                <i className={ headerCategorySelect ? 'dropdownSelected' : ''}>^</i>
                            </div>
                           
                            { headerCategorySelect && <Select lists = {PRODUCT_CATEGORIES} onSelect = { handleCategorySelectionValue} />  }
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
                                        currentLocation ? currentLocation : 'Your Location'
                                    }
                                </span>
                                <i className={ headerLocationSelect ? 'dropdownSelected' : ''}>^</i>
                            </div>
                           
                            { headerLocationSelect && <Select lists = {LOCACTIONS} onSelect = {handleLocationSelectionValue} />  }
                        </div>
                        <ul className='headerMenu'>
                            <li>Compare</li>
                            <li>Whishlist</li>
                            <li>Cart</li>
                            <li>Account</li>
                        </ul>
                    </div>
                </div>
            </div>  
        </header>
        
    </>;
}

export default Header