import {Outlet} from "react-router";

const LayoutApp = () => {
    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default LayoutApp;