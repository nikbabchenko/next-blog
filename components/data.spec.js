
// Unit Test Code
import React from 'react';
import { render, screen } from '@testing-library/react';
import Date from './Date';

describe('Date', () => {
  it('should render the date in the correct format', () => {
    const dateString = '2020-07-20T14:00:00.000Z';

    render(<Date dateString={dateString} />);

    expect(screen.getByText('July 20, 2020')).toBeInTheDocument();
  });
});