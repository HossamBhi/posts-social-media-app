import {NavigationContainer} from '@react-navigation/native';
import '@testing-library/jest-native';
import {render, screen} from '@testing-library/react-native';
import React from 'react';
import {CommentCard} from '../../src/components';
import {CommentType} from '../../src/utils/types';

describe('CommentCard', () => {
  it('should render CommentCard with correct data', () => {
    const item: CommentType = {
      id: 1,
      post_id: 100,
      email: 'Hossambasha9900@gmail.com',
      name: 'Hossam Basha',
      body: 'One should listen carefully to what Neel Kashkari is saying about interest-rate cuts, and, if you do, you may not be happy. The president of the Minneapolis Federal Reserve Bank was clear Tuesday',
    };

    render(
      <NavigationContainer>
        <CommentCard item={item} />
      </NavigationContainer>,
    );
    expect(screen.getByText(new RegExp(item.name))).toBeTruthy();
    expect(screen.getByText(new RegExp(item.body))).toBeTruthy();
  });
});
