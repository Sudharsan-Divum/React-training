import React from "react";
import { observable, observe, makeObservable, action } from "mobx";
import { observer } from "mobx-react";

interface sectionProps {
    character : string;
    location: string;   
    episode: string;

}


class apiCallingImpl{
    sections :sectionProps[] = [];

        constructor(){
            makeObservable(this,{
               sections:observable    

            })
        }

    

}

export const ApiCalling = new apiCallingImpl();