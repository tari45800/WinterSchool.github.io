import { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  color: Form;
`;

function Form() {
  const [formData, setFormData] = useState();

  const handleFormData = (e) => {
    setFormData(e.target.value);
  };

  return (
    <FormContainer>
      <div>
        <h1>작성 폼{formData}</h1>
        <input value={formData} type=" text" onChange={handleFormData} />
      </div>
    </FormContainer>
  );
}

export default Form;
