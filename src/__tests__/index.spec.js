import moduleHotAccept from '../index';


it('should only call hot.accept() if hot is defined', () => {
  const accept = jest.fn();
  const mockModule = { hot: { accept } };
  moduleHotAccept(mockModule);
  expect(accept).toHaveBeenCalled();
});

it('should not throw if module is undefined', () => {
  expect(moduleHotAccept).not.toThrow();
});

it('should not throw if module.hot is undefined', () => {
  expect(
    () => moduleHotAccept({ notHot: -273 }),
  ).not.toThrow();
});
