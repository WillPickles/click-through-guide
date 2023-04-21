import { Box, Button } from "@mui/material";
import Adva from "../../app/components/Adva";
import { useState } from "react";

const nte = {
    adva : [
        {"nte" : "Adva"},
        {"questionSet" : [
            {"question" : "Question 1", "answer" : "Answer 1"},
            {"question" : "Question 2", "answer" : "Answer 2"},
            {"question" : "Question 3", "answer" : "Answer 3"},
        ]}
    ],
    alcatel: [
        {"nte" : "Alcatel"},
        {"questionSet" : [
            {"question" : "Question 1", "answer" : "Answer 1"},
            {"question" : "Question 2", "answer" : "Answer 2"},
            {"question" : "Question 3", "answer" : "Answer 3"},
        ]}
    ],
    rad: [
        {"nte" : "RAD"},
        {"questionSet" : [
            {"question" : "Question 1", "answer" : "Answer 1"},
            {"question" : "Question 2", "answer" : "Answer 2"},
            {"question" : "Question 3", "answer" : "Answer 3"},
        ]}
    ]
}


export default function ChooseNTE() {
    var nteChoice

    function handleClick(chosenNte: string) {
        switch (chosenNte) {
            case 'adva':
                nteChoice = nte.adva
                break;
            case 'alcatel':
                nteChoice = nte.alcatel
                break;
            default:
                nteChoice = nte.rad
                break;
        }
    };


    return (
        <div className="rounded-lg shadow-md border border-gray-300 bg-white p-4 mt-6">
        <h1 className="text-center text-4xl font-bold mb-4">What type of NTE is on site?</h1>

        <Box className="flex justify-between full-width">   
            <div className="grid grid-cols-3 gap-4">
                <img src={'img/adva-main.jpg'} alt="" onClick={() => handleClick('adva')} />
                
                <img src={'img/alcatel-main.jpg'} alt="" onClick={() => handleClick('alcatel')}/>

                <img src={'img/rad-main.png'} alt="" onClick={() => handleClick('rad')}/>

            </div>
        </Box>
        </div>
        
    );
}