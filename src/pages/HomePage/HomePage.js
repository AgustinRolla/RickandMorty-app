import React from "react";
import styled from "styled-components";
import { LogoURL } from "./constants";
import { useHistory } from "react-router";

export const HomePage = ({ favorites, setCharacter }) => {
  const [input, setInput] = React.useState();

  const history = useHistory();

  function handleSearchClick() {
    setCharacter(input.toLowerCase());
    history.replace("./card");
  }

  function handleFavoriteClick() {
    console.log("favoritos");
    history.replace("./favorites");
  }

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  return (
    <Home>
      <Wrapper>
        <Logo src={LogoURL} alt="Rick and Morty Logo" />
        <SearchBar
          placeholder="Buscá tu personaje"
          value={input}
          onChange={handleInputChange}
          type="search"
        />
        <ButtonsWrapper>
          <button onClick={handleSearchClick}>Search</button>
          <button>Random</button>
          <button onClick={handleFavoriteClick}>Favorites</button>
        </ButtonsWrapper>
        {favorites.map((favorite) => `${favorite.name}`)}
      </Wrapper>
    </Home>
  );
};

const Home = styled.div`
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

const SearchBar = styled.input`
  width: 100%;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 90%;
  margin-bottom: 20px;
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
