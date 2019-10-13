
import {Button} from "reactstrap";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { handleTracks } from "../Actions/actions";
import { connect } from "react-redux";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  removeFromCart: id =>
    dispatch({
      type: "REMOVE_ITEM_FROM_PLAYLIST",
      payload: id
    }),
});

class Playlist extends Component {

  render() {
    return (
      <div className="row">
        <ul className="col-sm-12" style={{ listStyle: "none" }}>
          {this.props.playlist.albumSongs && this.props.playlist.albumSongs.map(track => (
            <li key={track.id} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  this.props.removeFromCart(track.id);
                }}
              >
                <FontAwesomeIcon icon={faTrash} id="trashIcon" />
              </Button>
              <img
                className="book-cover-small"
                src={track.explicit_content_cover}
                alt="book selected"
              />
              {track.title}
            </li>
          ))}
        </ul>
        {/* <div className="row">
          <div className="col-sm-12 font-weight-bold">
            TOTAL:{" "}
            {cart.reduce(
              (acc, currentValue) => acc + parseFloat(currentValue.price),
              0
            )}
          </div>
        </div> */}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
