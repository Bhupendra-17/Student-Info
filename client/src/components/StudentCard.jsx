// src/components/StudentCard.js
import React, { useState } from 'react';
import Photo from './photo.jpg';

const StudentCard = ({ student }) => {
    // State to control the toggle for more details
    const [showDetails, setShowDetails] = useState(false);

    // Function to toggle the details
    const handleToggle = () => {
        setShowDetails((prev) => !prev);
    };

    return (
        <div className="border rounded-xl backdrop:blur-md bg-white/40 p-4 m-2 w-64 shadow-lg flex flex-col items-start gap-4 
        transition transform hover:scale-105 duration-300 mx-auto">
            <div className="flex items-center gap-4">
                <img src={Photo} alt="Student" className="w-14 rounded-full border-2 border-gray-700" />
                <div>
                    <h2 className="text-lg font-semibold">{student.name}</h2>
                    <p>ID: {student.id}</p>
                    <p>Attendance: {student.attendance}%</p>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={handleToggle}
                className="text-blue-600 mt-2 font-semibold hover:underline"
            >
                {showDetails ? 'Hide Details' : 'Show More Details'}
            </button>

            {/* Additional Details Section */}
            {showDetails && (
                <div className="mt-2 text-sm text-gray-700">
                    <p>Email: {student.email}</p>
                    <p>Phone: {student.phone}</p>
                    <p>Address: {student.address}</p>
                </div>
            )}
        </div>
    );
};

export default StudentCard;
