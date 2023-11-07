import { setupServer } from 'msw/node';
import { graphql } from 'msw';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IPicsQueryData } from 'types';
import { renderWithProviders } from './renderWithProviders';
import Gallery from 'components/Gallery';
import mockData from './mockData';

const server = setupServer(
  //@ts-expect-error should specify ctx type
  graphql.query('GetRickMortyPics', (req, res, ctx) => {
    return res(ctx.data(mockData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Should show loading then show images or no data error', async () => {
  renderWithProviders(<Gallery />);

  // should show skeleton when loading initially
  const skeletons = screen.getAllByRole('progressbar');
  expect(skeletons).toHaveLength(40);

  // after some time, the images should be received
  expect(await screen.findByText(/Character 1/i)).toBeInTheDocument();
  expect(await screen.findByText(/Character 2/i)).toBeInTheDocument();
  expect(await screen.findByText(/Character 19/i)).toBeInTheDocument();
  expect(await screen.findByText(/Character 20/i)).toBeInTheDocument();

  // pagination should be present
  expect(screen.getByRole('button', { name: /page 1/i })).toBeInTheDocument();
});

test('Should change page when pagination is clicked', async () => {
  renderWithProviders(<Gallery />);

  // click to go to the 2nd page
  fireEvent.click(screen.getByRole('button', { name: /page 2/i }));

  const skeletons = screen.getAllByRole('progressbar');
  expect(skeletons).toHaveLength(2);
});
