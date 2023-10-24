import Activity from '../components/Activity';
import Header from '../components/Header';
import Online from '../components/Online';
import Profile from '../components/Profile';

const Home = () => {
  return (
    <>
      <Header />
      <Profile />
      <Activity />
      <Online />
    </>
  );
};

export default Home;
