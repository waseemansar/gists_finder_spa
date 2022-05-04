import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h2>Gists Finder</h2>
                </Link>
            </div>
        </header>
    );
};

export default Header;
