import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import backgroundimage from "../HomePage/backgroundimage.jpg";
export const FavoritesCard = ({ favorites }) => {
  const history = useHistory();
  return (
    <Home>
      <Wrapper>
        {favorites.map((favorite) => (
          <CardMinimalist>
            <Image>
              <img src={favorite.image} alt="character" />
            </Image>
            <Details>
              <h1>{favorite.name}</h1>
              <h3>Status: {favorite.status}</h3>
              <h3>Species: {favorite.species}</h3>
              <h3>Origin: {favorite.origin.name}</h3>
              <h3>Location: {favorite.location.name}</h3>
            </Details>
          </CardMinimalist>
        ))}
      </Wrapper>
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
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const CardMinimalist = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 310px 115px 80px;
  grid-template-areas: "image" "text";
  border-radius: 18px;
  background: black;
  color: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  font-family: roboto;

  transition: 0 0.5s ease;
  margin: 30px;

  :hover {
    transform: scale(1.15);
    box-shadow: 5px, 5px, 15px rgba (0, 0, 0, 0, 6);
  }
`;

const Image = styled.div`
  grid-area: image;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;

  img {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
`;
const Details = styled.div`
  display: column;
  grid-area: text;
  text-align: left;

  h1 {
    text-align: center;
    margin-bottom: 10px;
  }
  h3 {
    margin-left: 15px;
  }
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin-top: 5px;
  align-items: center;
  justify-content: center;

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
    }
  }
`;
