import { renderMatches } from "react-router";

function Home(props) {
  return (
    <>
      <h1 className="name">Personal Portfolio of J. Mitchell Paoletti</h1>
      <h3 className="hook">
        Thank you for visiting my page! Please feel free to browse to learn more
        about me.
      </h3>
      <h4 className="about">About the site:</h4>
      <p className="about">
        I created a portfolio to showcase my frontend and backend abilities. This site itself was created using React states & routes for the front end pages. I created my own backend for all additional information, which I deployed to Heroku and all data is fetched there using API calls. 
      </p>
    </>
  );
}

export default Home;

