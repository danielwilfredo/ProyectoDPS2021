import { Dimensions, Platform } from 'react-native';

const WIDTH_DESIGN = 375;
const HEIGHT_DESIGN = 812;

export const { width, height } = Dimensions.get(Platform.OS === 'ios' ? 'screen' : 'window');

export const resize = (size, type = 'width') => {
  const currentSize = type === 'width' ? WIDTH_DESIGN : HEIGHT_DESIGN;
  const deviceSize = type === 'width' ? width : height;
  const percent = (size * 100) / currentSize;
  const percentJS = percent / 100;

  return deviceSize * percentJS;
};