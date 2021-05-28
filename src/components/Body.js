import React from 'react';
import './Body.css';

import {agents} from "../data";

// import ScrollContainer from 'react-indiana-drag-scroll';
import { useDispatch, useSelector } from 'react-redux';

import { motion } from "framer-motion";

import {
    changeId, 
    selectId, 
    selectImage, 
    selectBiography, 
    selectRole,
    selectRoleImage
} from '../features/userSlice';

function Body() {
    const dispatch = useDispatch();

    const id = useSelector(selectId);
    const image = useSelector(selectImage);
    const role = useSelector(selectRole);
    const roleImage = useSelector(selectRoleImage);
    const biography = useSelector(selectBiography);

    return (
        <div className="body">
            <video 
                autoPlay 
                loop 
                muted
                style={{
                    position: "absolute",
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    zIndex: "-1"
                }}
            >
                <source src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29d7c4f6bc077e9e/5eb26f54402b8b4d13a56656/agent-background-generic.mp4" type='video/mp4' />
            </video>
            
            <div className="bodyLeft">
                {agents.map((agent) => (
                    <div 
                        className={`bodyAgent ${id == agent.id && "bodyAgent--active "}`}
                        onClick={() => dispatch(changeId(agent))}
                    >
                        <p>{agent.id}</p>
                        <h1>{agent.name}</h1>
                    </div>
                ))}
            </div>
            
            <div className="bodyMiddle">
                <motion.div
                    className="container"
                    initial={{ scale: 0 }}
                    animate={{ rotate: 0, scale: 0.72 }}
                    transition={{ duration: 0.5 }}
                >
                    <img 
                        src={image}
                        alt="media"
                    />
                </motion.div>
                
            </div>

            <div className="bodyRight">
                <h2>// ROLE</h2>
                <div className="role">
                    <h1>{role}</h1>
                    <img 
                        src={roleImage}
                        alt=""
                    />
                </div>
                <h2>// biography</h2>
                <p>
                    {biography}
                </p>
            </div>
        </div>
    )
}

export default Body
