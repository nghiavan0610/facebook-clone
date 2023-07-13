'use client';

import Image from 'next/image';
import React from 'react';
import { signIn } from 'next-auth/react';

const Login = () => {
    return (
        <div className="flex flex-col items-center mx-auto">
            <Image
                src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                height={240}
                width={240}
                style={{ width: 240, height: 240 }}
                priority={true}
                alt="facebook"
            />
            <button
                onClick={() => signIn('facebook')}
                className="px-20 py-4 z-10 text-2xl cursor-pointer -mt-16 bg-blue-500 rounded-md text-white"
            >
                Login
            </button>
        </div>
    );
};

export default Login;
