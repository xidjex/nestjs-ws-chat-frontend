import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavigationWrapper = styled(motion.div)`
	display: flex;
	align-items: flex-start;
	justify-content: center;
  
  height: 100%;
  width: 100%;
  
  background-color: #FFF;
  box-shadow: 5px 0 10px rgba(0, 0, 0, .2);
  
  box-sizing: border-box;
`;

const motionOptions = {
	variants: {
		initial: { x: '-100%' },
		animate: { x: 0 },
		exit: { x: '-100%' },
	},
	transition: {
		default: { duration: 0.3 },
	},
	initial: 'initial',
	animate: 'animate',
	exit: 'exit',
};

export {
	NavigationWrapper,
	motionOptions,
};
