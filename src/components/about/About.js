import React from "react";
import Info from "./Info";
import Technology from "./Technology";

const About = () => {
  const techs = [
    {
      id: 1,
      name: "REACT",
      expertise: 80,
      logo: "/logos/react.png",
    },
    {
      id: 2,
      name: "PYTHON",
      expertise: 90,
      logo: "/logos/python.png",
    },
    {
      id: 3,
      name: "C++",
      expertise: 95,
      logo: "/logos/cpp.png",
    },
  ];
  return (
    <section className="pt-16 pb-32" id="about">
      <div>
        <h1>ABOUT</h1>
      </div>
      <div className="flex p-12 sm:flex-col md:flex-row">
        <Info />
        <div className="flex-1">
          <div
            id="carouselExampleIndicators"
            className="carousel slide relative carousel-fade carousel-dark"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mt-16">
              {techs.map((tech, index) => (
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={`${index}`}
                  className={
                    "bg-transparent-black " + (tech.id === 1 ? "active" : "")
                  }
                  aria-current={"" + (tech.id === 1 ? "true" : "")}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
              {techs.map((tech) => (
                <Technology key={tech.id} technology={tech} />
              ))}
            </div>
            <button
              className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
