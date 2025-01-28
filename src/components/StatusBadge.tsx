// import React from 'react'
// import { Status } from '@prisma/client'

// interface StatusBadgeProps{
//     status : Status
// }

// const StatusBadge = ({status}: StatusBadgeProps) => {
//     const statusColor = status === Status.TODO
//     ? "bg-red-400 text-red-950"
//     : status === Status.IN_PROGRESS
//     ? "bg-yellow-400 text-yellow-950"
//     : "bg-green-400 text-green-950"

//     return (
//         <div className={`${statusColor} py-1 px-2 w-min rounded-lg font-semibold`}>
//             {status.toString()}
//         </div>
//     )
// }

// export default StatusBadge


import React from 'react';
import { Status } from '@prisma/client';

interface StatusBadgeProps {
    status: Status;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
    const statusColor =
        status === Status.TODO
            ? "bg-red-500 text-red-50"
            : status === Status.IN_PROGRESS
            ? "bg-yellow-500 text-yellow-900"
            : "bg-green-500 text-green-50";

    return (
        <div
            className={`
                ${statusColor} 
                py-1 px-3 rounded-full font-medium text-sm shadow-md 
                transition-transform transform hover:scale-105
            `}
        >
            {status.toString().replace('_', ' ')}
        </div>
    );
};

export default StatusBadge;