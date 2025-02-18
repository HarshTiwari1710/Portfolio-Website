import ProjectCard from "./ProjectCard";
import drink from "../../assets/image.png";
import neural from "../../assets/neural.png";
import telecom from "../../assets/Telecom.png";
import tesla from "../../assets/Tesla.png";
const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="SoberShot"
          main="This is a project of Beverage Recommendation System created using Machine Learning Frameworks and deployed on Render. This system uses Past user experience to reccommend drinks based on users prefrence."
          imgSrc={drink}
          sourceLink="https://github.com/HarshTiwari1710/Sobershot"
        />
        <ProjectCard
          title="Neural Network from Scratch"
          main="This is a project of Neural Network created from scratch using Python. This project is created using Numpy without using any other libraries."
          imgSrc={neural}
          sourceLink="https://github.com/HarshTiwari1710/Nerual-Network"
        />
        <ProjectCard
        imgSrc={telecom}
          title="Telecom Customer Churn Prediction"
          main="This project focuses on using a machine learning model to predict customer churn, which is crucial for identifying customers at risk of discontinuing their use of a service or product."
          sourceLink="https://github.com/HarshTiwari1710/Customer-Churn-Telecom"
        />
        <ProjectCard
        imgSrc={tesla}
          title="Tesla Carplay Application"
          main="This project is a clone of Tesla Carplay Application created using Flutter. This application is created using Flutter and Dart."
          sourceLink="https://github.com/HarshTiwari1710/Tesla_App"
        />
      </div>
    </div>
  );
};

export default Projects;
