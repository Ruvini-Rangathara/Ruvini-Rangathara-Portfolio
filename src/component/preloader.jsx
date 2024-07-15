import React from 'react';

const Preloader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
            <div className="load relative pl-4 w-20 h-20">
                <hr className="absolute w-1/5 h-1/5 rounded-full bg-teal-600 animate-spin-delay1" />
                <hr className="absolute w-1/5 h-1/5 rounded-full bg-red-600 animate-spin-delay2" />
                <hr className="absolute w-1/5 h-1/5 rounded-full bg-yellow-500 animate-spin-delay3" />
                <hr className="absolute w-1/5 h-1/5 rounded-full bg-gray-800" />
            </div>
        </div>
    );
};

export default Preloader;
