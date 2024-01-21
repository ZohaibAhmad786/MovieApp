import {mvs} from './metrices';
type fontWeight =
  | 'REGULAR'
  | 'LIGHT'
  | 'SEMIBOLD'
  | 'MEDIUM'
  | 'BOLD'
  | 'EXTRABOLD';

export const fontFamily: Record<fontWeight, string> = {
  EXTRABOLD: 'Poppins-ExtraBold',
  BOLD: 'Poppins-Bold',
  MEDIUM: 'Poppins-Medium',
  SEMIBOLD: 'Poppins-SemiBold',
  LIGHT: 'Poppins-Light',
  REGULAR: 'Poppins-Regular',
};

export const fontSize = {
  FONT_44: mvs(44),
  FONT_42: mvs(42),
  FONT_40: mvs(40),
  FONT_38: mvs(38),
  FONT_36: mvs(36),
  FONT_34: mvs(34),
  FONT_32: mvs(32),
  FONT_30: mvs(30),
  FONT_28: mvs(28),
  FONT_26: mvs(26),
  FONT_24: mvs(24),
  FONT_22: mvs(22),
  FONT_20: mvs(20),
  FONT_18: mvs(18),
  FONT_16: mvs(16),
  FONT_14: mvs(14),
  FONT_12: mvs(13),
  FONT_10: mvs(12),
  FONT_8: mvs(9),
};
