import styled from 'styled-components';
import { Flex } from '../Flex';
import { ReactComponent as Logo } from './icons/logo.svg';
import { ReactComponent as Cart } from './icons/cart.svg';
import { theme } from '../../styles/theme';

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
  border-bottom: 1px solid ${theme.colors.gray};
`;

const FlexStyled = styled(Flex)`
  margin: 0 auto;
`;
