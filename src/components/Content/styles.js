import styled from 'styled-components';

export const ContentContainer = styled.main`
   width: ${ props => props.open ? ' calc(100% - 300px) ':' 100% '};
   float: right;
   margin: 0 auto;
   background-color: #fff;
   transition: all 200ms linear;
   margin-left: ${ props => props.open ? ' 300px ':' 0px '};
`