import createContainer from '../components/container/create_container';
import ShowPopover from '../components/show_popover/showPopover';
import start from '../app';

jest.mock('../components/show_popover/showPopover');

beforeEach(() => {
  ShowPopover.mockClear();
});

const testSkip = test.skip;
testSkip('testing popover innerHTML', () => {
  console.log(document.body.innerHTML);
  const popover = new ShowPopover();
  popover.init();
  console.log(popover._btn);
  // popover._btn.click();
  console.log(document.body.innerHTML);
});

test('create container', () => {
  const wrapper = document.querySelector('.wrapper');
  expect(wrapper.innerHTML).toEqual(createContainer().innerHTML);
});

test('func app() creates ShowPopover class', () => {
  start();
  expect(ShowPopover).toHaveBeenCalledTimes(1);
});
