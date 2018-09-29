import { injectGlobal } from 'styled-components';

injectGlobal`
    *{
        padding: 0;
        margin: 0;
    }
    html{
        height: 100%;
    }
    body{
        height: 100%;
    }
    img{
        max-width: 100%;
    }
`;