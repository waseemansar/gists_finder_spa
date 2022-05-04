import axios from "../utils/axios";
import { gistsActions } from "../store/gists-slice";

export const fetchGists = (username) => async (dispatch) => {
    username = username.trim();
    dispatch(gistsActions.loadUsername(username));
    if (username)
        try {
            const { data } = await axios.get(`/users/${username}/gists`);
            const gists = data.map((gist) => {
                return {
                    id: gist.id,
                    username: gist.owner.login,
                    avatar: gist.owner.avatar_url,
                    description: gist.description,
                    files: gist.files,
                };
            });
            dispatch(gistsActions.loadGists(gists));
        } catch (error) {
            dispatch(gistsActions.loadGistsError("No gists found"));
        }
};

export const fetchForks = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`/gists/${id}/forks`);
        const forks = data.slice(-3).map((item) => {
            return {
                id: item.id,
                username: item.owner.login,
                avatar: item.owner.avatar_url,
                date: item.created_at,
            };
        });
        dispatch(gistsActions.loadForks(forks));
    } catch (error) {
        dispatch(gistsActions.loadForksError("No forks found"));
    }
};
