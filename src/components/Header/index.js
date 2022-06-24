import React, { useEffect } from 'react';
// import About from '../About';
// import Portfolio from '../Portfolio';
// import Contact from '../Contact';
// import Resume from '../Resume';

function Header(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    }, []);

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
                        <li key={category.name} onClick={() => {
                            setCurrentCategory(category.name);
                        }}>
                            {category.name}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
export default Header;