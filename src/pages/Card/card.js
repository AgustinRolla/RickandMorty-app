import styled from "styled-components";
import React from "react";
import { useHistory } from "react-router";

export const Card = ({ character, addFavorite, favorites, deleteFavorite }) => {
  const [characterData, setCharacterData] = React.useState();
  const [status, setStatus] = React.useState("idle");

  const history = useHistory();

  React.useEffect(() => {
    setStatus("loading");
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) =>
        response.json().then((data) => setCharacterData(data))
      )
      .catch((error) => setStatus("error"))
      .finally(setStatus("idle"));
  }, [character]);

  const favoritesNames = favorites.map((favorite) => favorite.name);

  const isCharacterAdded =
    characterData && favoritesNames.includes(characterData.name);

  console.log(isCharacterAdded);

  if (status === "idle") {
    return (
      <>
        <CardPage>
          <Wrapper>
            {characterData && (
              <>
                <img src={characterData.image} alt="character" />
                <ButtonsWrapper>
                  <button onClick={() => history.push("./")}>
                    Volver a la Home
                  </button>
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
              </>
            )}
          </Wrapper>
        </CardPage>
      </>
    );
  } else if (status === "loading") {
    return "...............loading";
  } else if (status === "error") {
    return "Ese personaje no existe";
  }
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
      width: 50%;
    }

    &:last-child {
      width: 50%;
    }
  }
`;
