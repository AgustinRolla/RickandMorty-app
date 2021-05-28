import styled from "styled-components";
import React from "react";
import { useHistory } from "react-router";

export const Favorites = ({ favorites, deleteFavorite }) => {
  return favorites.map((favorite) => `${favorite.name}`);
};
