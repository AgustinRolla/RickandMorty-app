import styled from "styled-components";
import React from "react";
import { useHistory } from "react-router";

export const Favorites = ({ favorites, deleteFavorite }) => {
  const favorites = favorites.map((favorite) => `${favorite.data}`);

  return "favoritos";
};
