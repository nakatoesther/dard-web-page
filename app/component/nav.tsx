import React from "react";
import Image from "next/image";
import Link from "next/link";
import SelectDropdown from './SelectDropdown';
/*import { useState } from "react";*/

export default function NavPage() {

    return (
        <div className="w-full flex justify-between items-center px-10">
            <div className="flex justify-between items-center px-10 gap-1">
                <div className="w-20 h-20 rounded-full bg-gray-400 text-8xl font-bold"></div>
                <div className="w-15 h-15 text-4xl font-bold text-green-900">DARB</div>
            </div>
            <nav>
                <ul className="flex gap-6">
                    <li>
                        <Link href="#">Home</Link>
                    </li>

                    <li>
                        <button className="">Services</button>
                    </li>
                    <li>
                        <a href="">How it Works</a>
                    </li>
                    <li>
                        <a href="">Impact</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                   <li>
           <button className="px-5 py-3 bg-green-900 text-black rounded-md hover:bg-emerald-600 transition duration-200 gap-1">
           <Link href="https://darb.axiomzorndata.com/login">
           Get Started
            </Link> 
           </button>
           </li>
                </ul>
            </nav>
            <div>

            </div>
        </div>
    )
}