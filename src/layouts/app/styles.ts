import styled from 'styled-components';

interface Props {
  background: string;
}

const AppLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    
    width: 100%;
    height: 100%;
    
    background-size: cover;
    background-image: url(${({ background }: Props): string => background});
`;

const NavigationContainer = styled.div`
		position: relative;
		width: 100%;
		height: 100%;
		max-width: 300px;
		flex-grow: 1;
`;

const CurrentUserCard = styled.div`
		width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export {
	AppLayout,
	CurrentUserCard,
	NavigationContainer,
};
