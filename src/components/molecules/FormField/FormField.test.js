import React from 'react';
import '@testing-library/jest-dom';
import FormField from 'components/molecules/FormField/FormField';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Input With Button', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
