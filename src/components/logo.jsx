import { ArrowDown, MoveDownIcon } from "lucide-react";
import { motion } from "motion/react";
import { logo } from "../assets";
import Flyers from "./flyers";

const Logo = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <section className="flex h-screen w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-y-3">
          <p className="text-center text-xl">
            Click the logo to <br /> view our page
          </p>
          <MoveDownIcon />

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/leslie_tours1?igsh=MWpsb3kxZzlzaGFpZw=="
            className="mt-5"
          >
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              src={logo}
              className="w-full max-w-[150px] md:max-w-[220px] rounded-lg"
            />
          </a>
        </div>
        <p className="flex flex-col items-center justify-center gap-2 mt-24">
          <span className="text-center text-2xl font-[cursive]">Our Tours</span>
          <a
            href="#flyers"
            className="bg-white rounded-full p-1 cursor-pointer active:scale-90 transition-all duration-300"
          >
            <ArrowDown color="black" size={18} />
          </a>
        </p>
      </section>
      <Flyers />
    </div>
  );
};

export default Logo;
