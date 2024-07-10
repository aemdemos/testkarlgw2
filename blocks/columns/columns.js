
export default function decorate(block) {
  // Add a class to the block for styling
  block.classList.add('custom-block');
  
  // Update the structure of the first div
  const firstDiv = block.children[0];
  if (firstDiv) {
    const imgLink = document.createElement('a');
    imgLink.href = "https://www.youtube.com/embed/cgtRt9djFkM?si=QTnFFeLj1wCVVKvw";
    imgLink.innerHTML = `<img src="path-to-image-1.jpg" alt="Clark County Foster Care">`;
    firstDiv.insertBefore(imgLink, firstDiv.children[1]);
    
    // Move Learn More button to the end
    const learnMoreLink = firstDiv.querySelector('p:nth-of-type(4) a');
    const learnMoreBtn = document.createElement('a');
    learnMoreBtn.href = learnMoreLink.href;
    learnMoreBtn.classList.add('custom-btn');
    learnMoreBtn.innerText = "Learn More";
    learnMoreLink.parentNode.replaceChild(learnMoreBtn, learnMoreLink);
    firstDiv.appendChild(learnMoreBtn);
  }

  // Update the structure of the second div
  const secondDiv = block.children[1];
  if (secondDiv) {
    const imgLink = document.createElement('a');
    imgLink.href = "https://www.youtube.com/embed/6a3lA5kqci0";
    imgLink.innerHTML = `<img src="path-to-image-2.jpg" alt="2024 Employee Recognition Celebration">`;
    secondDiv.insertBefore(imgLink, secondDiv.children[1]);
    
    // Move Watch The Video button to the end
    const watchVideoLink = secondDiv.querySelector('p:nth-of-type(5) a');
    const watchVideoBtn = document.createElement('a');
    watchVideoBtn.href = watchVideoLink.href;
    watchVideoBtn.classList.add('custom-btn');
    watchVideoBtn.innerText = "Watch The Video";
    watchVideoLink.parentNode.replaceChild(watchVideoBtn, watchVideoLink);
    secondDiv.appendChild(watchVideoBtn);
  }
}
