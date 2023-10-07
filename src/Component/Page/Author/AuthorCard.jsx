import PropTypes from "prop-types";


const AuthorCard = ({ author }) => {
    const {img,name,profession} =author;
  console.log(author);
  return (
    <div>
      <div className="card h-40 lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="h-full w-32"
            src={img}
            alt="Album"
          />
        </figure>
        <div className=" p-3 space-y-3">
          <h2 className="font-bold">{name}</h2>
          <p>{profession}</p>
          
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;

AuthorCard.propTypes = {
    author: PropTypes.object,
  };