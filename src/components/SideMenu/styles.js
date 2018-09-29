import styled from 'styled-components';


export const SideMenuContainer = styled.div`
    height: 100%;
    width: 0px;
    background-color: #f45;
    transition: width 100ms linear;

    ${props => props.open ? 

    'width: 30%;' +
    'transition : width 100ms linear'
     : null }
`;