
import './Select.css'
import type { CategoryType }  from "./../../types/category";
import { useState } from 'react';

type Props = {
    lists?: void,
    selectedId?: string,
    onSelect?: (category: CategoryType) => void,
}

const Select = ({ lists, selectedId, onSelect }: Props) => {

    const [filterData, setFilterData] = useState(lists);

    const handleSearchFilter = (e) => {
        const data = lists?.filter( (item) => {
            return item.name.toLowerCase().includes(e.target.value.toLowerCase());
        })
        setFilterData(data);
    } 

    return <>
            <div className="CategorySearchDropdown">
                <div className='searchField'>
                    <input type="text" placeholder='Search for...' onChange={ handleSearchFilter } />
                </div>
                <ul className='searchResult'>
                    {
                        filterData?.map( (c) => (
                            <li key={c.id} onClick={ (e) => onSelect(c)} className={ selectedId == c.id ? 'selected' : 'not-selected' }>{c.name}</li>
                        ))
                    }
                </ul>               
            </div>
        </>
}

export default Select