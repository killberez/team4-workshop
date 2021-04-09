import React from "react";
import styled from "styled-components";
import avatarImg from "../../../../product/src/assets/avatar.png";

/* Avatar
 *
 * TODO: add component description
 */

const Avatar = (props) => {
  return <StyledAvatar src={avatarImg} />;
};

export const StyledAvatar = styled.img`
  width: 48px;
  height: 48px;
`;

export default Avatar;
