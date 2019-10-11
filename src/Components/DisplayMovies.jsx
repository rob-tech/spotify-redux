import React from 'react'
import {CardImg} from "reactstrap"
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import { handleQueenAlbums } from "../Actions/actions";


const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    queenAlbumsThunk: () => dispatch(handleQueenAlbums()),
});


class DisplayMovies extends React.Component {
 
    componentDidMount=async()=>{
        await this.props.queenAlbumsThunk()
    }

    render() { 
        return ( 
                     <>
                     <div className="row">
                         {this.props.allQueenAlbums.queenAlbums.length >0 && 
                         this.props.allQueenAlbums.queenAlbums.map((data,index)=>(
                            <div key={index} className="col-md-3" > 
                            <CardImg top  src={data.album.cover_medium}
                                            alt="Card image cap" 
                                            style={{ cursor: "pointer", height: "150px"  }}
                                            />
                                            <p>
                                        
                                            <Link to={ "/Album/" + data.album.id} key= {data.album.id} >
                                             <Card-Text> {data.album.title} </Card-Text> 
                                            </Link>                                                                                      
                                          {/* <a href="artist_page.html?id=${songInfo[i].artist.name}">  
                                          artist: ${songInfo[i].artist.name}
                                          </a> */}
                                        </p>
                                        </div>
                          )).slice(0,6)
                        }
                        </div>
                    </>
             
         );
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMovies);
