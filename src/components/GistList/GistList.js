import { useSelector } from "react-redux";

import "./GistList.scss";
import GistItem from "../GistItem/GistItem";
import GistsCount from "../GistsCount/GistsCount";

const GistList = () => {
    const { gists, username } = useSelector((state) => state.gists);

    return (
        <div className="gists">
            <GistsCount count={gists.length} username={username} />

            {gists.map((gist) => (
                <GistItem key={gist.id} gist={gist} />
            ))}
        </div>
    );
};

export default GistList;
