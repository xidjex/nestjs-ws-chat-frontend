import styled from 'styled-components';
import { SidebarContainer as AppSidebarContainer } from '../app/styles';

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

const SidebarContainer = styled(AppSidebarContainer)`
		max-width: 50%;
		> div {
			max-width: 100%;
		}
`;

const Content = styled.div``;

export {
	AuthLayout,
	Content,
	SidebarContainer,
};
