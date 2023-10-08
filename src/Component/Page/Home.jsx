import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import EducationCards from "./EducationCards/EducationCards";
import Category from "./Category/Category";
import { useState } from "react";
import Author from "./Author/Author";
import From from "./Form/Form";



const Home = () => {
    const educations =useLoaderData();
    const [selectedCategory,setSelectedCategory] = useState(null)
    const handleFilter =(category)=>{
        setSelectedCategory(category);
    }
    // console.log(educations);

    // const filteredEducations = educations.filter(
    //     (education) => selectedCategory === "all" || education.category === selectedCategory
    //   );

      const filteredEducations =selectedCategory  ?   educations.filter((education) => education. category   === selectedCategory)

     : educations

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Category handleFilter={handleFilter} ></Category>
            {/* <div className="space-x-4">
              <button onClick={()=>handleFilter('all')} className="text-2xl active">All</button>
              <button onClick={()=>handleFilter('EducationalConferences')} className="text-2xl">EducationalConferences</button>
              <button onClick={()=>handleFilter('TrainingPrograms')} className="text-2xl">TrainingPrograms</button>
              <button onClick={()=>handleFilter('Webinars')} className="text-2xl">Webinars</button>
             </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* {
                educations.filter(education =>!selectedCategory || education.category === selectedCategory)
                .map(aEducation =><EducationCards key={educations.id} education={aEducation}></EducationCards>)
            } */}

            {filteredEducations.map((aEducation) => (
               <EducationCards key={aEducation.id}
               education={aEducation}
              ></EducationCards>
            ))}
            </div>
            <Author></Author>
            <From></From>
        </div>
    );
};

export default Home;
