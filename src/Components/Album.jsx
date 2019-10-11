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
import { connect } from "react-redux";
import { handleTracks } from "../Actions/actions";
import playlist from "../Reducers/playlist"

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  addToPlaylist: id =>
    dispatch({
      type: "ADD_ITEM_TO_PLAYLIST",
      payload: id
    }),
 
    tracksThunk: (id) => dispatch(handleTracks(id))
});

class Album extends React.Component {
  componentDidMount = async () => {
   var id =  this.props.match.params.id;
    await this.props.tracksThunk(id);

  };

  render() {
    return (
      <>
        <div id="AlbumImg" class="row centering">
          <div class="container mb-3">
            <div class="row no-gutters " id="myContainer">
              {this.props.allTracks.tracks && (
                <div class="col-md-4 p-5" id="img-Container">
                  <Card>
                    <CardImg
                      top
                      className="card-img "
                      src={this.props.allTracks.tracks.cover}
                    />
                    <CardBody>
                      <CardTitle
                        style={{
                          color: "white",
                          fontweight: "bold",
                          fontsize: "x-large"
                        }}
                      >
                        {this.props.allTracks.tracks.title}
                      </CardTitle>
                      <CardSubtitle>{this.props.allTracks.tracks.title}</CardSubtitle>
                      <Button
                        className="btn btn-success text-center"
                        type="button">
                        Play
                      </Button>
                    </CardBody>
                  </Card>
                </div>
              )}
              <div className="col-md-8 p-5"   >
                {this.props.allTracks.tracks &&
                  this.props.allTracks.tracks.map((A, index) =>
                  <Row className="col-md-12">                 
                    <Col id="track-List1" md="9">
                      <div key={index}
                        className=" trackHover justify-content-center"
                        style={{ color: "white" }}>
                        <div>
                          <p><b>{A.title}</b></p>
                          <audio controls>
                            <source src={A.preview} type="audio/mpeg" autoPlay controls />
                          </audio>
                          {/* <small  style={{color:"white", float:"right"}}>{A.duration}</small> */}
                        </div>
                      </div>                  
                    </Col>                
                    <Col md="1" id="faCol">
                     {/* <Link to={ "/Playlist/" + A.title + A.preview}> */}
                     <button  onClick={() => this.props.addToPlaylist(A.id)} ><i className="fa fa-plus" aria-hidden="true" /> </button>                    
                      {/* </Link> */}
                 </Col>
                 <Col md="2" id="faCol">
                 <i class="fa fa-list" aria-hidden="true"></i>
                 </Col>
                 </Row>
                )
                }
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);