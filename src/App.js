import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ButComp from "./ButComp";
import ButCompMinus from "./ButCompMinus";
import DisplayData from "./DisplayData";
import { addCounter, minusCounter } from "./Global/MainGlobal";
import InputForm from "./InputForm";
import { app } from "./base";
import UIScreen from "./UIScreen";

const App = () => {
  const dispatch = useDispatch();
  const [counter, setConter] = useState(0);
  const [myToken, setMyToken] = useState("");

  const myValue = useSelector((state) => state.myReducer.value);

  const addCount = () => {
    setConter(counter + 1);
  };

  const removeCount = () => {
    setConter(counter - 1);
  };

  return (
    <Container>
      <InputForm />

      <Wrapper>
        <UIScreen />
      </Wrapper>
    </Container>
  );
};

export default App;

const Space = styled.div`
  flex: 1;
`;

const Plus = styled.div`
  cursor: pointer;
  padding: 15px 30px;
  background: ${({ bg }) => bg};
  margin: 20px 10px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const Button = styled.div`
  display: flex;
`;

const Display = styled.div`
  margin-top: 50px;
  width: 100px;
  height: 100px;
  background: red;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  font-weight: bord;
  font-size: 60px;
`;

const Card = styled.div`
  padding: 30px 0;
  width: 500px;
  height: 500px;
  background: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  padding-top: 50px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: gray;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

// <Card>
// <Display>
//   <DisplayData counter={counter} />
//   {/* {myValue} */}
// </Display>
// <Space />
// <Button>
//   <Plus
//     bg="green"
//     onClick={() => {
//       dispatch(minusCounter());
//       console.log("Add");
//     }}
//   >
//     {/* <ButCompMinus

//     /> */}
//   </Plus>
//   <Plus
//     bg="red"
//     onClick={() => {
//       dispatch(addCounter());
//       console.log("Add");
//     }}
//   >
//     {/* <ButComp click={addCount} /> */}
//   </Plus>
// </Button>
// </Card>
