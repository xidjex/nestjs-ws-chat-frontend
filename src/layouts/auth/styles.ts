import styled from 'styled-components';

// Styles
import { NavigationContainer as AppNavigationContainer } from '../app/styles';

interface Props {
  background: string;
}

const AuthLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    
    width: 100%;
    height: 100%;
    
    background-size: cover;
    background-image: url(${({ background }: Props): string => background});
`;

const NavigationContainer = styled(AppNavigationContainer)`
		max-width: 50%;
`;

export {
	AuthLayout,
	NavigationContainer,
};
