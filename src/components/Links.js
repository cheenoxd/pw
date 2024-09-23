import React from "react"
import { motion } from "framer-motion";
export default function Links() {
    const items = [
        "Home",
        "About",
        "Projects",
        "Resume",
        "Contact"
    ]
    const variants = {
        open: {
          transition: {
            staggerChildren: 0.1, // Delay between each child animation when opening
          },
        },
        closed: {
          transition: {
            staggerChildren: 0.05, // Delay between each child animation when closing
            staggerDirection: -1, // Animate the children in reverse order when closing
          },
        },
      };
      
      const itemVariants = {
        open: { 
          opacity: 1, // Fully visible when o   pen
          y: 0, // No vertical translation
          
        },
        closed: { 
          opacity: 0, // Hidden when closed
          y: 20, // Slide down effect when closing
          
        },
      };
      
    return (
        <motion.div className="links">
          {items.map((item) => (
            <a href={`#${item}`} key={item}>
              {item}
            </a>
          ))}
        </motion.div>
      );
    };
    
