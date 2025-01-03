import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Card from "../components/ui/Card";
import { Navbar } from "../components/nav/Navbar";

const Home = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-800 flex justify-center items-center">
      <div className="container bg-white min-h-screen max-w-md shadow-lg rounded-lg flex flex-col">
        <Header title="On&Off" />
        <Banner />
        <Card />
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
