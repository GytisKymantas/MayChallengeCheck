import styled from 'styled-components';
import {
  alignSelf,
  AlignSelfProps,
  border,
  BorderProps,
  BoxShadowProps,
  color,
  ColorProps,
  compose,
  flex,
  FlexProps,
  gridArea,
  GridAreaProps,
  gridColumn,
  GridColumnProps,
  gridRow,
  GridRowProps,
  justifySelf,
  JustifySelfProps,
  layout,
  LayoutProps,
  order,
  OrderProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  zIndex,
  ZIndexProps,
} from 'styled-system';
import { Theme } from '../styles/theme';

const boxProps = compose(
  space,
  color,
  position,
  zIndex,
  layout,
  justifySelf,
  alignSelf,
  gridColumn,
  gridRow,
  gridArea,
  flex,
  border,
  shadow,
  textAlign,
  order
);

export interface BoxProps<T extends Theme>
  extends BorderProps<T>,
    ColorProps<T>,
    PositionProps<T>,
    ZIndexProps<T>,
    GridRowProps<T>,
    BoxShadowProps<T>,
    GridColumnProps<T>,
    GridAreaProps<T>,
    JustifySelfProps<T>,
    AlignSelfProps<T>,
    FlexProps<T>,
    LayoutProps<T>,
    ShadowProps<T>,
    TextAlignProps<T>,
    SpaceProps<T>,
    OrderProps<T>,
    Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  as?: React.ElementType;
  cursor?: string;
}

export const Box = styled.div<BoxProps<Theme>>`
  cursor: ${({ cursor }) => cursor ?? 'auto'};
  && {
    ${boxProps};
  }
`;
