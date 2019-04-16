import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetchCharacters } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetchCharacters();
  }

  render() {
    return (
      <div className="CharactersList_wrapper">
        { !this.props.isLoading && (<CharacterList characters={this.props.characters} />) }
      </div>
    );
  }
}

const mapStateToProps = ({ charsReducer }) => {
  const { isLoading, characters } = charsReducer;
  return ({
    isLoading,
    characters
  })
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    fetchCharacters
  }
)(CharacterListView);
