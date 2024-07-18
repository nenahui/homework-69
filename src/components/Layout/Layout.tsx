import React, { PropsWithChildren } from 'react';
import { Flex } from 'antd';
import { Header } from '../Header/Header';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex className={'container'} vertical>
      <Header />
      {children}
    </Flex>
  );
};
