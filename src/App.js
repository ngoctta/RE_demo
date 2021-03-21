import logo from "./logo.svg";
import "./App.css";
import HeaderDemo from "./component/demo1/Header";
import HeaderFC from "./component/demo1/HeaderFC";
import Layout from "./ChiaLayout/Layout";
import BaiTapThucHanhChiaLayout from "./BaiTapThucHanhChiaLayout/BaiTapThucHanhChiaLayout";

function App() {
  return (
    <div className="App">
      <BaiTapThucHanhChiaLayout/>
    </div>
  );
}

export default App;
