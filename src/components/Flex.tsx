import styled from 'styled-components';
import {
  border,
  BorderProps,
  compose,
  flexbox,
  FlexboxProps,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';
import { Theme } from '../styles/theme';

const flexProps = compose(flexbox, space, border);

interface Props<T extends Theme>
  extends FlexboxProps<T>,
    SpaceProps<T>,
    LayoutProps<T>,
    BorderProps<T> {
  cursor?: string;
  gap?: string;
  width?: string;
  maxWidth?: string;
}

export const Flex = styled.div<Props<Theme>>`
  display: flex;
  width: ${({ width }) => width || '100%'};
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  cursor: ${({ cursor }) => cursor ?? 'auto'};
  gap: ${({ gap }) => gap};
  && {
    ${flexProps};
  }
`;
