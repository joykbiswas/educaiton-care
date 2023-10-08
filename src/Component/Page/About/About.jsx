import Navbar from "../Navbar/Navbar";
import AboutBanner from "./AboutBanner";

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-2xl">About section</h2>
            <AboutBanner></AboutBanner>
            <div  className=" flex border-2 max-w-5xl mx-auto space-x-3">
                <div className="w-1/2 border-2">
                    <h2>here is img</h2>
                    <img className="  rounded-lg" src="https://i.ibb.co/bbWPRHw/instractor-img1.jpg" alt="" />
                </div>

                <div className="w-1/2 border-2 space-y-3 ">
                    <h2>here ise two img</h2>
                    <img className=" rounded-lg " src="https://i.ibb.co/C9843xV/instract-img2.jpg" alt="" />
                <img className=" rounded-lg" src="https://i.ibb.co/d5ZdgmW/blogging1.jpg" alt="" />
                </div>
                
            </div>
            <div  className="max-w-5xl mx-auto">
                <h2 className="text-3xl">We Are Education care, Online Course Since 1990</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, ducimus optio? Fuga ut distinctio hic nesciunt consequatur adipisci, possimus eligendi dolores tempore, odit tenetur porro inventore omnis cum veritatis? Neque consequatur, voluptatum est quisquam aliquid nihil odit necessitatibus corrupti nisi libero adipisci repudiandae distinctio deserunt, ducimus quod. Odio voluptates, molestias delectus itaque excepturi natus, ut odit nisi maiores modi consequatur impedit aut? Ad iusto cupiditate quae, optio distinctio vel obcaecati nulla excepturi laborum tempore, commodi consequatur quos nisi maxime sequi laudantium facilis doloribus eveniet officia, possimus voluptatum error. Dolorem totam adipisci unde? Officia dolorum maxime provident minima quod qui tenetur.</p>
            </div>
        </div>
    );
};

export default About;

/*
<div  className=" flex border-2 max-w-5xl mx-auto">
                <img className="w-96 m-2 rounded-lg" src="https://i.ibb.co/bbWPRHw/instractor-img1.jpg" alt="" />
                <div className="">
                <img className="w-96 m-2 rounded-lg " src="https://i.ibb.co/C9843xV/instract-img2.jpg" alt="" />
                <img className="w-96 m-2 rounded-lg" src="https://i.ibb.co/d5ZdgmW/blogging1.jpg" alt="" />
                </div>
            </div>
*/