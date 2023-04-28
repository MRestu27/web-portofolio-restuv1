import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        y: { stiffness: 1000, velocity: -100 },
      },
    }),
  };
  return (
    <header className="flex items-center justify-between p-5 max-w-[100rem] mx-auto">
      <div>
        <img className="w-44 object-contain cursor-pointer" src="https://links.papareact.com/yvf" alt="" />
      </div>
      <motion.div className="flex space-x-5 items-center">
        <ul className="flex space-x-5">
          <motion.li variants={variants} initial="hidden" custom={0} animate="visible">
            <a href="#hero">Home</a>
          </motion.li>
          <motion.li variants={variants} initial="hidden" custom={1} animate="visible">
            <a href="">About</a>
          </motion.li>
          <motion.li variants={variants} initial="hidden" custom={2} animate="visible">
            <a href="">Project</a>
          </motion.li>
          <motion.li variants={variants} initial="hidden" custom={3} animate="visible">
            <a href="">Contact</a>
          </motion.li>
        </ul>
        {/* <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Project</Link>
        <Link href="/">Contact</Link> */}
        <motion.button className="bg-secondary px-10 py-1 rounded-lg" variants={variants} initial="hidden" custom={4} animate="visible">
          CV
        </motion.button>
      </motion.div>
    </header>
  );
}

export default Header;
