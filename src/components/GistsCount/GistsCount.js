import "./GistsCount.scss";

const GistsCount = ({ count, username }) => {
    return (
        <p className="gists-count">
            {count} Gists found against username <span>{username}</span>
        </p>
    );
};

export default GistsCount;
