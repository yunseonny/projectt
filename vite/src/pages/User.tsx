import Header from "../components/header/Header";
import { Navbar } from "../components/nav/Navbar";


const User = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-800 flex justify-center items-center">
      <div className="container bg-white min-h-screen max-w-md shadow-lg rounded-lg flex flex-col">
        <Header title="On&Off" />
        <Navbar />
      </div>
    </div>
  );
};

export default User;
