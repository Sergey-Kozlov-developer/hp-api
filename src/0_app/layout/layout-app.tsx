import {Outlet} from "react-router";
import {Header} from "@widgets/header";
import {css} from "@styled/css";


const layoutStyles = css({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh', // Фиксированная высота на весь экран
    overflow: 'hidden' // Предотвращает скролл всего контейнера
});

const mainStyles = css({
    flex: '1',
    overflowY: 'auto' // Скроллиться будет только main
});


const LayoutApp = () => {
    return (
        <div className={layoutStyles}>
            <Header />
            <main className={mainStyles}>
                <Outlet />
            </main>
        </div>
    );
};

export default LayoutApp;