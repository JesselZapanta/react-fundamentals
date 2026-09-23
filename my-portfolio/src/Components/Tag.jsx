import React from 'react'

export default function Tag({ label, bgColor, textColor }) {
    return (
        <div
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold shadow-sm ${bgColor} ${textColor}`}>
            {label}
        </div>
    );
}
