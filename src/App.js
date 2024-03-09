import { Container } from "react-bootstrap";
import "./App.scss";
import Header from "./components/header";
import TableUsers from "./components/TableUsers";

function App() {
  return (
    <div className="app-container">
      <Header></Header>
      <Container>
        <TableUsers></TableUsers>
      </Container>
    </div>
  );
}

export default App;
