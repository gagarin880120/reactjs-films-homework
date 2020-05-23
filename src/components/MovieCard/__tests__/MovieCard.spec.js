import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import MovieCard from '../MovieCard';
import {render, fireEvent} from '@testing-library/react';

test('MovieCard component should render without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieCard title='Star Wars' genre_ids={[28]} genres={[{id:28, name:'Adventure'}]} />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});

// test('testing onMouseOver event', () => {
//   const onMouseOverHandler = jest.fn();
//   const { container, getByTestId } = render(<MovieCard onMouseOver={onMouseOverHandler} title='Star Wars' genre_ids={[28]} genres={[{id:28, name:'Adventure'}]} />);
//   const wrapper = getByTestId('wrapper');
//   fireEvent.mouseOver(wrapper);
//   expect(onMouseOverHandler).toHaveBeenCalledTimes(1);
// });

