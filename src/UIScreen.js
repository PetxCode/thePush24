import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "./Global/backReducer";

const UIScreen = () => {
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.myBackReducer.dataFile);
  //   const [getData, setGetData] = useState([]);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:3370");
    if (result) {
      //   setGetData(result.data);
      dispatch(addData(result.data));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Wrapper>
        {getData?.map(({ _id, email, name }) => (
          <Card key={_id}>
            <Name>{name}</Name>
            <Space />
            <Email>{email}</Email>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default UIScreen;

const Space = styled.div`
  flex: 1;
`;

const Email = styled.div`
  padding: 20px 10px;
`;

const Name = styled.div`
  margin-top: 30px;
  text-align: center;
  font-weight: bold;
`;
const Card = styled.div`
  margin: 10px;
  width: 300px;
  height: 150px;
  border-radius: 5px;
  background: white;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Container = styled.div``;
