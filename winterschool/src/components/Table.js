import styled from "styled-components";
import { useEffect, useState } from "react";
import { db } from "../Firebase";
import { collection, getDocs, addDoc } from "firebase/firestore/lite";

const TableContainer = styled.div`
  color: crimson;
`;

function Table() {
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

  return <TableContainer></TableContainer>;
}

export default Table;
