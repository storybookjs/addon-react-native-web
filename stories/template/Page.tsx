import {
  A,
  Article,
  H2,
  LI,
  P,
  Section,
  Strong,
  UL,
} from '@expo/html-elements';

import { View, Text } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

import { Header } from './Header';
import styles from './page.styles';

interface PageProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Page = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: PageProps) => (
  <Article>
    <Header
      user={user}
      onLogin={onLogin}
      onLogout={onLogout}
      onCreateAccount={onCreateAccount}
    />

    <Section style={styles.section}>
      <H2>Pages in Storybook</H2>
      <P style={styles.p}>
        We recommend building UIs with a{' '}
        <A
          style={styles.a}
          accessibilityComponentType='link'
          accessibilityTraits={{}}
          href='https://componentdriven.org'
          target='_blank'
        >
          <Strong>component-driven</Strong>
        </A>{' '}
        process starting with atomic components and ending with pages.
      </P>
      <P style={styles.p}>
        Render pages with mock data. This makes it easy to build and review page
        states without needing to navigate to them in your app. Here are some
        handy patterns for managing page data in Storybook:
      </P>
      <UL>
        <LI>
          Use a higher-level connected component. Storybook helps you compose
          such data from the "args" of child component stories
        </LI>
        <LI>
          Assemble data in the page component from your services. You can mock
          these services out using Storybook.
        </LI>
      </UL>
      <P style={styles.p}>
        Get a guided tutorial on component-driven development at{' '}
        <A
          style={styles.a}
          accessibilityComponentType='link'
          accessibilityTraits={{}}
          href='https://storybook.js.org/tutorials/'
          target='_blank'
        >
          Storybook tutorials
        </A>
        . Read more in the{' '}
        <A
          style={styles.a}
          accessibilityComponentType='link'
          accessibilityTraits={{}}
          href='https://storybook.js.org/docs'
          target='_blank'
        >
          docs
        </A>
        .
      </P>
      <View style={styles.tipWrapper}>
        <View style={styles.tip}>
          <Text style={styles.tipText}>Tip </Text>
        </View>
        <Text>Adjust the width of the canvas with the </Text>
        <Svg width='10' height='10' viewBox='0 0 12 12'>
          <G fill='none' fillRule='evenodd'>
            <Path
              d='M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z'
              id='a'
              fill='#999'
            />
          </G>
        </Svg>
        <Text>Viewports addon in the toolbar</Text>
      </View>
    </Section>
  </Article>
);
