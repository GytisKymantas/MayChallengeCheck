import React from 'react';
import { useQuery } from '../../styles/useQuery';
import { Box } from '../Box';
import { Flex } from '../Flex';
import { InformationForms } from '../InformationForms/InformationForms';
import { BenefitsSection } from '../ProductSummary/elements/BenefitsSection';
import { ProductSummary } from '../ProductSummary/ProductSummary';
import styled from 'styled-components';

export const Main = () => {
  const { isTabletMF } = useQuery();

  return (
    <FlexStyled
      justifyContent='center'
      flexDirection={isTabletMF ? 'row' : 'column'}
      maxWidth='1040px'
    >
      {!isTabletMF && <ProductSummary />}
      <InformationForms />
      <Box maxWidth='500px'>
        {isTabletMF && <ProductSummary />}
        <BenefitsSection />
      </Box>
    </FlexStyled>
  );
};

const FlexStyled = styled(Flex)`
  margin: 0 auto;
`;
