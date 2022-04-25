import { Box, HStack, Icon, IconButton, StatusBar, Text } from 'native-base';

import { FavoriteIcon } from '../Svg/FavoriteIcon';
import { MenuIcon } from '../Svg/MenuIcon';
import { MoreIcon } from '../Svg/MoreIcon';
import { SearchIcon } from '../Svg/SearchIcon';

export function AppBar() {
  return (
    <>
      <StatusBar bg='#3700B3' barStyle='light-content' />
      <Box safeAreaTop bg='#6200ee' />
      <HStack
        bg='#6200ee'
        px='1'
        py='3'
        justifyContent='space-between'
        alignItems='center'
        w='100%'
      >
        <HStack alignItems='center'>
          <IconButton icon={<Icon as={MenuIcon} size='lg' color='white' />} />

          <Text color='white' fontSize='20' fontWeight='bold'>
            Home
          </Text>
        </HStack>
        <HStack space={2}>
          <IconButton
            icon={<Icon as={FavoriteIcon} size='lg' color='white' />}
          />
          <IconButton icon={<Icon as={SearchIcon} color='white' size='lg' />} />
          <IconButton icon={<Icon as={MoreIcon} size='lg' color='white' />} />
        </HStack>
      </HStack>
    </>
  );
}
