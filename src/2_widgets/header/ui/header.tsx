import {css} from "@styled/css";
import {NavLink} from "react-router";
import Hamburger from 'hamburger-react'

import logo from '@assets/images/logo.png'
import * as React from "react";


const headerStyles = css({
    position: 'sticky',
    top: 0,
    width: 'full',
    zIndex: 50,
    borderBottom: '1px solid',
    borderColor: 'border',
    background: 'background/95',
    backdropFilter: 'blur(8px)',
});

const navWrapper = css({
    maxWidth: 'breakpoint-xl',
    width: 'full',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
})

const navigation = css({
    display: {
        base: 'none',
        md: 'flex',
    },

    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2rem',


})

// Стили для мобильного меню (выезжающее сбоку)
const mobileMenuOverlay = css({
    position: 'fixed',
    top: 0,
    left: 0,
    width: 'full',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: 90,
    opacity: 0,
    visibility: 'hidden',
    transition: 'all 0.3s ease-in-out',
    pointerEvents: 'none',


});

const mobileMenu = css({
    position: 'fixed',
    top: 0,
    right: 0, // Меню будет выезжать справа (можно изменить на left)
    width: '280px',
    height: '100vh',
    background: 'background',
    boxShadow: '-4px 0 10px rgba(0, 0, 0, 0.1)',
    zIndex: 100,
    transform: 'translateX(100%)',
    transition: 'transform 0.3s ease-in-out',
    padding: '5rem 2rem 2rem',


});

const mobileMenuHeader = css({
    position: 'absolute',
    top: '1rem',
    right: '1rem',
});

const mobileNavList = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    listStyle: 'none',
    padding: 0,
    margin: 0,
});

const liLink = css({
    fontSize: '1.5rem',
    fontWeight: 'bold',
    transition: "0.3s ease-in-out",
    _hover: {
        color: "purple.800",

    }
})

const activeLink = css({
    color: 'purple.800',
})

const hamburgerWrapper = css({
    display: {
        md: 'none',
    }
})
const mobileMenuOverlayOpen = css({
    opacity: 1,
    visibility: 'visible',
    pointerEvents: 'auto',
});
const mobileMenuOpen = css({
    transform: 'translateX(0)',
});

export const Header = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    const navs = [
        {id: 1, title: 'Home', path: '/'},
        {id: 2, title: 'Staff', path: '/staff'},
        {id: 3, title: 'Gryffindor', path: '/gryffindor'},
        {id: 4, title: 'Ravenclaw', path: '/ravenclaw'},
        {id: 5, title: 'Hufflepuff', path: '/hufflepuff'},
        {id: 6, title: 'Slytherin', path: '/slytherin'},
    ]

    const handleOverlayClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className={headerStyles}>
            <div className={navWrapper}>
                <img src={logo} alt="Harry Potter" className={css({width: '60px'})}/>
                <nav className=''>
                    <ul className={navigation}>
                        {navs.map(nav => (
                            <li key={nav.id} className={liLink}>
                                <NavLink
                                    to={nav.path}
                                    className={({isActive}) => (
                                        isActive ? activeLink : ''
                                    )}
                                >{nav.title}</NavLink>
                            </li>
                        ))}
                    </ul>
                    {/*hamburger menu*/}
                    <div className={hamburgerWrapper}>
                        <Hamburger toggled={isOpen} toggle={setIsOpen}/>

                    </div>

                    <div
                        className={`${mobileMenuOverlay} ${isOpen ? mobileMenuOverlayOpen : ''}`}
                        onClick={handleOverlayClick}
                    >

                    <div className={`${mobileMenu} ${isOpen ? mobileMenuOpen : ''}`}>
                        <div className={mobileMenuHeader}>
                            <Hamburger
                                toggled={isOpen}
                                toggle={setIsOpen}
                                size={24}
                                color="currentColor"
                            />
                        </div>

                        <ul className={mobileNavList}>
                            {navs.map(nav => (
                                <li key={nav.id} className={liLink}>
                                    <NavLink
                                        to={nav.path}
                                        className={({ isActive }) => (
                                            isActive ? activeLink : ''
                                        )}
                                    >
                                        {nav.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    </div>
                </nav>


            </div>
        </header>
    );
};
