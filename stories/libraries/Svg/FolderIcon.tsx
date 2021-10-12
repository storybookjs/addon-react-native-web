import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface FolderProps {
  size: number;
  color: string;
}

export const FolderIcon = ({ size, color = 'white' }: FolderProps) => (
  <Svg height={size} width={size}>
    <Path d='M0 0h24v24H0V0z' fill='none' />
    <Path
      fill={color}
      d='M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z'
    />
  </Svg>
);
