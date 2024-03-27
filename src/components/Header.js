
import { useState } from 'react'
import logo from '../images/nba-logo.png'
import CardContainer from './CardContainer'
import './_header.scss'
 
const Header = () => {
    const [showResult, setShowResult] = useState('')

    function search() {
        const search = document.querySelector('.header-container input').value
        if(search.trim()) {
            setShowResult("bekleyin");
        } else {
            setShowResult("lutfen bos birakmayin");
            setTimeout(() => {
                setShowResult("");
            }, 2100);
        }
    } 
    return (
      <div className="header-container">
        <img src={logo} alt="BNA logo" />
        <h1>NBA Legends</h1>
          <input onChange={()=>search()} type="text" placeholder="Search Player ... " />
        <h2>{showResult}</h2>
        <CardContainer></CardContainer>
      </div>
    );
}

export default Header