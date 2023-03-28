import React from 'react'
import {
    Navbar,
    Typography
} from "@material-tailwind/react";

function Header() {
    return (
        <div>
            <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
                <div className="container mx-auto flex items-center justify-between text-gray-900">
                    <Typography
                        as="a"
                        href="/"
                        variant="small"
                        className="mr-4 cursor-pointer p-4 font-bold hover:bg-white rounded-lg"
                    >
                        <span>First Form</span>
                    </Typography>
                    <Typography
                        as="a"
                        href="/second"
                        variant="small"
                        className="mr-4 cursor-pointer p-4 font-bold hover:bg-white  rounded-lg"
                    >
                        <span>Second Form</span>
                    </Typography>
                </div>
            </Navbar>
        </div>
    )
}

export default Header
