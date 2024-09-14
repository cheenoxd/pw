import { motion } from "framer-motion";
import React from 'react';


export default function Home () {
const text = "Zesan Rahim".split(" ");

  return (
    <div className="App">
      {text.map((el, i) => (
        <motion.span
          key = {i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 10,
            delay: i / 2
          }}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
}

