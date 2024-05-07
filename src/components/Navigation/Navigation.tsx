import React from 'react';
import styled from 'styled-components';
import { Flex } from '../Flex';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Cart } from './cart.svg';

export const Navigation = () => {
  return (
    <ContainerStyled>
      <FlexStyled justifyContent='space-between' maxWidth='1040px'>
        <Logo />
        <Cart>cart</Cart>
      </FlexStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  padding: 16px;
  border-bottom: 1px solid var(--cc-shopify-border-dividers, #e0e0e0);
`;

const FlexStyled = styled(Flex)`
  margin: 0 auto;
`;
