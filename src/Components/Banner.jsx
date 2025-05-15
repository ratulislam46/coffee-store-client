import React from 'react';


const Banner = () => {
    return (
        <div>
            <div
                className="hero mb-4 h-[250px] lg:h-[800px]"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/jmbGBKS/3.png)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="text-center">
                    <div className="ml-[100px] -mb-12 lg:ml-[900px] lg:-mt-36">
                        <h1 className="mb-5 text-xl md:text-3xl lg:text-6xl">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5 ml-[80px] text-gray-400 w-[70%] font-serif">
                           It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                        </p>
                        <button className="btn mb-4 lg:mb-0 bg-[#e76f51] font-normal font-serif">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;