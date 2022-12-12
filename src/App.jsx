import { BackgroudAnimate } from "./components/Backgroud";
import { GlobalStyle } from "./styles/global.js";
import { RoutesMain as Routes } from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <BackgroudAnimate />
      <Routes />
    </>
  );
}

export default App;
