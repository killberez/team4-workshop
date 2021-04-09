import React from "react";
import styled from "styled-components";
import { string } from "prop-types";

/* Avatar
 *
 * TODO: add component description
 */

const Avatar = (props) => {
  console.log(props);
  return <StyledAvatar src={props.avaimg} />;
};

Avatar.propTypes = {
  avaimg: any,
};

export const StyledAvatar = styled.img`
  width: 48px;
  height: 48px;
`;

export default Avatar;
