import React from 'react';
import './SearchBar.css';

const Searchbar = () => {
    return (
        <div className = 'top'>
            <div className = 'logo'>
                <i className = "fa fa-instagram"></i>
            </div>
            <div className = 'line'>|</div>
            <div className = 'heading'>
                <h1>Instagram</h1>
            </div>
            <div className = 'search-bar-container'>
                    <i className ="fa fa-search"></i>
                    <input className = 'search-bar' type="text" placeholder="Search.."/>
            </div>
            <div>
                <i className ="fa fa-send-o"></i>
            </div>
            <div>
                <i className ="fa fa-heart-o"></i>
            </div>
            <div>
                <i className ="fa fa-user-o"></i>
            </div>


        </div>
    )    

}





export default Searchbar;