import React, { useEffect } from 'react';

function Header(props) {

    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
    } = props;

    return (
        <header>
            <h1>
                <a href="./index.html">Juan Garcia</a>
            </h1>
            <nav>
                <ul>
                    {categories.map((category) => (
                        <li key={category.name} onClick={() => {
                            setCurrentCategory(category.name);
                        }}>
                            <a>
                                {category.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;