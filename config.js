// ┌─┐┌─┐┌┐┐┌─┐┌─┐┌─┐
// └─┐│ │││││ ┬├┤ └─┐
// └─┘└─┘┘└┘└─┘└─┘└─┘
// A minimal, premium startpage
// Edit this file to personalize your startpage.

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Dani',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Months and weekdays
	monthNames: ['En', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ag', 'Sep', 'Oct', 'Nov', 'Dic'],
	weekdayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],

	// Greetings
	greetingMorning: 'Buenos días,',
	greetingAfternoon: 'Buenas tardes,',
	greetingEvening: 'Buenas noches,',
	greetingNight: 'Buenas noches, descansa.',

	// Layout
	layout: 'buttons', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '90e34c69e2b557e6cd5df5f7b4094da3', // Get your API key from https://openweathermap.org/
	weatherIcons: 'OneDark', // 'OneDark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'C' or 'F'
	language: 'es', // More languages at https://openweathermap.org/current#multi
	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '3.4056285338446677',
	defaultLongitude: '-76.38313590214631',

	// Auto-change theme
	autoChangeTheme: false,

	// Auto-change by OS
	changeThemeByOS: false,

	// Auto-change by hour (24hr format, hh:mm)
	changeThemeByHour: true,
	hourDarkThemeActive: '16:00',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '2',
			name: 'WhatsApp',
			icon: 'whatsapp-logo',
			link: 'https://web.whatsapp.com/',
		},
		{
			id: '5',
			name: 'Gmail',
			icon: 'envelope-simple',
			link: 'https://accounts.google.com/',
		}
	],

	secondButtonsContainer: [

		{
			id: '1',
			name: 'Outlook',
			icon: 'microsoft-outlook-logo',
			link: 'https://outlook.com/',
		},
		{
			id: '2',
			name: 'Google',
			icon: 'google-logo',
			link: 'https://google.com/',
		}
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	firstlistsContainer: [
		{
			icon: 'sparkle',
			id: '1',
			links: []
		}
	],

	secondListsContainer: [
		{
			icon: 'music',
			id: '1',
			links: []
		}
	],
};
