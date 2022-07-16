import React, { useRef } from "react"

const Start = ({ setUsername }) => {
    const inputRef = useRef()

    const handleClick = () => {
        setUsername(inputRef.current.value)
    }

    return (
        <div className="start">
            <input
                required
                placeholder="enter your name"
                type="text"
                className="startInput"
                ref={inputRef}
            />
            <button onClick={handleClick} className="startBtn">
                Start
            </button>
        </div>
    )
}

export default Start
