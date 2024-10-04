import ShowPopover from './components/show_popover/showPopover';
import createContainer from './components/container/create_container';

createContainer();
export default function start() {
  const showPopover = new ShowPopover();
  showPopover.init();
}

start();
