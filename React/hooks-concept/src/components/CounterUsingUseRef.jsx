import React, { useRef } from 'react'

function CounterUsingUseRef() {
    const myRef = useRef(null)
    const myNum = useRef(0)
    const videoButtonRef = useRef(null)
    const videoMouseRef = useRef(null)

    const handleRef = () => {
        myRef.current.focus();
        // myRef.current.value = "From Button";
    }
    console.log("Component Rendered");

    const handleNum = () => {
        myNum.current++;
        console.log(myNum.current);

    }

    const handlePlayVideo = () => {
        videoButtonRef.current.play();
    }

    const handlePauseVideo = () => {
        videoButtonRef.current.pause();
    }


    const handleMouseEnter = () => {
        videoMouseRef.current.play()
    }
    const handleMouseLeave = () => {
        videoMouseRef.current.pause();
    }
    return (
        <div>
            {/* myRef to perform focus()------------ */}
            {/* <br />
        <input type="text" ref={myRef} /> <br /> <br />
        <button onClick={handleRef}>Focus</button> */}

            {/* myNum to store change without re-render the UI------------ */}
            {/* <br />
        <input type="text" name="" id="" /> <br /><br />
        <button onClick={handleNum}>Click</button>
        <p>Num: {myNum.current}</p>  */}
            {/* if we want to update the ui with current number then intentionlly we have to render the component */}
            {/* <h1>Hello</h1> */}

            {/* videoButtonRef using control the video with Play and Pause button--------------- */}
            <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                width="500"
                controls
                ref={videoButtonRef}
            ></video>
            <br /><br />
            <button onClick={handlePlayVideo}>Play</button> {" "}
            <button onClick={handlePauseVideo}>Pause</button>

            <br />
            <br />
            {/* videoMouseRef using control the video when we hover on video so video should be Play the video and when hover out so Pause the video.  */}
            <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                width="500"
                controls
                ref={videoMouseRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            ></video>
        </div>
    )
}

export default CounterUsingUseRef