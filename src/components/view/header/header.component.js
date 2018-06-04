import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__logo'>
                <span className="header__caption">N</span>
            </h1>

            <button className='header__button'>
                add todo
            </button>
        </header>
    );
};

export default Header;