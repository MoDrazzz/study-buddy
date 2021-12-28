import React from 'react';
import '@testing-library/jest-dom';
import AddUser from 'views/AddUser';
import Dashboard from 'views/Dashboard'; // mistake
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Form Field', () => {
  it('Adds new user to the list', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );

    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grzesiu' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '89%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.1' } });
    fireEvent.click(screen.getByTestId('Consent'));
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Grzesiu');
  });
  it('Prevents adding new user if the consent is not checked', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );

    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grzesiu' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '89%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.1' } });
    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.queryByText('Grzesiu');
    expect(newUser).not.toBeInTheDocument();
  });
});
