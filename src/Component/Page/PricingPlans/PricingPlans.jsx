import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import PricingBanner from "./PricingBanner";
import Option from "./Option";


const PricingPlans = () => {
    const priceOption= useLoaderData()
    console.log(priceOption);
    return (
        <div>
            <Navbar></Navbar>
            <PricingBanner></PricingBanner>

            <div>
                <h2 className="text-5xl font-bold my-7">Pricing plans</h2>
                <hr className="w-14 border-2 mb-4 border-red-500" />
            </div>
            <div className="grid md:grid-cols-3 gap-6  m-16 ">
                {
                    priceOption.map(option=><Option key={option.ID} option={option}></Option>)

                }

            </div>
        </div>
    );
};

export default PricingPlans;