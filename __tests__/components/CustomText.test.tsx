import '@testing-library/jest-native';
import {render, screen} from '@testing-library/react-native';
import React from 'react';
import {CustomText} from '../../src/components';

describe('CustomText', () => {
  it('Render Text Component', () => {
    render(<CustomText text="Welcome" />);
    expect(screen.getByText('Welcome')).toBeTruthy();
  });
});
