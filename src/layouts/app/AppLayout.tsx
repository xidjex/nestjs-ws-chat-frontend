import React, { FC } from 'react';

// Background image
import background from '../../assets/background.jpg';

// Components
import { Content, Navigation } from '../../components';

// Styles
import {
	AppLayout as AppLayoutWrapper,
	NavigationContainer,
} from './styles';

// Types
import { LayoutProps } from '../types';

const AppLayout: FC<LayoutProps> = ({ children }: LayoutProps) => (
	<AppLayoutWrapper background={background}>
		<NavigationContainer>
			<Navigation>
				<div>App</div>
			</Navigation>
		</NavigationContainer>
		<Content>
			{children}
		</Content>
	</AppLayoutWrapper>
);

export default AppLayout;
