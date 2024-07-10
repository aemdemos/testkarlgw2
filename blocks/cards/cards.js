
export default function decorate(block) {
  // Add a class to the block for scoping styles
  block.classList.add('card-container');

  // Iterate over each child div of the block
  const items = block.querySelectorAll(':scope > div');
  items.forEach(item => {
    // Add a class to each item for styling
    item.classList.add('card-item');

    // Wrap the image in a link if it isn't already
    const imgDiv = item.querySelector(':scope > div:nth-child(1)');
    const img = imgDiv.querySelector('img');
    const link = item.querySelector('a');

    if (link && img) {
      const imgLink = document.createElement('a');
      imgLink.href = link.href;
      imgLink.appendChild(img.cloneNode(true));
      imgDiv.innerHTML = ''; // Clear the original content
      imgDiv.appendChild(imgLink); // Add the linked image
    }

    // Add a class to the content div
    const contentDiv = item.querySelector(':scope > div:nth-child(2)');
    contentDiv.classList.add('card-content');

    // Add a class to each paragraph
    const paragraphs = contentDiv.querySelectorAll('p');
    paragraphs.forEach(p => p.classList.add('card-text'));

    // Add a class to the link
    const linkElement = contentDiv.querySelector('a');
    if (linkElement) {
      linkElement.classList.add('card-link');
    }
  });
}
