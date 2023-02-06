import "./main.css";

const Main = ({ rocket }) => {
  return (
    <section className="main">
      <h1 className="title">{rocket}</h1>
      <div className="video-container">
        <video className="video" loop muted src="./video/moon.mp4"></video>
      </div>
    </section>
  );
};

export default Main;
