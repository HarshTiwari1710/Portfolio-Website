import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
         An aspiring data scientist specializing in Python, SQL, machine learning, and AWS. My goal is to harness the power of data to drive impactful business solutions. With a proven track record of delivering technology-driven projects, I am eager to bring my analytical skills and strategic insights to solve real-world challenges.
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
        <a href="https://drive.google.com/file/d/1Wvv4kYujfcaFWxRhUIzev2O2JyLLweDG/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </button>
      </div>
      <div>
        <img className="" src={avatarImg} alt=""  height={700} width={700}/>
      </div>
    </div>
  );
};

export default Home;
