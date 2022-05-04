import { useDispatch, useSelector } from "react-redux";

import "./SearchInput.scss";
import { fetchGists } from "../../store/gists-actions";

const SearchInput = () => {
    const { username } = useSelector((state) => state.gists);
    const dispatch = useDispatch();

    return (
        <input
            value={username}
            onChange={(e) => dispatch(fetchGists(e.target.value))}
            className="search-input"
            type="text"
            placeholder="Type username to search"
        />
    );
};

export default SearchInput;
