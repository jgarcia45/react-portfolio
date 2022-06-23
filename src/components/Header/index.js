import React, { useEffect } from "react";

function Header(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

    return (
        <header>
            <h1>
                <a href="/">Juan Garcia</a>
            </h1>
            <nav>
                <ul>
                    <li><a href="#About">About</a></li>
                    {categories.map((category) => {
                        <li key={category.name} onClick={() => {
                            setCurrentCategory(category.name)
                        }}>
                            {category.name}
                        </li>
                    })}
                </ul>
            </nav>
        </header>
    );
}
export default Header;