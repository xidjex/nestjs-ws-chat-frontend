import React, { ReactElement, FC } from 'react';

// Styles
import { NavigationWrapper, motionOptions } from './styles';

interface Props {
  children: ReactElement | ReactElement[];
}

const Navigation: FC<Props> = ({ children }: Props) => (
	<NavigationWrapper {...motionOptions}>
		{children}
	</NavigationWrapper>
);

export default Navigation;
