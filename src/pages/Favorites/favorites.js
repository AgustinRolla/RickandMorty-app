import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import backgroundimage from "../HomePage/backgroundimage.jpg";

export const Favorites = ({ favorites }) => {
  const history = useHistory();

  return (
    <Home>
      <Wrapper>{favorites.map((favorite) => `${favorite.name}`)}</Wrapper>

      <ButtonsWrapper>
        <button onClick={() => history.push("./")}>Volver a la Home</button>
      </ButtonsWrapper>
    </Home>
  );
};

const Home = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  background-image: url(${backgroundimage});
  background-size: cover;
`;

const Wrapper = styled.div`
  margin-top: 9%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin-top: 5px;

  button {
    cursor: pointer;
    color: black;
    padding: 10px;
    font-weight: 600;
    background-color: #a6eee6ff;
    border: none;
    border-radius: 6px;
    transition: all ease-out 0.3s;

    &:hover {
      filter: brightness(0.8);
      transform: translateY(-4px);
    }

    &:first-child {
      width: 70%;
    }

    &:last-child {
      width: 30%;
    }
  }
`;
