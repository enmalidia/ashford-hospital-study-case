import styled from "styled-components"

export const ContentWrapper = styled.div.attrs({
    className: "flex flex-wrap"
})
``;
export const Card = styled.div
`
    display: flex;
    flex-direction: column;    
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    padding: 48px 24px;
    height: 100%;
    max-width: 330px;
    background: #ffffff;
    border: 1px solid #CBD4E1;    
    box-sizing: border-box;
    box-shadow: 0px 16px 40px rgb(112 144 176 / 35%);
    border-radius: 6px;
`;