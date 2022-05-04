import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import Layout from "../components/Layout/Layout";
import ForkList from "../components/ForkList/ForkList";
import { fetchForks } from "../store/gists-actions";

const GistForks = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchForks(id));
    }, [id, dispatch]);

    return (
        <Layout>
            <ForkList />
        </Layout>
    );
};

export default GistForks;
