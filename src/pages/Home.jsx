import Navbar from "../components/navbar/Navbar";
import LeftSidebar from "../components/left-sidebar/LeftSidebar";
import RightSidebar from "../components/right-sidebar/RightSidebar";
import Feeds from "../components/feeds/Feeds";
import { useState } from "react";

const Home = () => {
  let [searchTerm, setSearchTerm] = useState("");
  const handlerSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Navbar searchTerm={searchTerm} onSearch={handlerSearch}></Navbar>
      <div className="container">
        <LeftSidebar />
        <Feeds searchTerm={searchTerm} />
        <RightSidebar />
      </div>
    </>
  );
};

export default Home;
