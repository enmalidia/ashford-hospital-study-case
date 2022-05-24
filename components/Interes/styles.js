import styled from "styled-components"

export const Blocks = styled.div.attrs({
    className: "grid grid-cols-2 gap-x-12 gap-y-8"
})
``;
export const MemberContainer = styled.div.attrs({
    className: "mx-auto w-full py-12 px-28 flex flex-row"
})
`
background: linear-gradient(180deg, #002554 50%, #ffffff 50%);
`;

export const MemberOverlay = styled.div.attrs({
    className: ""
})
`
    background: linear-gradient( 180deg, rgba(0, 0, 0, 0) -20.28%, #000000 112.05% );    
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    border-radius: 8px;
    opacity: 0.5;
    /* -webkit-transition: ease opacity 0.6s;
    transition: ease opacity 0.6s; */
`;
