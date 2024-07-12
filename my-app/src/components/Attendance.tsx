import React from 'react';

interface Break {
    description: string;
    from: string;
    to: string;
    totalTime: string;
}

interface AttendanceProps {
    date: string;
    checkIn: string;
    checkOut: string;
    breaks: Break[];
    totalHours: string;
    status?: 'normal' | 'sick';
}

const Attendance: React.FC<AttendanceProps> = ({ date, checkIn, checkOut, breaks, totalHours, status }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 mb-4">
            <div className="flex justify-between items-center">
                <span className="font-bold text-lg">{date}</span>
                <span className={`font-bold ${status === 'sick' ? 'text-yellow-500' : 'text-green-500'}`}>{totalHours}</span>
            </div>
            <div className="flex justify-between mt-2">
                <div className="text-green-600">{checkIn}</div>
                <div className="text-red-600">{checkOut}</div>
            </div>
            {breaks.length > 0 && (
                <div className="mt-2">
                    <div className="bg-blue-100 p-2 rounded">
                        {breaks.map((breakItem, index) => (
                            <div key={index} className="flex justify-between">
                                <div>{breakItem.description}</div>
                                <div>{breakItem.from} - {breakItem.to}</div>
                                <div>{breakItem.totalTime}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Attendance;
