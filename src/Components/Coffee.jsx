import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const Coffee = ({ coffee }) => {

    console.log(coffee);
    const { _id, name, photo, price, quantity } = coffee;

    const handleDeleteCoffee = (_id) => {
        console.log('delete', _id);
        console.log();

        // sweetAleart 
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed);
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after delete', data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm border mx-4 md:mx-0 px-4 py-2">
                <figure>
                    <img
                        src={photo}
                        alt="Coffee"
                        className='h-[200px]' />
                </figure>

                {/* details  */}
                <div className='flex w-full justify-around items-center'>
                    <div>
                        <h3>{name}</h3>
                        <h3>Price: {price}</h3>
                        <h3>Quantity: {quantity}</h3>
                    </div>

                    {/* button  */}
                    <div className="flex flex-col gap-3">
                        <Link to={`/coffee/${_id}`}>
                            <button className="btn ">View</button>
                        </Link>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn ">Edit</button>
                        </Link>
                        <button onClick={() => handleDeleteCoffee(_id)} className="btn ">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;