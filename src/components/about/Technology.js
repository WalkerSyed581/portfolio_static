const Technology = ({ technology }) => {
  return (
    <div
      className={
        "carousel-item relative float-left w-full" +
        (technology.id === 1 ? " active" : "")
      }
    >
      <div className="text-blue text-4xl font-black">{technology.name}</div>
      <div className="circle-wrap">
        <div className="inside-circle">
          <img
            className="sm:w-40 sm:ml-0 sm:mt-0 lg:w-48 mt-3 ml-2 p-5"
            src={process.env.PUBLIC_URL + technology.logo}
          />
        </div>
        <div className="circle">
          <div className="mask half">
            <div className={"fill fill-" + technology.expertise}></div>
          </div>
          <div className={"mask full fill-" + technology.expertise}>
            <div className={"fill fill-" + technology.expertise}></div>
          </div>
        </div>
      </div>
      <h1>{technology.expertise}%</h1>
    </div>
  );
};

export default Technology;
