import {useState} from 'react';
import ToggleButton from './ToggleButton';
import Links from './Links';
import {motion} from 'framer-motion'
import '../css/Sidebar.css';
export default function Sidebar() {
   const [open,setOpen] = useState(false);

   const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition:{
            type:"spring",
            stiffness:20,
        }
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition:{
            delay:0.5,
            type:"spring",
            stiffness:400,
            damping:40,
        },
    },
   };
    return(
        <motion.div className="sidebar" animate={open ? 'open' : 'closed'}>
        <motion.div className="background" variants={variants}>
          <Links /> {/* Correct usage of Links component */}
        </motion.div>
        <ToggleButton setOpen={setOpen} /> {/* Corrected typo */}
      </motion.div>
    );
  }