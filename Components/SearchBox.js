import React from "react";

const SearchBox = (props) => {
    return (
        <div className='searchboxy1'>
             <input 
             className='searchboxy2'
             value={props.value}
             onChange={(event)=> props.setSearchValue(event.target.value)}
             placeholder='Search here'
             ></input>              
        </div>

    )
}


export default SearchBox; 


