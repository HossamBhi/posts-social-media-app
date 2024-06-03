import {NavigationContainer} from '@react-navigation/native';
import '@testing-library/jest-native';
import {render, screen} from '@testing-library/react-native';
import React from 'react';
import {PostType} from '../../src/utils/types';
import {PostCard} from '../../src/components';

describe('PostCard', () => {
  it('should render PostCard with correct data', () => {
    const item: PostType = {
      id: 1,
      user_id: 1,
      title: "Fed official's latest thoughts upend rate cut chances",
      body: 'One should listen carefully to what Neel Kashkari is saying about interest-rate cuts, and, if you do, you may not be happy. The president of the Minneapolis Federal Reserve Bank was clear Tuesday',
    };

    render(
      <NavigationContainer>
        <PostCard item={item} />
      </NavigationContainer>,
    );
    expect(screen.getByText(new RegExp(item.title))).toBeTruthy();
    expect(screen.getByText(new RegExp(item.body))).toBeTruthy();
  });
});
