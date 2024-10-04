export default function createContainer() {
  const element = document.createElement('div');
  element.classList.add('wrapper');
  element.innerHTML = `
  <div class="container">
    <div class="bd-example">
      <button type="button" class="btn" id="toggler">Toggle popover</button>
    </div>
  </div>`;

  document.body.append(element);
  return element;
}
