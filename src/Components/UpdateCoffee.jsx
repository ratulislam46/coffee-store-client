import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    console.log(coffee);
    const { _id, name, supplier, taste, price, quantity, photo, details } = coffee;

    const handleUpdateCoffee = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());
        console.log(updatedCoffee);

        // sent database and update this data 
        fetch(`http://localhost:3000/coffees/${_id}`,
            {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedCoffee)
            }
        )
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log('after update', data);

                    // sweetAleart 
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Coffee update successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }

    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-6xl'>Update Coffee</h1>
            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Enter Coffee Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Quantity</label>
                        <input type="text" name='quantity' defaultValue={quantity} className="input w-full" placeholder="Enter Quantity" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" name='supplier' defaultValue={supplier} className="input w-full" placeholder="Enter Coffee Supplier" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Taste</label>
                        <input type="text" name='taste' defaultValue={taste} className="input w-full" placeholder="Enter Coffee taste" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Price</label>
                        <input type="text" name='price' defaultValue={price} className="input w-full" placeholder="Enter Coffee Price" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Details</label>
                        <input type="text" name='details' defaultValue={details} className="input w-full" placeholder="Enter Coffee Details" />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 my-6">
                    <label className="label">Photo</label>
                    <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="Enter photo URL" />
                </fieldset>
                <input type="submit" value="Update Coffee" className='btn w-full' />
            </form>
        </div>
    );
};

export default UpdateCoffee;