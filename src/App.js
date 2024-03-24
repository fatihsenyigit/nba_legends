import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import PlayerCard from "./components/PlayerCard";
import './App.scss'


function App() {
  return (
    <div className="App">
      <CardContainer></CardContainer>
      <Header></Header>
      <PlayerCard></PlayerCard>
    </div>
  );
}

export default App;
