import createContainer from '../components/container/create_container';
import ShowPopover from '../components/show_popover/showPopover';

// jest.mock('../components/show_popover/showPopover');

// beforeEach(() => {
//   ShowPopover.mockClear();
// });

test('testing popover innerHTML', () => {
  const popover = new ShowPopover();
  popover.init();
  popover._btn.click();
  const popoverHTML = document.querySelector('.popover');
  expect(document.body.contains(popoverHTML)).toBe(true);
});

test('create container', () => {
  const wrapper = document.querySelector('.wrapper');
  expect(wrapper.innerHTML).toEqual(createContainer().innerHTML);
});
