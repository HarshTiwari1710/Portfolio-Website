import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">Education</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  University Of Guelph
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Guelph, Ontario, Canada
                  <br />
                  Masters in Data Science
                  <br />
                  September 2024 - Present
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Sharda University
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Greater Noida, Uttar Pradesh, India
                  <br />
                  Bachelors of Technology in Computer Science Engineering with Specialization in Artificial Intelligence and Machine Learning
                  <br />
                  August 2019 - October 2023
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Bal Bhavan International School
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  New Delhi,India
                  <br />
                  Class 12th - Science Stream
                  <br />
                  February 2018 - March 2019
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
