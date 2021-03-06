/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */
import React from "react";
import styled from "styled-components";
import { Button, Icon, Avatar, Thumbnail } from "design-system";

import avatarImg from "../assets/avatar.png";
import item1Img from "../assets/item1.png";
import item2Img from "../assets/item2.png";
import item3Img from "../assets/item3.png";
import item4Img from "../assets/item4.png";

const StyledDiv1 = styled.div`
  padding: 64px 40px;
`;

const Styledh1 = styled.h1`
  margin-bottom: 40px;
  letter-spacing: -1.6px;
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const StyledDiv3 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;
const StyledDiv4 = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDiv5 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 24px;
`;

const StyledDiv6 = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledBorder = styled.div`
  width: 1px;
  height: 16px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0 8px;
`;

const StyledImg = styled.img`
  max-width: 100%;
  margin-bottom: 16px;
`;

const StyledButton = styled(Button)`
  padding: 0;
  border: 0;
  margin: 0 8px;
  &:last-child {
    margin-right: 0;
  }
`;

const StyledP = styled.p`
  color: #f15223;
  font-weight: 700;
  margin-top: 8px;
`;

const Home = () => {
  return (
    <div>
      <StyledDiv1>
        <StyledDiv2>
          <Avatar src={avatarImg}/>
          <Button isOutline>
            <Icon name="menu" />
          </Button>
        </StyledDiv2>
        <Styledh1>Store</Styledh1>

        <StyledDiv3>
          <h4>All Product</h4>

          <StyledDiv4>
            <StyledButton color="transparent">
              <Icon name="viewItem" width={24} height={16} />
            </StyledButton>
            <StyledButton color="transparent">
              <Icon name="viewGrid" width={24} height={16} />
            </StyledButton>
            <StyledBorder />
            <StyledButton color="transparent">
              <Icon name="filter" width={24} height={16} />
            </StyledButton>
          </StyledDiv4>
        </StyledDiv3>
        <StyledDiv5>
<<<<<<< HEAD
          <ProductItem>
            <StyledImg src={item1Img} alt="" />
            <h4>Nike Air Force 1 '07</h4>
            <StyledP>???95.00</StyledP>
          </ProductItem>
          <StyledDiv6>
            <StyledImg src={item2Img} alt="" />
=======
          <StyledDiv6>
            <Thumbnail src={item1Img} alt="" />
            <h4>Nike Air Force 1 '07</h4>
            <StyledP>???95.00</StyledP>
          </StyledDiv6>
          <StyledDiv6>
            <Thumbnail src={item2Img} alt="" /> 
>>>>>>> fb3c46361c5bc38dd68a9ae0b82a056e3199569e
            <h4>Nike Air Shadow Force</h4>
            <StyledP>???105.00</StyledP>
          </StyledDiv6>
          <StyledDiv6>
<<<<<<< HEAD
            <StyledImg src={item3Img} alt="" />
=======
            <Thumbnail src={item3Img} alt="" />
>>>>>>> fb3c46361c5bc38dd68a9ae0b82a056e3199569e
            <h4>Nike Air Force 1 '07</h4>
            <StyledP>???95.00</StyledP>
          </StyledDiv6>
          <StyledDiv6>
<<<<<<< HEAD
            <StyledImg src={item4Img} alt="" />
=======
            <Thumbnail src={item4Img} alt="" />
>>>>>>> fb3c46361c5bc38dd68a9ae0b82a056e3199569e
            <h4>Nike Air Force 1 '07</h4>
            <StyledP>???95.00</StyledP>
          </StyledDiv6>
        </StyledDiv5>
      </StyledDiv1>
    </div>
  );
};

export default Home;
