export const colors = {
  black: '#000000',
  primary: '#212529',
  white: '#FFFFFF',
  error: '#AF0606',
  systemError: '#F23C3C',
  transparent: 'transparent',
};
export const borders = {
  none: 'none',
  thin: '0.5px solid',
  thin1WithColor: '1px solid #2F5854',
  thin1: '1px solid',
  thin2: '2px solid',
  thin4_5: '4.5px solid',
};

export const theme = {
  colors,
  borders,
};

export type Theme = typeof theme;
