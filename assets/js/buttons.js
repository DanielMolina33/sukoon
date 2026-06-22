// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
// ├┴┐│ │ │  │ │ ││││└─┐
// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘
// Function to print Button Cards.

const generateFirstButtonsContainer = () => {
	for (const button of CONFIG.firstButtonsContainer) {
		let item = `
        <a
          href="${button.link}"
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
		  title="${button.name}"
          class="card button"
        >
          <i class="ph ph-${button.icon} buttonIcon"></i>
        </a>
    `;

		const position = 'beforeend';

		buttons_1.insertAdjacentHTML(position, item);
	}
};

// const generateSecondButtonsContainer = () => {
// 	for (const button of CONFIG.secondButtonsContainer) {
// 		let item = `
//         <a
//           href="${button.link}"
//           target="${CONFIG.openInNewTab ? '_blank' : ''}"
// 		  title="${button.name}"
//           class="card button button__${button.id}"
//         >
//           <i class="ph ph-${button.icon} buttonIcon"></i>
//         </a>
//     `;

// 		const position = 'beforeend';

// 		buttons_2.insertAdjacentHTML(position, item);
// 	}
// };

const generateButtons = () => {
	switch (CONFIG.layout) {
		case 'bento':
			generateFirstButtonsContainer();
			break;
		case 'buttons':
			linksBlockLeft.classList.add('w65');
			buttons_1.classList.add('col4');
			generateFirstButtonsContainer();

			for (let child of buttons_1.children) {
				child.classList.add('noGap');
			}
			// generateSecondButtonsContainer();
			break;
		default:
			break;
	}
};

generateButtons();
