import { useMediaQuery } from 'react-responsive';

export const fold = '(max-width: 18.75rem)'; // 300px
export const xsMobile = '(max-width: 20rem)'; // 320px
export const mdMobile = '(max-width: 23.75rem)'; // 380px
export const mobile = '(max-width: 26.5625rem)'; // 425px

// mobile-first approach
export const mdTabletMF = '(min-width: 38.125rem)'; // 610px
export const tabletMF = '(min-width: 58.5rem)'; // 936px
export const smDesktopMF = '(min-width: 70.313rem)'; // 1125px
export const desktopMF = '(min-width: 87.5rem)'; // 1400px

export const useQuery = () => ({
  isFold: useMediaQuery({ query: fold }),
  isXsMobile: useMediaQuery({ query: xsMobile }),
  isMdMobile: useMediaQuery({ query: mdMobile }),
  isMobile: useMediaQuery({ query: mobile }),
  isMdTabletMF: useMediaQuery({ query: mdTabletMF }),
  isTabletMF: useMediaQuery({ query: tabletMF }),
  isSmDesktopMF: useMediaQuery({ query: smDesktopMF }),
  isDesktopMF: useMediaQuery({ query: desktopMF }),
  isLandscape: useMediaQuery({ query: '(orientation: landscape)' }),
});
