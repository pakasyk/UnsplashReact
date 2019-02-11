import React, { Component } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Unsplash from "../APIs/unsplash";
import ImageList from "./ImageList/ImageList";
import ImageDetail from "./ImageDetail/ImageDetail";

class App extends Component {
  state = {
    images: [],
    seletedImage: null
  };

  onTermSubmit = term => {
    Unsplash.get("/search", {
      params: {
        query: term
      }
    })
      .then(response =>
        this.setState({
          images: response.data.photos.results,
          seletedImage: response.data.photos.results[0]
        })
      )
      .catch(error => console.log(error));
  };

  onImageSelect = image => {
    this.setState({ seletedImage: image });
  };

  componentDidMount = () => {
    const image = {
      urls: {
        regular:
          "https://images.unsplash.com/photo-1429159823131-17baa71b62a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQ1OTc1fQ"
      }
    };

    this.setState({ seletedImage: image });
  };

  render() {
    
    return (
      <div className="container-fluid">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="d-flex">
          <ImageDetail image={this.state.seletedImage} />
          <ImageList
            onImageSelect={this.onImageSelect}
            images={this.state.images}
          />
        </div>
      </div>
    );
  }
}
export default App;
