import { ReactComponent as ServiceLogo } from '../components/ProductSummary/icons/service.svg';
import { ReactComponent as RatingLogo } from '../components/ProductSummary/icons/rating.svg';
import { ReactComponent as CashbackLogo } from '../components/ProductSummary/icons/cashback.svg';

export const BENEFITS_DATA = [
  {
    logo: <ServiceLogo />,
    header: '90-Day Money Back Guarantee',
    description:
      "We love our products and we're confident you will too! If you're not in love with your LogoIpsum product, our easy return and refund policy is designed to make things as easy as possible for you.",
  },
  {
    logo: <RatingLogo />,
    header: 'Over 75,000+ Happy Customers',
    description:
      'Everyone that tries LogoIpsum says it’s a must-have. We invest a lot of love and care into making our products, so you can enjoy seeing results when using it.',
  },
  {
    logo: <CashbackLogo />,
    header: 'Professional Customer Support',
    description:
      'Our customer service works 24/7 for your satisfaction. Feel free to reach out to us anytime.',
  },
];

export const isWindowExists = typeof window !== 'undefined';
