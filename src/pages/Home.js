import { useSelector } from "react-redux";

import GistList from "../components/GistList/GistList";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";

const Home = () => {
    const { username } = useSelector((state) => state.gists);

    return (
        <Layout>
            <SearchInput />
            {username && <GistList />}
        </Layout>
    );
};

export default Home;
