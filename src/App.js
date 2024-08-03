// FileName: App.js

import styled from "styled-components";
import Tracker from "./components/Tracker";
import GlobalStyles from "./globalStyles";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Main>
      <GlobalStyles />
      <Tracker />
    </Main>
  )
}

export default App;
