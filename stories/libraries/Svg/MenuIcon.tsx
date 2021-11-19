import { Svg, Path } from 'react-native-svg';

export const MenuIcon = ({ color = 'white', ...props }) => (
  <Svg {...props}>
    <Path d='M0 0h24v24H0V0z' fill='none' />
    <Path fill={color} d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
  </Svg>
);
