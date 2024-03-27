import { useState } from "react";
import logo from "../images/nba-logo.png";
import CardContainer from "./CardContainer";
import "./_header.scss";
import { data } from "../helper/data";

const Header = () => {
  const [showResult, setShowResult] = useState("");
  const [dataInput, setDataInput] = useState(data)

  function search() {
    const search = document.querySelector(".header-container input").value;
    if (search.trim()) {
      const namesArray = data.map((e) => e.name.toLowerCase());
      const result = namesArray.filter((e) =>
        e.includes(search.trim().toLowerCase()),
      );
      const newData = data.filter(info => result.includes(info.name.toLowerCase()))
      setDataInput(newData);
      setShowResult(search);
    } else {
      const noResult = "sonuc yok";
      console.log(noResult);
    }
  }
  return (
    <div className="header-container">
      <img src={logo} alt="BNA logo" />
      <h1>NBA Legends</h1>
      <input
        onChange={() => search()}
        type="text"
        placeholder="Search Player ... "
      />
      <h2>{showResult}</h2>
      <div>

        <CardContainer dataInput={dataInput}></CardContainer>
        {/* {!dataInput ? (
          <CardContainer data={data}></CardContainer>
        ) : (
          <CardContainer dataInput={dataInput}></CardContainer>
        )} */}
      </div>
      {/* <CardContainer></CardContainer> */}
    </div>
  );
};

export default Header;

