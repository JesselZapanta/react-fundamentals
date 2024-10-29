import React from 'react'

export default function UserGreetings() {
    
    const isLoggedIn = false;

    return (
        <div>
            
            {isLoggedIn ? (
                <h1>Welcome to dashboard</h1>
            ) : (
                <h1>Please Log in to your account!</h1>
            )}

            {
                isLoggedIn && (
                    <h1>Welcome to dashboard</h1>
                )
            }

            {/* using ternary */}
            <h1>{isLoggedIn ? "Welcome" : "Log in"}</h1>
        </div>
    );
}
