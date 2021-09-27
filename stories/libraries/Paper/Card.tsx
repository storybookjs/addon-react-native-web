import React from 'react';
import {Text} from 'react-native';
import {
  Card as PaperCard,
  Avatar,
  Button,
  Title,
  Paragraph,
} from 'react-native-paper';

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

export const Card = ({}) => (
  <PaperCard>
    <PaperCard.Title
      title="Card Title"
      subtitle="Card Subtitle"
      left={LeftContent}
    />
    <PaperCard.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </PaperCard.Content>
    <PaperCard.Cover source={{uri: 'https://picsum.photos/700'}} />
    <PaperCard.Actions>
      <Button onPress={() => null}>Cancel</Button>
      <Button onPress={() => null}>Ok</Button>
    </PaperCard.Actions>
  </PaperCard>
);
