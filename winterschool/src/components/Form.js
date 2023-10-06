import { useState } from "react";
import styled from "styled-components";
import { db } from "../Firebase";
import { collection, getDocs, addDoc } from "firebase/firestore/lite";

const FormContainer = styled.div`
  color: Form;
`;

function Form() {
  const [formData, setFormData] = useState("");

  const handleFormData = (e) => {
    setFormData(e.target.value);
  };

  const addData = async () => {
    addDoc(collection(db, "information"), { 이름: formData });
    setFormData("");
  };

  return (
    <FormContainer>
      <div>
        <h1>작성 폼</h1>
        <input value={formData} type=" text" onChange={handleFormData} />
        <button onClick={addData}>등록</button>
      </div>
    </FormContainer>
  );
}

export default Form;
