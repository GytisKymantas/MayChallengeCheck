export const colors = {
  black: '#000000',
  black2:'#333333',
  primary: '#212529',
  white: '#FFFFFF',
  white2:'f5f5f5',
  error: '#AF0606',
  gray: '#e0e0e0',
  gray2:'#fafafa',
  gray3:'#f0f5ff',
  gray4:'#828282',
  blue:'#3362ab',
  red:'red',
  green:'#009900',
  green2:'#007700',
  green3:'#00cc00',
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
