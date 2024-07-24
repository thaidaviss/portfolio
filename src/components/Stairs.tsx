import { motion, Variants } from 'framer-motion';

const stairAnimation: Variants = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
};
const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};
function Stairs() {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial='initial'
          animate='animate'
          exit={'exit'}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
            delay: reverseIndex(index) * 0.1,
          }} className='h-full w-full bg-primary relative '></motion.div>
      ))}
    </>
  );
}

export default Stairs;
