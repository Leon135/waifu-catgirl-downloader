import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link
                            to="/"
                            style={{
                                color: "inherit",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src="icon.jpg"
                                alt="Yae Miko"
                                width="20"
                                style={{
                                    borderRadius: "20px",
                                    marginRight: ".5rem",
                                }}
                            />
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
            <hr />
        </>
    );
};

export default NavBar;
