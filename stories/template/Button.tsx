import { StyleProp, ViewStyle, TouchableOpacity, Text } from 'react-native';

import styles from './button.styles';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const textSizeStyles = {
  small: styles.smallText,
  medium: styles.mediumText,
  large: styles.largeText,
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  style,
  onPress,
}: ButtonProps) => {
  const modeStyle = primary ? styles.primary : styles.secondary;
  const textModeStyle = primary ? styles.primaryText : styles.secondaryText;

  const sizeStyle = styles[size];
  const textSizeStyle = textSizeStyles[size];
  return (
    <TouchableOpacity
      accessibilityRole='button'
      activeOpacity={0.6}
      style={[
        styles.button,
        modeStyle,
        sizeStyle,
        style,
        !!backgroundColor && { backgroundColor },
      ]}
      onPress={onPress}
    >
      <Text style={[textModeStyle, textSizeStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};
