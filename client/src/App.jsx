// src/App.js
import React, { useState } from 'react';
import StudentList from './components/Stu_list';
import SearchBar from './components/SearchBar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data
  const students = [
    { id: 1, name: 'Abhay Singh', attendance: 80 , email: 'alice@example.com', phone: '123-456-7890', address: '123 Main St' },
    { id: 2, name: 'Aakriti Verma', attendance: 86 , email: 'alice@example.com', phone: '123-456-7890', address: '123 Main St' },
    { id: 3, name: 'Rahul Sharma', attendance: 77, email: 'alice@example.com', phone: '123-456-7890', address: '123 Main St'  },
    { id: 4, name: 'Gaurav Singh', attendance: 89, email: 'alice@example.com', phone: '123-456-7890', address: '123 Main St'  },
    { id: 5, name: 'Anjali Sharma', attendance: 95, email: 'alice@example.com', phone: '123-456-7890', address: '123 Main St'   },
    { id: 6, name: 'Gargi Singh', attendance: 92, email: 'alice@example.com', phone: '123-456-7890', address: '123 Main St'   }
  ];

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 w-full bg-gradient-to-r from-pink-200 via-purple-400 to-indigo-400 min-h-screen ">
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row
      gap-4 justify-between items-baseline mb-4 mx-4">
        <h1 className="text-2xl font-bold">Student Information</h1>
        <div className="sm:w-1/2 md:w-1/3 lg:w-1/3 p-2"> {/* Optional: Set a width for the search bar */}
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </div>
      <div className='p-2'>
        <StudentList students={filteredStudents} />
      </div>
    </div>
  );
};

export default App;
