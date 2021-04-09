import { string } from "prop-types";
import React from "react";
import styled from "styled-components";

/* Thumbnail
 *
 * TODO: add component description
 */
const Thumbnail = ({src, alt, size, ...props}) => {
  return <StyledThumbnail size={size} src={src} alt={alt} />
};

export const StyledThumbnail = styled.img`
  width: ${(p) => (p.size == "s" ? "48px" : "136px")};
  height: ${(p) => (p.size == "s" ? "48px" : "136px")};
  display: block;
`;

Thumbnail.propTypes = {
  alt: string,
  src: string,
}

export default Thumbnail;