import PropTypes from "prop-types";

const EducationCards = ({ education }) => {
  const {  title, img ,description  } = education;
  console.log(education);
  return (
    <div className="">
      <div className=" ">
        <div className="flex  card  bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-52" src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className="grow" >
                {
                    description.length >150 ?(
                        <p>
                          {description.slice(0,150)}
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
    </div>
  );
};

export default EducationCards;
EducationCards.propTypes = {
  education: PropTypes.object,
};
