import React, { useEffect, useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import './index.css';
// import Header from '../Header';

function Navigation(props) {

    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header>
            <h1>
                <a href="/">Juan Garcia</a>
            </h1>
            <nav>
                <ul>
                    {/* <li><a href="About">About</a></li>
                <li><a href="#Portfolio">Portfolio</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li><a href="#Resume">Resume</a></li> */}
                    {categories.map((category) => (
                        <li className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'
                            }`} key={category.name}>
                            <span
                                onClick={() => {
                                    setCurrentCategory(category);
                                    setContactSelected(false);
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;