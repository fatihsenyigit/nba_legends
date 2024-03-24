import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import PlayerCard from "./components/PlayerCard";
import './App.scss'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <CardContainer></CardContainer>
      <PlayerCard></PlayerCard>
    </div>
  );
}

export default App;
