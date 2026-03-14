import {css} from "@styled/css";
import {Link} from "react-router";



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
            <div className={css({})}>
                <div className={css({})}>
                    <img src="" alt=""/>
                </div>
                <nav>
                        <ul className={css({color: 'green'})}>
                    {navs.map(nav => (
                            <li>
                                <Link to={nav.path} className={css({color: 'red.500'})}>{nav.title}</Link>
                            </li>
                    ))}
                        </ul>
                </nav>
            </div>
        </header>
    );
};
