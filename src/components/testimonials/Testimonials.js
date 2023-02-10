import React from "react";
import Testimonial from "./Testimonial";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      client_name: "Erica Shivers",
      image: "/erica.jpg",
      project_id: 1,
      description:
        "Sajeel, was really patient the entire time and he adjusted to my schedule when I travelled to different time zones. He is an amazing software engineer, he also went over beyond to assist with things that were not his expertise. I highly recommend Sajeel for your project. He is very knowledgable on both back-end and front-end development.",
    },
    {
      id: 2,
      client_name: "Devon Schuessler",
      image: "",
      project_id: 2,
      description:
        "Sajeel did a great job and he delivered very quickly. Sajeel is also very skilled and had the experience to do the work. The communication was also great and I had a great experience working with Sajeel. I would definitely recommend this freelancer.",
    },
    {
      id: 3,
      client_name: "Kevin Balog",
      image: "/kevin.jpg",
      project_id: 3,
      description:
        "Sajeel Hassan was quick at doing this job. Definitely recommend !",
    },
  ];
  return (
    <div
      className="bg-testimonial-bg bg-cover bg-fixed relative "
      id="testimonials"
    >
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        width="100%"
        height="100"
      >
        <path d="M0 0 L50 100 L100 0 Z" style={{ fill: "#1c1917x	" }}></path>
      </svg>
      <div className="pt-16 pb-8 text-white">
        <h1>Testimonials</h1>
      </div>

      <div className="bg-blue text-4xl inline-block p-8 absolute top-54 left-4 rounded-full">
        <FaQuoteLeft />
      </div>
      <div className=" testimonials p-16 flex justify-center bg-transparent-black m-12">
        <div className="basis-96 text-white text-left p-6 mr-16 h-full flex flex-col">
          <h2 className="text-2xl text-blue font-black ">My Reviews</h2>
          <p>
            I have gathered a collection of opinions and feedback from friends,
            family, and past clients to showcase my work and experience. These
            reviews provide a glimpse into my capabilities and the results I
            have delivered in the past. My goal is to be completely transparent
            and share my work with you in an open and honest way. I take pride
            in my commitment to excellence and these reviews are a testament to
            that. I invite you to read through them and learn more about me and
            my approach to work. You can read more of my reviews on{" "}
            <a href="https://www.upwork.com/freelancers/~01d5ced9257eb7da75?s=1110580755107926016">
              Upwork
            </a>
            .
          </p>
        </div>
        {testimonials.map((testimonial) => (
          <Testimonial testimonial={testimonial} />
        ))}
      </div>
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        width="100%"
        height="100"
      >
        <path
          d="M 0 100 L 50 0 L 100 100 Z"
          style={{ fill: "rgb(28, 25, 23)" }}
        ></path>
      </svg>
    </div>
  );
};

export default Testimonials;
