import Accordian from "./components/Accordian";
import FlexLayout from "./components/FlexLayout";
import FlexProperties from "./components/FlexProperties";
import { MainContainer } from "./styles/styledComponents/Container";

function App() {
  return (
    <MainContainer>
      <Accordian />
      <hr/>
      <FlexLayout/>
      <hr/>
      <FlexProperties/>
    </MainContainer>

  );
}

export default App;
