import { Button } from './Button';
import styles from './header.styles';
import { H1, Header as HeaderView } from '@expo/html-elements';
import { View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

interface HeaderProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <HeaderView>
    <View style={styles.wrapper}>
      <View style={styles.logoContainer}>
        <Svg width='32' height='32' viewBox='0 0 32 32'>
          <G fill='none' fillRule='evenodd'>
            <Path
              d='M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z'
              fill='#FFF'
            />
            <Path
              d='M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z'
              fill='#555AB9'
            />
            <Path
              d='M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z'
              fill='#91BAF8'
            />
          </G>
        </Svg>
        <H1 style={styles.h1}>Acme</H1>
      </View>
      <View style={styles.buttonContainer}>
        {user ? (
          <Button
            style={styles.button}
            size='small'
            onPress={onLogout}
            label='Log out'
          />
        ) : (
          <>
            <Button
              style={styles.button}
              size='small'
              onPress={onLogin}
              label='Log in'
            />
            <Button
              style={styles.button}
              primary
              size='small'
              onPress={onCreateAccount}
              label='Sign up'
            />
          </>
        )}
      </View>
    </View>
  </HeaderView>
);
