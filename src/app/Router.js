import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Card, HomePage } from "../pages";
import { Favorites } from "../pages";

export const Router = () => {
  const [character, setCharacter] = React.useState("");
  const [favorites, setFavorites] = React.useState([]);

  function hanldeSetCharacter(character) {
    setCharacter(character);
  }

  function handleAddFavorite(character) {
    setFavorites((oldFavorites) => [...oldFavorites, character]);
  }

  function deleteFavorite(characterName) {
    setFavorites(
      favorites.filter((favorite) => favorite.name !== characterName)
    );
  }

  console.log("favorite", favorites);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/card">
          <Card
            character={character}
            addFavorite={handleAddFavorite}
            favorites={favorites}
            deleteFavorite={deleteFavorite}
          />
        </Route>
        <Route path="/favorites">
          <Favorites favorites={favorites} deleteFavorite={deleteFavorite} />
        </Route>
        <Route path="/">
          <HomePage favorites={favorites} setCharacter={hanldeSetCharacter} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
