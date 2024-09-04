"use client"
import { useState } from "react";

import Footer from "@/components/footer";
import NavBar from "@/components/header";
import { Input } from "@/components/ui/input";

export default function BinaryCode() {

    const [text, setText] = useState('')
    const [binary, setBinary] = useState('')

    const convertToBinary = (str) => {
     return str
        .split('')
        .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join('')
    }

    const handleChange = (e) => {
     const inputText = e.target.value
        setText(inputText)
        setBinary(convertToBinary(inputText))
    }

    return (
        <>
        <NavBar />
        <h1 className="text-white text-6xl text-left ml-14 mt-40 font-extrabold">Binary Code</h1>
        <div className="flex items-center gap-4 mx-14  h-44">
            <Input value={text} onChange={handleChange} placeholder="Text" />
            <Input value={binary} readOnly placeholder="Binary Code" />
        </div>
        <Footer />
        </>
    )
}