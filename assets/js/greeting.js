// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │  ├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings with an ultra-smooth GPU-accelerated reveal effect

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

const typeWriter = (element, text, speed = 25) => {
	element.innerHTML = '';
	element.classList.remove('done');

	let charIndex = 0;
	const words = text.split(' ');
	
	const wordMarkups = words.map(word => {
		const chars = Array.from(word);
		const charMarkups = chars.map(char => {
			const delay = (charIndex * speed) / 1000;
			charIndex++;
			
			// Add a natural pause after punctuation marks by skipping frames in the delay
			if (char === ',' || char === '!' || char === '.') {
				charIndex += 12; // Adds ~300ms pause before next char begins
			}
			
			return `<span class="char" style="animation-delay: ${delay}s">${char}</span>`;
		}).join('');
		
		charIndex++; // Delay increment for space
		return `<span class="word" style="display: inline-block; white-space: nowrap;">${charMarkups}</span>`;
	});

	// Join words with non-breaking spaces for correct wrapping
	element.innerHTML = wordMarkups.join('&nbsp;');

	// Transition done state for blinking cursor fade out
	const totalDuration = (charIndex * speed) + 300; // ms
	setTimeout(() => {
		element.classList.add('done');
	}, totalDuration);
};

typeWriter(document.getElementById('greetings'), greetingText, 25);
