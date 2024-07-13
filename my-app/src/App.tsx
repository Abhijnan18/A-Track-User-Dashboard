import React from 'react';
import Attendance from './components/Attendance';
import './index.css';

const App: React.FC = () => {
  const data = [
    {
      date: 'Friday, April 14',
      checkIn: '09:00:00',
      checkOut: '16:55:00',
      status: 'present'
    },
    {
      date: 'Thursday, April 13',
      checkIn: '10:05:00',
      checkOut: '17:02:00',
      status: 'present'
    },
    {
      date: 'Wednesday, April 12',
      checkIn: '09:00:00',
      checkOut: '16:30:00',
      status: 'present'
    },
    {
      date: 'Tuesday, April 11',
      checkIn: '',
      checkOut: '',
      status: 'absent'
    },
    {
      date: 'Monday, April 10',
      checkIn: '09:00:00',
      checkOut: '16:55:00',
      status: 'present'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-blue-50 to-purple-200 p-4">
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-2xl font-bold">Attendances</h1>
      </div>

      {data.map((entry, index) => (
        <Attendance
          key={index}
          date={entry.date}
          checkIn={entry.checkIn}
          checkOut={entry.checkOut}
          status={entry.status}
        />
      ))}
    </div>
  );
}

export default App;
