import { Link } from "react-router-dom";

import "./GistItem.scss";
import Badge from "../Badge/Badge";

const GistItem = ({ gist: { id, avatar, description, username, files } }) => {
    return (
        <Link to={`/forks/${id}`} className="gist-item">
            <img src={avatar} className="avatar" alt="Avatar" />
            <div className="details">
                <h4>{username}</h4>
                <p>{description}</p>
                {Object.keys(files).map((val) => files[val].language && <Badge key={files[val].filename} text={files[val].language} />)}
            </div>
        </Link>
    );
};

export default GistItem;
