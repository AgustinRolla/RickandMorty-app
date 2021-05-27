import styled from "styled-components";
import React from "react";

export const Favorites = ({ favorites, deleteFavorite }) => {
  const favorites = favorites.map((favorite) => `${favorite.data}`);

  return (
    <>
      <CardPage>
        <Wrapper>
          <CardMinimalist>
            <Image>
              <img src={favorite.data.image} alt="character" />
            </Image>
            <Details>
              <h1>{characterData.name}</h1>
              <h3>Status: {characterData.status}</h3>
              <h3>Species: {characterData.species}</h3>
              <h3>Origin: {characterData.origin.name}</h3>
              <h3>Location: {characterData.location.name}</h3>
            </Details>
          </CardMinimalist>
          <ButtonsWrapper>
            <button onClick={() => history.push("./")}>Volver a la Home</button>
            <button
              onClick={
                isCharacterAdded
                  ? () => deleteFavorite(characterData.name)
                  : () => addFavorite(characterData)
              }
            >
              {isCharacterAdded ? "Delete Favorite" : "Add Favorite"}
            </button>
          </ButtonsWrapper>
        </Wrapper>
      </CardPage>
    </>
  );
};

const CardPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://i.redd.it/wx9mj52s8kly.jpg");
  background-size: cover;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

    &:first-child {
      width: 50%;
    }

    &:last-child {
      width: 50%;
    }
  }
`;