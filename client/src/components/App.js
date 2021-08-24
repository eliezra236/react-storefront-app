import "../styles/App.css";
import axios from "axios";

axios
  .post("http://localhost:5000/products", { test: "hello world" })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

function App() {
  return <div className="App">Hello World</div>;
}

export default App;
