import styled from "styled-components"

export const MarqueeBanner = styled.div.attrs({
    className: ""
})
`
.marquee {
    width: 100%;
    line-height: 50px;
    background-color: #3EB1C8 !important;	
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    z-index:2;

    p{
    display: inline-block;
    padding-left: calc(100% - 340px);
    animation: marquee 60s linear infinite;
    color: white;
    }
}
@keyframes marquee {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
}    
`;