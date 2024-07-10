
export default function decorate(block) {
  // Add a class to the block for scoping CSS
  block.classList.add('testblock');

  // Remove unnecessary <div> wrappers
  const innerDiv = block.querySelector('div > div > div');
  if (innerDiv) {
    while (innerDiv.firstChild) {
      block.appendChild(innerDiv.firstChild);
    }
    innerDiv.remove();
  }

  // Wrap content in a container for better layout control
  const container = document.createElement('div');
  container.classList.add('testblock-container');
  while (block.firstChild) {
    container.appendChild(block.firstChild);
  }
  block.appendChild(container);

  // Additional content adjustments if needed
  const img = block.querySelector('img');
  if (img) {
    img.classList.add('testblock-img');
  }
}
