import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { myName, myEmail } from "./Global/InputReducer";
import axios from "axios";

const InputForm = () => {
  // const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [myFiles, setMyFiles] = useState(null);

  const pushToBE = async () => {
    const formData = new FormData();
    const dataFile = { name, email, myFiles };

    formData.append("img", dataFile);

    await axios.post("http://localhost:3370", formData);
  };

  return (
    <Container>
      <Wrapper>
        <Card>
          <Input
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Label htmlFor="pix">Upload an Image</Label>
          <Input
            style={{ display: "none" }}
            id="pix"
            type="file"
            name="img"
            onChange={(e) => {
              setMyFiles(e.target.files[0]);
            }}
          />
          <Button
            onClick={() => {
              console.log("Button Clicked: ", name, email);
              pushToBE();
              window.location.reload();
            }}
          >
            Submit
          </Button>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default InputForm;

const Label = styled.label`
  padding: 15px 40px;
  color: white;
  background: #004080;
  border-radius: 5px;
  transform: scale(1);
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(0.97);
  }
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 3px;
  margin: 10px 0;
  padding-left: 10px;
`;

const Button = styled.div`
  padding: 15px 30px;
  background: #004080;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  transform: scale(1);
  transition: all 350ms;
  margin-top: 20px;

  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
`;

const Card = styled.form`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div``;
const Container = styled.div`
  padding-top: 50px;
`;
