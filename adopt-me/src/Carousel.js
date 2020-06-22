import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };
  /* //One way of making this point to the component
    // The second is to make the method an arrow function 
     constructor(props) {
    super(props);
    //Binds this.handleIndexClick to be Carousel
    this.handleIndexClick = this.handleIndexClick.bind(this);
  } */

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placeorgi.com/600/600"];

    if (media && media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
