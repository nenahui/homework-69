import React, { PropsWithChildren } from 'react';
import { Flex } from 'antd';
import { Header } from '../Header/Header';
import { CompleteField } from '../CompleteField/CompleteField';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex className={'container'} vertical>
      <Header />
      <CompleteField />
      {children}
    </Flex>
  );
};
