import React, { FC } from 'react';

// Background image
import background from '../../assets/background.jpg';
// Components
import Navigation from '../../components/navigation/Navigation';

// Navigation
import {
	AuthLayout as AuthLayoutWrapper,
	SidebarContainer,
} from './styles';

import { LayoutProps } from '../types';

const AuthLayout: FC<LayoutProps> = ({ children }: LayoutProps) => (
	<AuthLayoutWrapper background={background}>
		<SidebarContainer>
			<Navigation>
				{children}
			</Navigation>
		</SidebarContainer>
		<div />
	</AuthLayoutWrapper>
);

export default AuthLayout;
