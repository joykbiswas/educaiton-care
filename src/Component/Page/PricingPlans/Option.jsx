
import PropTypes from 'prop-types';
import Feature from './Feature';

const Option = ({option}) => {
    const {Name, Features, Price} = option;
    // console.log(option);
    return (
        <div className="bg-red-300 rounded-md flex flex-col" >
            <h3 className="text-4xl text-center ">{Price}</h3>
            <h2 className="text-2xl text-center ">{Name}</h2>

            <div className='flex-grow m-3'>
                {
                    Features.map((feature,idx)=><Feature key={idx}
                    feature={feature}
                   ></Feature>)
                }
            </div>
            <button className='w-full p-2 mb-3 bg-green-300 hover:bg-green-500 rounded-xl'>Buy now</button>
        </div>
    );
};

Option.propTypes ={
    option: PropTypes.object
 }
export default Option;

