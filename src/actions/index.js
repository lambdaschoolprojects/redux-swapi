// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
const FETCH_SENT = "FETCH_SENT";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAIL = "FETCH_FAIL";


// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
