import React, { useEffect, useState } from 'react';
import Header from '../Header';

function Navigation(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    return (
        <Header
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
        ></Header>
    )
}

export default Navigation;