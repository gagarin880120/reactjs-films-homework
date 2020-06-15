import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer, {act} from 'react-test-renderer';
import React from 'react';
import TrailerModal from '../TrailerModal';

describe('TrailerModal component', () => {
  beforeEach(() => {
    fetch.resetMocks()
  });
  // fetch.mockResponseOnce(JSON.stringify({ videos: {results: [{key: '123'}]} }));

  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<TrailerModal modalIsOpen={true} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
