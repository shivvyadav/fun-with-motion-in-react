import {useEffect, useRef} from "react";
import {motion, useInView, useAnimation} from "framer-motion";

const variants = {
  hidden: {opacity: 0, scale: 0.8},
  visible: {opacity: 1, scale: 1},
};
const List = ({children}: {children: React.ReactNode}) => {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true});
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [inView, animation]);
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial='hidden'
      animate={animation}
      transition={{duration: 0.8, ease: "easeOut"}}
      className='flex justify-center items-center min-h-screen bg-gray-100 p-4 flex-col max-w-3xl mx-auto gap-10 py-10'>
      {children}
    </motion.div>
  );
};

export default List;
