import { useQuery } from '../../styles/useQuery';
import { Box } from '../Box';
import { Flex } from '../Flex';
import { InformationForms } from '../InformationForms/InformationForms';
import { BenefitsSection } from '../ProductSummary/elements/BenefitsSection';
import { ProductSummary } from '../ProductSummary/ProductSummary';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

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
      <BoxStyled maxWidth='500px'>
        {isTabletMF && (
          <>
            <ProductSummary />
            <GrayCover />
          </>
        )}

        <BenefitsSection />
      </BoxStyled>
    </FlexStyled>
  );
};

const FlexStyled = styled(Flex)`
  margin: 0 auto;
`;

const BoxStyled = styled(Box)`
  margin: 0 auto;
  z-index: 2;
`;

const GrayCover = styled(Box)`
  position: absolute;
  width: 100%;
  height: 120vh;
  top: 73px;
  background: ${theme.colors.white2};
  opacity: 1.1;
  z-index: -1;
`;
