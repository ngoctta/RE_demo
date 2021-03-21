import "./App.css";
import BaiTapThucHanhChiaLayout from "./component/BaiTapThucHanhChiaLayout/BaiTapThucHanhChiaLayout";
import DataBuilding from "./databuilding/DataBuilding";
import DataBuildingFC from "./databuilding/DataBuildingFC";
import HandleEvent from "./handleEvent/HandleEvent";
import HandleEventFC from "./handleEvent/HandleEventFC";
import RenderData from "./renderData/RenderData";

function App() {
  return (
    <div className="App">
      {/* <BaiTapThucHanhChiaLayout/> */}
      {/* <DataBuilding></DataBuilding> */}
      {/* <DataBuildingFC></DataBuildingFC> */}
      {/* <HandleEvent></HandleEvent>
      <HandleEventFC></HandleEventFC> */}
      <RenderData></RenderData>
    </div>
  );
}

export default App;
