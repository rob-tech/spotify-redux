import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";

import playlist from "../Reducers/playlist"

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  addToPlaylist: id =>
    dispatch({
      type: "ADD_ITEM_TO_PLAYLIST",
      payload: id
    }),
 
});