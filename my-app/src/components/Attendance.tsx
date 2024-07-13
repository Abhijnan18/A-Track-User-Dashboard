import React from 'react';

interface AttendanceProps {
    date: string;
    checkIn: string;
    checkOut: string;
    totalHours: string;
    status: 'present' | 'absent';
}

const Attendance: React.FC<AttendanceProps> = ({ date, checkIn, checkOut, totalHours, status }) => {
    const checkInTime = new Date(`1970-01-01T${checkIn}`);
    const checkOutTime = new Date(`1970-01-01T${checkOut}`);
    const checkInLimit = new Date('1970-01-01T09:00:00');
    const checkOutLimit = new Date('1970-01-01T16:45:00');

    return (
        <div className="bg-white rounded-lg shadow p-4 mb-4">
            <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-lg">{date}</span>
                <span className={`font-bold ${status === 'absent' ? 'text-red-600' : 'text-green-500'}`}>
                    {status === 'absent' ? 'Absent' : totalHours}
                </span>
            </div>
            {status !== 'absent' && (
                <div className="flex justify-between mb-2">
                    <div>
                        <span className="font-normal text-gray-500 text-xs">Check In</span>
                        <p className={checkInTime > checkInLimit ? 'text-red-600' : 'text-green-600'}>{checkIn}</p>
                    </div>
                    <div>
                        <span className="font-normal text-gray-500 text-xs">Check Out</span>
                        <p className={checkOutTime < checkOutLimit ? 'text-red-600' : 'text-green-600'}>{checkOut}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Attendance;
