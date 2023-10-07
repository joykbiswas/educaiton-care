import PropTypes from "prop-types";

const EducationCards = ({ education }) => {
  const {  title, img ,description ,category } = education;
  // console.log(education);
  return (
      <div className=" ">
        <div className=" flex flex-col card  bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-52" src={img} alt="Shoes" />
          </figure>
          <div className=" flex-grow card-body">

            <h2 className=" card-title">{title}</h2>
            <h2 className="">{category}</h2>
            <div className="" >
                {
                    description.length >130 ?(
                        <p>
                          {description.slice(0,130)}
                          reed more...
                        </p>
                    )
                    :(
                        <p>{description}</p>
                    )
                }
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default EducationCards;
EducationCards.propTypes = {
  education: PropTypes.object,
};
