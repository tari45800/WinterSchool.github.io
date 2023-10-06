import styled from "styled-components";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import { db } from "./Firebase";
import { collection, getDocs, addDoc } from "firebase/firestore/lite";

const AppContainer = styled.div`
  color: crimson;
`;

function App() {
  useEffect(() => {
    const getData = async () => {
      try {
        const query = await getDocs(collection(db, "information"));
        query.forEach((doc) => {
          console.log(doc.id, doc.data());
        });
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      }
    };

    getData();
  }, []);

  return (
    <AppContainer>
      <div className="App">2024 김재하 몰입수학 윈터스쿨 신청 폼</div>
      <div>
        <Form></Form>
      </div>
    </AppContainer>
  );
}

export default App;
