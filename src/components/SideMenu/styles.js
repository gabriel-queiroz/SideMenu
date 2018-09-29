import styled from 'styled-components';


export const SideMenuContainer = styled.div`
    height: 100%;
    width: 0px;
    background-color: #f45;
    transition: width 100ms linear;
    position: fixed;
    ${props => props.open ? 

    'width: 300px;' +
    'transition : width 100ms linear'
     : null }
`;