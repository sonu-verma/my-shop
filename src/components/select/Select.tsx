
import './Select.css'
import type { CategoryType }  from "./../../types/category";

type Props = {
    lists?: void,
    // selectedId?: string,
    onSelect?: (category: CategoryType) => void,
}

const Select = ({ lists, onSelect }: Props) => {
    return <>
            <div className="CategorySearchDropdown">
                <div className='searchField'>
                    <input type="text" placeholder='Search for...' />
                </div>
                <ul className='searchResult'>
                    {
                        lists?.map( (c) => (
                            <li key={c.id} onClick={ (e) => onSelect(c)}>{c.name}</li>
                        ))
                    }
                </ul>               
            </div>
        </>
}

export default Select