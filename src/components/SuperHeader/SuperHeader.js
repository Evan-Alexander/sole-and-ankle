import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <ShoppingCart>
        <Icon id="shopping-bag" strokeWidth={1} />
      </ShoppingCart>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  display: flex;
  padding: 4px 32px;
  align-items: center;
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
`;

const ShoppingCart = styled.button`
  display: inline-block;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  border: none;
`

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;
  display: inline-block;
  margin-left: 18px;
  margin-right: 12px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
