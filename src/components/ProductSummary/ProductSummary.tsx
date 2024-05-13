import { useEffect, useState } from 'react';
import { Box } from '../Box';
import styled from 'styled-components';
import { Flex } from '../Flex';
import { ReactComponent as ArrowUp } from './icons/arrow_up.svg';
import { ReactComponent as ArrowDown } from './icons/arrow_down.svg';
import Product from './icons/product1.png';

import { tabletMF, useQuery } from '../../styles/useQuery';
import { theme } from '../../styles/theme';

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
            <OrderSummaryContainer justifyContent='space-between'>
              <Flex
                alignItems='center'
                gap='4px'
                onClick={() => setIsOverView(!isOverView)}
              >
                <StyledSpan>Order overview </StyledSpan>
                {isOverView ? <ArrowUp /> : <ArrowDown />}
              </Flex>
              <span>$299.97</span>
            </OrderSummaryContainer>
          </>
        )}
        {isOverView && (
          <>
            <Flex gap='16px'>
              <img src={Product} alt='product' />{' '}
              <Flex justifyContent='space-between' alignItems='center'>
                <StyledSpan>
                  <strong>LogoIpsum IPL</strong>
                </StyledSpan>
                <StyledSpan>$299.97</StyledSpan>
              </Flex>
            </Flex>
            <Divider />
            <Flex justifyContent='space-between'>
              <StyledSpan>Subtotal</StyledSpan>
              <StyledSpan>$299.97</StyledSpan>
            </Flex>
            <Divider />
            <Flex justifyContent='space-between'>
              <StyledSpan fontSize='18px'>
                <strong>Total</strong>
              </StyledSpan>
              <StyledSpan fontSize='18px'>
                <strong>$299.97</strong>
              </StyledSpan>
            </Flex>
            {!isTabletMF && <Divider />}
          </>
        )}
      </InnerContainer>
    </StyledContainer>
  );
};

export const StyledContainer = styled(Box)`
  background: ${theme.colors.white2};
  padding: 16px 16px 0 16px;
  width: 100%;
  border-bottom: 1px solid ${theme.colors.gray};

  @media ${tabletMF} {
    padding: 40px 40px 0 38px;
    border: none;
  }
`;

const InnerContainer = styled(Flex)`
  margin: 0 auto;
`;

const OrderSummaryContainer = styled(Flex)`
  margin-bottom: 16px;
  @media ${tabletMF} {
    margin-bottom: unset;
  }
`;
export const Divider = styled.div<{ isWithoutBottomMargin?: boolean }>`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.gray};
  margin: ${({ isWithoutBottomMargin }) =>
    isWithoutBottomMargin ? '16px 0 0 0' : '16px 0'};
  @media ${tabletMF} {
    margin: 16px 0;
  }
`;

const StyledSpan = styled.span<{ fontSize?: string }>`
  font-size: ${({ fontSize }) => fontSize || '14px'};
  color: ${theme.colors.black2};
`;
