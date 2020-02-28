import React, { FC } from 'react';

// Background image
import background from '../../assets/background.jpg';

// Components
import Navigation from '../../components/navigation/Navigation';

// Navigation
import {
	AppLayout as AppLayoutWrapper,
	Content,
} from './styles';

import { LayoutProps } from '../types';

const AppLayout: FC<LayoutProps> = ({ children }: LayoutProps) => (
	<AppLayoutWrapper background={background}>
		<Navigation>
			<div>App</div>
		</Navigation>
		<Content>
			{children}
		</Content>
	</AppLayoutWrapper>
);

export default AppLayout;
