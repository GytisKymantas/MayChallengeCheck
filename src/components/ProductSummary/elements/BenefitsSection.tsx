import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ServiceLogo } from '../icons/service.svg';
import { ReactComponent as RatingLogo } from '../icons/rating.svg';
import { ReactComponent as CashbackLogo } from '../icons/cashback.svg';
import { Box } from '../../Box';
import { Flex } from '../../Flex';
import { StyledContainer } from '../ProductSummary';

export const BenefitsSection = () => {
  return (
    <StyledContainer>
      <TypgoraphyStyled>
        <p>Why Choose LogoIpsum </p>
      </TypgoraphyStyled>
      <Flex alignItems='flex-start' gap='10px'>
        <Box>
          <ServiceLogo />
        </Box>
        <Box>
          <HeaderStyled>90-Day Money Back Guarantee</HeaderStyled>
          <ParagraphStyled>
            We love our products and we're confident you will too! If you're not
            in love with your LogoIpsum product, our easy return and refund
            policy is designed to make things as easy as possible for you.{' '}
          </ParagraphStyled>
        </Box>
      </Flex>
      <Flex alignItems='flex-start' gap='10px'>
        <Box>
          <RatingLogo />
        </Box>
        <Box>
          <HeaderStyled>Over 75,000+ Happy Customer</HeaderStyled>
          <ParagraphStyled>
            Everyone that tries LogoIpsum says it’s a must-have. We invest a lot
            of love and care into making our products, so you can enjoy seeing
            results when using it.
          </ParagraphStyled>
        </Box>
      </Flex>
      <Flex alignItems='flex-start' gap='10px'>
        {' '}
        <Box>
          <CashbackLogo />
        </Box>
        <Box>
          <HeaderStyled>Professional Customer Support</HeaderStyled>
          <ParagraphStyled>
            Our customer service works 24/7 for your satisfaction. Feel free to
            reach out to us anytime.
          </ParagraphStyled>
        </Box>
      </Flex>
    </StyledContainer>
  );
};

const HeaderStyled = styled.h2`
  color: #333;
  font-weight: 700;
  font-size: 12px;
`;

const ParagraphStyled = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: #5c5c5c;
`;

const TypgoraphyStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: gray;

  ::before {
    content: '';
    height: 1px;
    width: 100%;
    border-bottom: 1px solid red;
    margin-right: 10px;
  }
  ::after {
    content: '';
    height: 1px;
    width: 100%;
    border-bottom: 1px solid red;
    margin-left: 10px;
  }
`;
