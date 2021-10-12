import { Box, HStack, Icon, IconButton, StatusBar, Text } from 'native-base';
import React from 'react';
import { FavoriteIcon } from '../Svg/FavoriteIcon';
import { MenuIcon } from '../Svg/MenuIcon';
import { MoreIcon } from '../Svg/MoreIcon';
import { SearchIcon } from '../Svg/SearchIcon';

export function AppBar() {
  return (
    <>
      <StatusBar backgroundColor='#3700B3' barStyle='light-content' />
      <Box safeAreaTop backgroundColor='#6200ee' />
      <HStack
        bg='#6200ee'
        px={1}
        py={3}
        justifyContent='space-between'
        alignItems='center'
      >
        <HStack space={4} alignItems='center'>
          <IconButton icon={<Icon as={MenuIcon} size='sm' color='white' />} />
          <Text color='white' fontSize={20} fontWeight='bold'>
            Home
          </Text>
        </HStack>
        <HStack space={2}>
          <IconButton
            icon={<Icon as={FavoriteIcon} size='sm' color='white' />}
          />
          <IconButton icon={<Icon as={SearchIcon} color='white' size='sm' />} />
          <IconButton icon={<Icon as={MoreIcon} size='sm' color='white' />} />
        </HStack>
      </HStack>
    </>
  );
}
