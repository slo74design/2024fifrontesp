"use client";

import { Mic, OctagonX } from "lucide-react";
import React, { useState, useEffect } from "react";

const TextToSpeech = ({ text }) => {
    const [isPaused, setIsPaused] = useState(false);
    const [isListening, setIsListening] = useState(false);

    const [utterance, setUtterance] = useState(null);

    useEffect(() => {
        const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(text);
        setUtterance(u);

        return () => {
            synth.cancel();
        };
    }, [text]);

    const handlePlay = () => {
        const synth = speechSynthesis;
        const voices = synth.getVoices();

        // synth.getVoices().forEach((voice, index) => {
        //     console.log(
        //         index,
        //         voice.name,
        //         voice.lang,
        //         voice.voiceURI,
        //         voice.localService
        //     );
        // });

        utterance.voice = voices[161];

        if (isPaused) {
            synth.resume();
        }

        synth.speak(utterance);

        // setIsPaused(false);
        setIsListening(true);
    };

    // const handlePause = () => {
    //     const synth = window.speechSynthesis;
    //     synth.pause();
    //     setIsPaused(true);
    // };

    const handleStop = () => {
        const synth = window.speechSynthesis;

        synth.cancel();

        // setIsPaused(false);
        setIsListening(false);
    };

    return (
        <div>
            <button onClick={handlePlay}>
                {/* {isPaused ? "Resume" : <Mic size={16} />} */}
                {!isListening && <Mic size={16} color="#00AEFF" />}
            </button>
            {/* <button onClick={handlePause}>
                {isPlayed && <Mic size={16} />}
            </button> */}
            <button onClick={handleStop}>
                {isListening && (
                    <svg
                        width="21px"
                        height="14px"
                        viewBox="0 0 10 8"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g
                            id="Audio"
                            transform="translate(0.000000, 0.500000)"
                            stroke="currentColor"
                            stroke-width="1"
                            fill-rule="evenodd"
                            stroke-linecap="round"
                        >
                            <line
                                x1="8.5"
                                y1="0.493135"
                                x2="8.5"
                                y2="6.50687"
                                id="Line-5"
                            >
                                <animate
                                    attributeType="XML"
                                    attributeName="y1"
                                    values="2;0;2"
                                    keyTimes="0;0.5;1"
                                    dur=".8s"
                                    repeatCount="indefinite"
                                ></animate>
                                <animate
                                    attributeType="XML"
                                    attributeName="y2"
                                    values="5;7;5"
                                    keyTimes="0;0.5;1"
                                    dur=".8s"
                                    repeatCount="indefinite"
                                ></animate>
                            </line>
                            <line
                                x1="6.5"
                                y1="0.789016"
                                x2="6.5"
                                y2="6.21098"
                                id="Line-4"
                            >
                                <animate
                                    attributeType="XML"
                                    attributeName="y1"
                                    values="0;2;0"
                                    keyTimes="0;0.5;1"
                                    dur=".5s"
                                    repeatCount="indefinite"
                                ></animate>
                                <animate
                                    attributeType="XML"
                                    attributeName="y2"
                                    values="7;5;7"
                                    keyTimes="0;0.5;1"
                                    dur=".5s"
                                    repeatCount="indefinite"
                                ></animate>
                            </line>
                            <line
                                x1="4.5"
                                y1="1.67582"
                                x2="4.5"
                                y2="5.32418"
                                id="Line-3"
                            >
                                <animate
                                    attributeType="XML"
                                    attributeName="y1"
                                    values="1;3;1"
                                    keyTimes="0;0.5;1"
                                    dur=".6s"
                                    repeatCount="indefinite"
                                ></animate>
                                <animate
                                    attributeType="XML"
                                    attributeName="y2"
                                    values="6;4;6"
                                    keyTimes="0;0.5;1"
                                    dur=".6s"
                                    repeatCount="indefinite"
                                ></animate>
                            </line>
                            <line
                                x1="2.5"
                                y1="1.14678"
                                x2="2.5"
                                y2="5.85322"
                                id="Line-2"
                            >
                                <animate
                                    attributeType="XML"
                                    attributeName="y1"
                                    values="2;1;2"
                                    keyTimes="0;0.5;1"
                                    dur=".7s"
                                    repeatCount="indefinite"
                                ></animate>
                                <animate
                                    attributeType="XML"
                                    attributeName="y2"
                                    values="5;6;5"
                                    keyTimes="0;0.5;1"
                                    dur=".7s"
                                    repeatCount="indefinite"
                                ></animate>
                            </line>
                            <line
                                x1="0.5"
                                y1="1.67582"
                                x2="0.5"
                                y2="5.32418"
                                id="Line-1"
                            >
                                <animate
                                    attributeType="XML"
                                    attributeName="y1"
                                    values="3;0;3"
                                    keyTimes="0;0.5;1"
                                    dur=".9s"
                                    repeatCount="indefinite"
                                ></animate>
                                <animate
                                    attributeType="XML"
                                    attributeName="y2"
                                    values="4;7;4"
                                    keyTimes="0;0.5;1"
                                    dur=".9s"
                                    repeatCount="indefinite"
                                ></animate>
                            </line>
                        </g>
                    </svg>
                )}
            </button>
        </div>
    );
};

export default TextToSpeech;
