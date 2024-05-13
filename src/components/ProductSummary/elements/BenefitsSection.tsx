import styled from 'styled-components';

import { Box } from '../../Box';
import { Flex } from '../../Flex';
import { BENEFITS_DATA } from '../../../utils/constants';
import { tabletMF } from '../../../styles/useQuery';
import { theme } from '../../../styles/theme';

export const BenefitsSection = () => {
  return (
    <StyledContainer>
      <TypographyStyled>
        <p>Why Choose LogoIpsum</p>
      </TypographyStyled>
      <Flex flexDirection='column' gap='16px'>
        {BENEFITS_DATA.map(({ logo, header, description }, index) => (
          <Flex alignItems='flex-start' gap='10px' key={index}>
            <Box>{logo}</Box>
            <Flex flexDirection='column' gap='8px'>
              <HeaderStyled>{header}</HeaderStyled>
              <ParagraphStyled>{description}</ParagraphStyled>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </StyledContainer>
  );
};

const StyledContainer = styled(Box)`
  background: ${theme.colors.white2};
  padding: 16px 16px 64px 16px;
  margin: 0 auto;
  width: 375px;
  @media ${tabletMF} {
    padding: 40px 40px 40px 38px;
    width: 100%;
    max-width: 500px;
  }
`;

const HeaderStyled = styled.h2`
  color: ${theme.colors.black2};
  font-weight: 500;
  font-size: 12px;
`;

const ParagraphStyled = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: ${theme.colors.black3};
`;

const TypographyStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${theme.colors.black2};
  margin-bottom: 16px;

  p {
    width: 340px;

    @media ${tabletMF} {
      width: 530px;
    }
  }
  &::before {
    content: '';
    height: 1px;
    width: 50%;
    border-bottom: 1px solid ${theme.colors.gray};
    margin-right: 16px;

    @media ${tabletMF} {
      width: 100%;
      margin-right: 10px;
    }
  }
  &::after {
    content: '';
    height: 1px;
    width: 54%;
    border-bottom: 1px solid ${theme.colors.gray};
    margin-left: 16px;
    @media ${tabletMF} {
      width: 100%;
      margin-left: 10px;
    }
  }
`;
