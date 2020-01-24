import { ReactElement } from 'react';
import styled from 'styled-components';

// Background image
import background from '../../assets/background.jpg';

interface Props {
    children: ReactElement;
}

const AuthLayout = styled.div<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100%;
    
    background-size: cover;
    background-image: url(${background});
`;

export default AuthLayout;
