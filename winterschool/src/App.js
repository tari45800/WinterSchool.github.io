import styled from "styled-components";
import Form from "./components/Form";
import Table from "./components/Table";
const AppContainer = styled.div`
  color: crimson;
`;

function App() {
  return (
    <AppContainer>
      <div className="App">2024 김재하 몰입수학 윈터스쿨 신청 폼</div>
      <div>
        <Form></Form>
      </div>
      <div>
        <Table></Table>
      </div>
    </AppContainer>
  );
}

export default App;
