import styled from 'styled-components';

export const PhotosContainer = styled.div`
    margin: 10px auto;
    padding: 15px 0px; 
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-row-gap: 30px;
    grid-column-gap: 30px;
    width: 90%;
`;

export const Photo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;