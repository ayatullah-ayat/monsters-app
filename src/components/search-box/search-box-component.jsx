import React from 'react';
import './search-box.styles.css'

export const SearchBox = ({placeholder, onChangeHandler }) => (
    
    <div className="search-box">
        <input className="search"
            type="search"
            placeholder = { placeholder }
            onChange = { onChangeHandler }
        />
    </div>
)


