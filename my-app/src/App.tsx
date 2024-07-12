import React from 'react';
import Attendance from './components/Attendance';
import './index.css';

const App: React.FC = () => {
  const data = [
    {
      date: 'Friday, 14',
      checkIn: '9:00 am',
      checkOut: '4:55 pm',
      breaks: [{ description: 'Lunch Break', from: '1:01 pm', to: '1:30 pm', totalTime: '00:24:00' }],
      totalHours: '7:02:43'
    },
    {
      date: 'Thursday, 13',
      checkIn: '10:05 am',
      checkOut: '5:02 pm',
      breaks: [
        { description: 'Lunch Break', from: '1:01 pm', to: '1:30 pm', totalTime: '00:24:00' },
        { description: 'Rest Break', from: '3:10 pm', to: '3:16 pm', totalTime: '00:06:12' }
      ],
      totalHours: '6:02:43'
    },
    // Add more data as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Attendances</h1>
      {data.map((entry, index) => (
        <Attendance
          key={index}
          date={entry.date}
          checkIn={entry.checkIn}
          checkOut={entry.checkOut}
          breaks={entry.breaks}
          totalHours={entry.totalHours}
        />
      ))}
    </div>
  );
}

export default App;
