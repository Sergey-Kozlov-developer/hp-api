import {css} from "@styled/css";
import {Link} from "react-router";

import logo from '@assets/images/logo.png'


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
    display: 'flex',
    flexDirection: {
        base: 'column',
        md: 'row'
    },
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2rem',

})

export const Header = () => {

    const navs = [
        {id: 1, title: 'Home', path: '/'},
        {id: 2, title: 'Staff', path: '/staff'},
        {id: 3, title: 'Gryffindor', path: '/gryffindor'},
        {id: 4, title: 'Ravenclaw', path: '/ravenclaw'},
        {id: 5, title: 'Hufflepuff', path: '/hufflepuff'},
        {id: 6, title: 'Slytherin', path: '/slytherin'},
    ]

    return (
        <header className={headerStyles}>
            <div className={navWrapper}>
                    <img src={logo} alt="Harry Potter" className={css({width: '60px'})}/>
                <nav className=''>
                    <ul className={navigation}>
                        {navs.map(nav => (
                            <li key={nav.id}>
                                <Link to={nav.path} className={css({color: 'red.500'})}>{nav.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
