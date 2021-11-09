import { useState, useEffect } from 'react'

function About(props) {

  const [about, setAbout] = useState(null)
  
  //create a functoin to make an api call
  const getAboutData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "about")
    //convert to JS object
    const data = await response.json()
    //set about state to data
    setAbout(data)
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getAboutData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div>
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
    </div>
  );

  //if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>
}

export default About;
