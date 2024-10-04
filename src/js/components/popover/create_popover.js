export default function createPopover(data) {
  const element = document.createElement('div');
  element.classList.add('popover');
  element.innerHTML = `
  <h3 class="popover_header">${data.header}</h3>
  <div class="popover_body">${data.content}</div>
  `;

  return element;
}
