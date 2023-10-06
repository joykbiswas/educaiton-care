import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import EducationCards from "./EducationCards/EducationCards";



const Home = () => {
    const educations =useLoaderData();
    console.log(educations);
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="grid grid-cols-3 gap-4">
            {
                educations.map(aEducation =><EducationCards key={educations.id} education={aEducation}></EducationCards>)
            }
            </div>
        </div>
    );
};

export default Home;