// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │  ├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings with a highly polished typewriter effect

const today = new Date();
const hour = today.getHours();
const name = CONFIG.name;

const gree1 = `${CONFIG.greetingNight}\xa0`;
const gree2 = `${CONFIG.greetingMorning}\xa0`;
const gree3 = `${CONFIG.greetingAfternoon}\xa0`;
const gree4 = `${CONFIG.greetingEvening}\xa0`;

let greetingText = '';
if (hour >= 23 || hour < 6) {
	greetingText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
	greetingText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
	greetingText = gree3 + name;
} else {
	greetingText = gree4 + name;
}

const typeWriter = (element, text, speed = 35) => {
	element.innerText = '';
	element.classList.remove('done');
	let i = 0;

	const type = () => {
		if (i < text.length) {
			const char = text.charAt(i);
			element.innerText += char;
			i++;

			// Add a subtle human-like speed variation (jitter)
			let delay = speed + (Math.random() * 20 - 10);

			// Add a natural pause after punctuation marks
			if (char === ',' || char === '!' || char === '.') {
				delay = 350;
			}

			setTimeout(type, delay);
		} else {
			// Finished typing, fade out cursor
			setTimeout(() => {
				element.classList.add('done');
			}, 800);
		}
	};

	type();
};

typeWriter(document.getElementById('greetings'), greetingText, 35);
