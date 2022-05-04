import { useSelector } from "react-redux";

import "./ForkList.scss";
import Loader from "../Loader/Loader";

const ForkList = () => {
    const { forks, isLoading } = useSelector((state) => state.gists);

    return (
        <div className="forks">
            <h3>Last 3 Forks:</h3>
            {isLoading && <Loader />}
            {!isLoading && (
                <ul>
                    {forks.map((fork) => (
                        <li key={fork.username}>
                            <a href={`https://gist.github.com/${fork.id}`} target="_blank" rel="noopener noreferrer">
                                <img src={fork.avatar} className="avatar" alt="Avatar" />
                                <div className="details">
                                    <h4>{fork.username}</h4>
                                    <p>{fork.date}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            )}
            {!isLoading && forks.length === 0 && <p className="no-data">No forks</p>}
        </div>
    );
};

export default ForkList;
