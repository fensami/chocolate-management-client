import { Link } from "react-router-dom";

const ChocolateCard = ({chocolate}) => {
    const {_id,name, photo,country,category} = chocolate;

    const handleDelete = _id => {
        console.log(_id);

        fetch(`http://localhost:5000/chocolate/${_id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div className='topic-name mx-28 py-5 px-10 mt-3	'>
            <div className='flex justify-between text-start'>
            <img className="w-16" src={photo} alt="" />
            <p>{name}</p>
            <p>{country}</p>
            <p>{category}</p>
            <div className="flex gap-3">
                <Link to={`updateChocolate/${_id}`}><button>Edit</button></Link>
                <button onClick={() => handleDelete(_id)} className='bg-red-600 text-4xl	 font-black text-white'>x</button>
            </div>
            {/* onClick={() => handleDelete(_id)} */}
        </div>
        </div>
    );
};

export default ChocolateCard;