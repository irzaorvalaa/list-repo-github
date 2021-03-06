import styled from "styled-components";

const background = "hsla(50, 33%, 25%, .75);";
const infoColor = "#eeeeee";

export const UserInfo = styled.div`
  grid-area: user;
  margin: 10px;
  padding: 15px;
  background-color: ${background};
  border-radius: 5px;
  height: fit-content;
  width: fit-content;

  .icons {
    float: right;
    margin: 3px 5px;
  }

  a {
    color: ${infoColor};
  }
`;

export const Avatar = styled.img`
  height: 300px;
  width: 300px;
`;

export const UserName = styled.h3`
  margin: 0;
  color: #fff;
`;

export const Info = styled.p`
  color: ${infoColor};
`;
