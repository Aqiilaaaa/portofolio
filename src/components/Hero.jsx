import profile from "../assets/profile.png";
function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">

        <h1>Hi, I'm</h1>

        <h2>Aqiila Aviani</h2>

        <p>
          Information System Student
          <br />
          Database • Web Development • Data Analytics
        </p>

      </div>

      <div className="hero-image">
        <img src={profile} alt="Profile" />
      </div>

    </section>
  );
}

export default Hero;