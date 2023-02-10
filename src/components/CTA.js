import Button from "./Button";

const CTA = () => {
  return (
    <section
      className=' h-screen bg-fixed
                     bg-[url("/public/cta.jpg")] bg-cover '
    >
      <div className="bg-transparent-black h-screen flex flex-col justify-center content-center">
        <div className="m-2">
          <p className="text-slate text-5xl font-bold">
            This is <span className="text-red">SAJEEL HASSAN</span>.<br /> I'm a
            full-stack developer.
          </p>
        </div>
        <Button
          text="VIEW PROFILE"
          classText="bg-red transition-all duration-500 py-4 px-10 text-xl w-fit mx-auto mt-10 font-bold hover:bg-white"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.upwork.com/freelancers/~01d5ced9257eb7da75?s=1110580755107926016"
            );
          }}
        />
      </div>
    </section>
  );
};

export default CTA;
