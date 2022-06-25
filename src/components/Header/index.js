import React from 'react';

function Header(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        setContactSelected
    } = props;

    return (
        <header>
            <h1>
                <a data-testid="link" href="./index.html">Juan Garcia</a>
            </h1>
            <nav>
                <ul>
                    {categories.map((category) => (
                        <li key={category.name} className={`${currentCategory.name === category.name}`}>
                            <a onClick={() => {
                                setCurrentCategory(category.name);
                            }}>
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