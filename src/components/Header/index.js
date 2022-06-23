import React from "react";

function Header(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    return (
        <header>
            <h1>
                <a href="/">Juan Garcia</a>
            </h1>
            <nav>
                <ul>
                    <li><a href="#About">About</a></li>
                    {categories.map((category) => {
                        <li key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category)
                            }} >
                                {category.name}
                            </span>
                        </li>
                    })}
                </ul>
            </nav>
        </header>
    )
}
export default Header;