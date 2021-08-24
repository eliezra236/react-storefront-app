import "../styles/App.css";
import axios from "axios";

function App() {
  axios
    .get("http://localhost:5000/products")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return <div className="App">Hello World</div>;
}

export default App;
