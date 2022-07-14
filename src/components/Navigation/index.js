import React, { useEffect } from 'react';
import Header from '../Header';
import { capitalizeFirstLetter } from '../../utils/helpers';
import './index.css';

function Navigation(props) {

    const {
        categories = [],
        setCurrentCategory,
        contactSelected,
        currentCategory,
        setContactSelected,
    } = props;

    return (
        <Header
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
        ></Header>
    );
}

export default Navigation;