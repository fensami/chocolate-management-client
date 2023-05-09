const AddChocolate = () => {
    // const {_id} = chocolate;

    const handleAddChocolate = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const action = form.action.value;
        const newChocolate = { photo, name, country, category, action };
        console.log(newChocolate);


        //send data to the server
        fetch('http://localhost:5000/chocolate', {
            method: 'post',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newChocolate)
        })
        .then(res => res.json())
        .then(data => 
            console.log(data)
        )
        // fetch('http://localhost:5000/chocolate', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newChocolate)

        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })
    }
    return (
        <div>
            <h1>add Chocolate</h1>
            <form onSubmit={handleAddChocolate}>
                <div className='flex justify-between'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="photo" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="country" placeholder="Country" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered" />
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
                <input className="bg-green-500" type="submit" value="Submit" />


            </form>
        </div>
    );
};

export default AddChocolate;