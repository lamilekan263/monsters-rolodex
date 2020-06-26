import React from 'react'
import './search-box.styles.css'

export const SearchBox = ({placeholder, handleChange})=>(
    <div>
        <input type='search' className="search" onChange= {handleChange} placeholder={placeholder}/>

    </div>
)