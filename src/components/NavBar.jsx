import { Link } from "react-router";

const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link
                            to="/"
                            style={{ color: "inherit", textDecoration: "none" }}
                        >
                            <strong>Waifu & Catgirl downloader</strong>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/waifus">Waifus</Link>
                    </li>
                    <li>
                        <Link to="/catgirls">Catgirls</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
