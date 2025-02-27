import React from 'react';
import {
  initializeMockApp,
  render,
  screen,
} from '../../setupTest';
import CoursewareSearchResults from './CoursewareSearchResults';
import messages from './messages';
import mockedData from './test-data/mockedResults';

jest.mock('react-redux');

function renderComponent({ results }) {
  const { container } = render(<CoursewareSearchResults results={results} />);
  return container;
}

describe('CoursewareSearchResults', () => {
  beforeAll(async () => {
    initializeMockApp();
  });

  describe('when an empty array is provided', () => {
    beforeEach(() => { renderComponent({ results: [] }); });

    it('should render a "no results found" message.', () => {
      expect(screen.getByTestId('no-results').textContent).toBe(messages.searchResultsNone.defaultMessage);
    });
  });

  describe('when list of results is provided', () => {
    beforeEach(() => { renderComponent({ results: mockedData }); });

    it('should match the snapshot', () => {
      expect(screen.getByTestId('search-results')).toMatchSnapshot();
    });
  });
});
