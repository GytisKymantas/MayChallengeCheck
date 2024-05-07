import React, { useEffect, useState } from 'react';
import { Box } from '../Box';
import styled from 'styled-components';
import { Flex } from '../Flex';
import { BenefitsSection } from './elements/BenefitsSection';
import { ReactComponent as ArrowUp } from './icons/arrow_up.svg';
import { ReactComponent as ArrowDown } from './icons/arrow_down.svg';
import { tabletMF, useQuery } from '../../styles/useQuery';

export const ProductSummary = () => {
  const [isOverView, setIsOverView] = useState(false);
  const { isTabletMF } = useQuery();

  useEffect(() => {
    if (isTabletMF) {
      setIsOverView(true);
    }
  }, [isTabletMF]);

  return (
    <StyledContainer>
      <InnerContainer width='405px' flexDirection='column'>
        {!isTabletMF && (
          <>
            <Flex justifyContent='space-between'>
              <Flex
                alignItems='center'
                gap='4px'
                onClick={() => setIsOverView(!isOverView)}
              >
                <StyledSpan>Order overview </StyledSpan>
                {isOverView ? <ArrowDown /> : <ArrowUp />}
              </Flex>
              <span>$299.97</span>
            </Flex>
            <Divider />
          </>
        )}
        {isOverView && (
          <>
            <Flex gap='16px'>
              <img src='./icons/product1.png' alt='product' />{' '}
              <Flex justifyContent='space-between'>
                <span>LogoIpsum IPL</span>
                <span>$299.97</span>
              </Flex>
            </Flex>
            <Divider />
            <Flex justifyContent='space-between'>
              <span>Subtotal</span>
              <span>$299.97</span>
            </Flex>
            <Divider />
            <Flex justifyContent='space-between'>
              <span>
                <strong>Total</strong>
              </span>
              <span>
                <strong>$299.97</strong>
              </span>
            </Flex>
          </>
        )}

        {/* <BenefitsSection /> */}
      </InnerContainer>
    </StyledContainer>
  );
};

export const StyledContainer = styled(Box)`
  background: #f5f5f5;
  padding: 16px;

  @media ${tabletMF} {
    padding: 40px;
  }
`;

const InnerContainer = styled(Flex)``;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  margin-top: 16px;
  @media ${tabletMF} {
    margin: 25px 0;
  }
`;

const StyledSpan = styled.span`
  font-size: 14px;
  color: #333333;
`;
