import UserResults from '../components/Users/UserResults';
import UserSearch from '../components/Users/UserSearch';

const Home = () => {
  return (
    <>
      {/* Search components*/}
      <UserSearch />
      <UserResults />
    </>
  );
};

export default Home;
