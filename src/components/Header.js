
import logo from '../images/nba-logo.png'
import './_header.scss'

const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt="BNA logo" />
            <h1>NBA Legends</h1>
            <form action="">
                <input type="text" placeholder='Search Player ... ' />
            </form>
        </div>
    )
}

export default Header