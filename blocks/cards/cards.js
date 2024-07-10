
export default function decorate(block) {
    // Add class to the outer div
    block.classList.add('testblock');

    // Select all card items
    const cards = block.querySelectorAll('.cards > div');

    cards.forEach(card => {
        // Add card class to each card
        card.classList.add('testblock-card');

        // Structure the card content
        const [imageContainer, textContainer] = card.children;
        imageContainer.classList.add('testblock-image-container');
        textContainer.classList.add('testblock-text-container');

        const [category, description, link] = textContainer.children;
        category.classList.add('testblock-category');
        description.classList.add('testblock-description');
        link.classList.add('testblock-link');
    });
}
