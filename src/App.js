import "./App.css";
import HomeCard from "./Component/HomeCard";
import Container from "./Component/navbar/Container";
import Navbar from "./Component/navbar/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="">
          <HomeCard />
        </div>
      </Container>
    </>
  );
}

export default App;
