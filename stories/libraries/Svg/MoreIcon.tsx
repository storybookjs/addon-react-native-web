import Svg, { Path } from 'react-native-svg';

export const MoreIcon = ({ color = 'white', ...props }) => (
  <Svg {...props}>
    <Path d='M0 0h24v24H0V0z' fill='none' />
    <Path
      fill={color}
      d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
    />
  </Svg>
);
