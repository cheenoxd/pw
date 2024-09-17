import React from "react";
import 'ldrs/helix';
import { helix } from 'ldrs'
helix.register()


export default function About() {
    return (
        <div>
             <l-helix size="45" speed="2.5" color="red"></l-helix>
        </div>

    )
}

