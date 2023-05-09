import { useLoaderData } from "react-router-dom";

const UpdateChocolate = () => {
    const chocolate = useLoaderData()
    const {_id, name,country,action, category, photo } = chocolate;

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const action = form.action.value;
        const newChocolate = { photo, name, country, category, action };
        console.log(newChocolate);

        fetch(`http://localhost:5000/chocolate/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newChocolate)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className="mx-10">
             <h1 className='header'>Update Chocolate</h1>

             <form onSubmit={handleUpdate}>
                <div className='flex justify-between'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo} placeholder="photo" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="country" defaultValue={country} placeholder="Country" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Action</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="action" placeholder="action" className="input input-bordered" />
                        </label>

                    </div>

                </div>
                <br />
                {/* <input className="bg-green-500 p-2 text-center text-lg"  type="Update" value="Submit" /> */}
                <input type="submit" value="Update" />


            </form>
        </div>
    );
};

export default UpdateChocolate;