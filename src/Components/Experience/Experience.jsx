import { IoLogoFirebase } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { RiFlutterFill } from "react-icons/ri";
import { RiFileExcel2Line } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import ai from "../../assets/ai-unscreen.gif";
import abdata from "../../assets/abdata.png";
import cosmo from "../../assets/cosmo.png";
import cafe from "../../assets/cafe.png";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills And Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPython color="#3776AB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <DiMysql color="#4479A1" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <RiFlutterFill color="#4fc0ef" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#e27d29" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
          <IoLogoFirebase color="#fca11e" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
          <img src={ai} alt="" height={50} width={50}/>
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaAws color="#ff9d16" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <RiFileExcel2Line color="#206d42" size={50} />
          </span>
        </div>
        <div>
        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <img src={cosmo} alt="" height={50} width={50}/>
            <span className="text-white">
              <h2 className="leading-tight">Backend Developer Intern, Cosmotech AI</h2>
              <p className="text-sm leading-tight font-thin">
                January 2024 - July 2024
              </p>
              <ul className="text-sm p-2">
                <li>- Optimized backend boosted performance by 15%, and reduced response time..</li>
                <li>- Developed REST API for seamless app integration with backend services, improving user experience.</li>
                <li>- Led Device Management System upgrade: integrated Django & Flask, automated tasks with backnet hardware saved 20% manual effort.</li>
                <li></li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <img src={abdata} alt="" height={50} width={50}/>
            <span className="text-white">
              <h2 className="leading-tight">Machine Learning Engineer , AbsolutData Inc.</h2>
              <p className="text-sm leading-tight font-thin">
                January 2023 - December 2023
              </p>
              <ul className="text-sm p-2">
                <li>- Mastered data storage in AWS S3, boosting accessibility for ML models by 30%.</li>
                <li>- Guaranteed 99.8% uptime with vigilant monitoring and maintenance of data pipelines and algorithms</li>
                <li>- Tamed raw data, shaping it for seamless ML model consumption.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <img src={cafe} alt="" height={50} width={50}/>
            <span className="text-white">
              <h2 className="leading-tight">Freelancer, Sunset Cafe</h2>
              <p className="text-sm leading-tight font-thin">
                June 2022 - December 2022
              </p>
              <ul className="text-sm p-2">
                <li>- Curated an Android application for a local cafe in Mauritius.</li>
                <li>- Made their menu accessible to users and increased sales by 40%.</li>
                <li>- Made a chatbot and user-friendly UI for hassle-free reservation and table booking.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
