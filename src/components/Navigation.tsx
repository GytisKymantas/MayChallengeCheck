import React from 'react';
import styled from 'styled-components';
import { Flex } from './Flex';

export const Navigation = () => {
  return (
    <div>
      <Flex justifyContent='space-around'>
        <h1>LogoIpsum</h1>
        <p>cart</p>
      </Flex>
    </div>
  );
};
