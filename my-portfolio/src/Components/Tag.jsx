import React from 'react'

export default function Tag({ label, bgColor, textColor }) {
    return (
        <div
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 border-transparent  ${bgColor} ${textColor} text-sm font-semibold`}>
            {label}
        </div>
    );
}
