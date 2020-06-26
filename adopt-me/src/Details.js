import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
class Details extends React.Component {
  state = {
    loading: true
  };
  componentDidMount() {
    //throw new Error("lol", "info"); --> to check that the ErrorBoundary is working.
    //this.props contains anything that is passed from the parent
    //it is read only
    pet.animal(+this.props.id).then(({ animal }) => {
      console.log(animal);
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}. ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    }, console.error);
  }
  render() {
    if (this.state.loading) {
      return <h1>loading ...</h1>;
    }
    const { animal, breed, location, description, name, media } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
export default function DetailsWithBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
