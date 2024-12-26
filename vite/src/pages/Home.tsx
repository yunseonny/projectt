// src/pages/Home.tsx
import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

const Home: React.FC = () => {
  return (
<div className="container min-h-screen flex flex-col">
    <Header />
    <Navbar />
    <main className="body-bg flex-grow">
        <Card title="Item 1" content="This is your first item." />
        <Card title="Item 2" content="This is your second item." />
        <Card title="Item 3" content="This is your third item." />
    </main>
    </div>

  );
};

export default Home;
