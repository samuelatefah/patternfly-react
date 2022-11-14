import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Sidebar } from '../Sidebar';

test('Renders without children', () => {
  render(
    <div data-testid="sidebar">
      <Sidebar />
    </div>
  );
  expect(screen.getByTestId('sidebar').firstChild).toBeVisible();
});

test('Renders children', () => {
  render(<Sidebar>Test</Sidebar>);
  expect(screen.getByText('Test')).toBeVisible();
});

test('Renders with only class name pf-c-sidebar by default', () => {
  render(<Sidebar data-testid="sidebar">Test</Sidebar>);
  expect(screen.getByTestId('sidebar')).toHaveClass('pf-c-sidebar', { exact: true });
});

test('Renders with class name pf-c-sidebar', () => {
  render(<Sidebar data-testid="sidebar">Test</Sidebar>);
  expect(screen.getByTestId('sidebar')).toHaveClass('pf-c-sidebar');
});

test('Renders with custom class name when className prop is provided', () => {
  render(
    <Sidebar data-testid="sidebar" className="custom-class">
      Test
    </Sidebar>
  );
  expect(screen.getByTestId('sidebar')).toHaveClass('custom-class');
});

test('Renders with class name pf-m-no-background when hasNoBackground prop is passed', () => {
  render(
    <Sidebar data-testid="sidebar" hasNoBackground>
      Test
    </Sidebar>
  );
  expect(screen.getByTestId('sidebar')).toHaveClass('pf-m-no-background');
});

test('Renders with class name pf-m-stack when "stack" is passed to orientation prop', () => {
  render(
    <Sidebar data-testid="sidebar" orientation="stack">
      Test
    </Sidebar>
  );
  expect(screen.getByTestId('sidebar')).toHaveClass('pf-m-stack');
});

test('Renders with class name pf-m-split when "split" is passed to orientation prop', () => {
  render(
    <Sidebar data-testid="sidebar" orientation="split">
      Test
    </Sidebar>
  );
  expect(screen.getByTestId('sidebar')).toHaveClass('pf-m-split');
});

test('Renders with class name pf-m-panel-right when isPanelRight prop is passed', () => {
  render(
    <Sidebar data-testid="sidebar" isPanelRight>
      Test
    </Sidebar>
  );
  expect(screen.getByTestId('sidebar')).toHaveClass('pf-m-panel-right');
});

test('Renders with class name pf-m-panel-right when isPanelRight prop is passed', () => {
  render(
    <Sidebar data-testid="sidebar" isPanelRight>
      Test
    </Sidebar>
  );
  expect(screen.getByTestId('sidebar')).toHaveClass('pf-m-panel-right');
});

test('Renders with class name pf-m-gutter when hasGutter prop is passed', () => {
  render(
    <Sidebar data-testid="sidebar" hasGutter>
      Test
    </Sidebar>
  );
  expect(screen.getByTestId('sidebar')).toHaveClass('pf-m-gutter');
});

test('Renders with class name pf-m-sidebar__main by default for child component', () => {
  render(<Sidebar>Test</Sidebar>);
  expect(screen.getByText('Test')).toHaveClass('pf-c-sidebar__main');
});

test('Renders with inherited element props spread to the component', () => {
  render(
    <Sidebar data-testid="sidebar" aria-label="Test label">
      Test
    </Sidebar>
  );
  expect(screen.getByTestId('sidebar')).toHaveAccessibleName('Test label');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<Sidebar>Test</Sidebar>);
  expect(asFragment()).toMatchSnapshot();
});
