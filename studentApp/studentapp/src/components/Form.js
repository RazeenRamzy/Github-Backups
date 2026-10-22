import { React } from 'react';

export default function Form() {
    return(
        <div>
            <h1 className='text-5xl font-semibold'>Welcome Back</h1>
            <p> Welcome back! Please enter your details.</p>
            <div>
                <div>
                    <label>Email </label>
                    <input 
                        className=''
                        placeholder='Enter your email'
                    
                    
                    />
                </div>
                <div>
                    <label>Password </label>
                    <input 
                        className=''
                        placeholder='Enter your password'
                        type="password"
                    
                    />
                </div>
                <div>
                    <div>
                        <input
                            type="checkbox"
                        />
                        <labe for="remember">Remember for 30 days</labe>
                    </div>
                    <button> Forgot Password</button>
                </div>
            </div>
        </div>
    )
}