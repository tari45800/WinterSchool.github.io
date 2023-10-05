import styled from "styled-components";

const AppContainer = styled.div`
  color: red;
`;

function App() {
  return (
    <AppContainer>
      <div className="App">2024 김재하 몰입수학 윈터스쿨 신청 폼</div>
      <div>
        "인생 수학선생님을 만났습니다." "같은 수학 강사로서 감탄하고 갑니다."
        현재 유튜브에서 가장 뜨거운 김재하 선생님의 강의, 대치 투에스에듀에서
        7주 동안 경험하고, 그 차이를 느껴보세요!
      </div>
    </AppContainer>
  );
}

export default App;
