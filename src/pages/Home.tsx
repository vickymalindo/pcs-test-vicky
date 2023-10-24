import Activity from '../components/Activity';
import BottomBar from '../components/BottomBar';
import Header from '../components/Header';
import News from '../components/News';
import Online from '../components/Online';
import Profile from '../components/Profile';

const Home = () => {
  return (
    <>
      <Header />
      <Profile />
      <Activity />
      <News />
      <Online />
      <BottomBar />
    </>
  );
};

export default Home;
