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
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning,',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Good night, sleep well.',

	// Layout
	layout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '90e34c69e2b557e6cd5df5f7b4094da3', // Get your API key from https://openweathermap.org/
	weatherIcons: 'OneDark', // 'OneDark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'C' or 'F'
	language: 'en', // More languages at https://openweathermap.org/current#multi
	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '0.0',
	defaultLongitude: '0.0',

	// Auto-change theme
	autoChangeTheme: true,

	// Auto-change by OS
	changeThemeByOS: true,

	// Auto-change by hour (24hr format, hh:mm)
	changeThemeByHour: true,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	// firstButtonsContainer: [
	// 	{
	// 		id: '1',
	// 		name: 'WhatsApp',
	// 		icon: 'chat-circle',
	// 		link: 'https://web.whatsapp.com/',
	// 	},
	// 	{
	// 		id: '2',
	// 		name: 'Mail',
	// 		icon: 'envelope-simple',
	// 		link: 'https://accounts.google.com/',
	// 	},
	// 	{
	// 		id: '3',
	// 		name: 'Outlook',
	// 		icon: 'envelope-simple',
	// 		link: 'https://outlook.com/',
	// 	},
	// 	{
	// 		id: '4',
	// 		name: 'Reddit',
	// 		icon: 'hash',
	// 		link: 'https://reddit.com/',
	// 	}
	// ],

	// secondButtonsContainer: [
	// 	{
	// 		id: '1',
	// 		name: 'Spotify',
	// 		icon: 'spotify-logo',
	// 		link: 'https://open.spotify.com/',
	// 	},
	// 	{
	// 		id: '2',
	// 		name: 'Amazon',
	// 		icon: 'amazon-logo',
	// 		link: 'https://amazon.com/',
	// 	},
	// 	{
	// 		id: '3',
	// 		name: 'Figma',
	// 		icon: 'figma-logo',
	// 		link: 'https://figma.com/',
	// 	},
	// 	{
	// 		id: '4',
	// 		name: 'Hashnode',
	// 		icon: 'hashnode-logo',
	// 		link: 'https://hashnode.com/',
	// 	},
	// 	{
	// 		id: '5',
	// 		name: 'WhatsApp',
	// 		icon: 'chat-circle',
	// 		link: 'https://web.whatsapp.com/',
	// 	},
	// 	{
	// 		id: '6',
	// 		name: 'Telegram',
	// 		icon: 'paper-plane-tilt',
	// 		link: 'https://web.telegram.org/',
	// 	},
	// ],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	firstlistsContainer: [
		{
			icon: 'sparkle',
			id: '1',
			links: [
				{
					name: 'WhatsApp',
					link: 'https://web.whatsapp.com/',
				},
				{
					name: 'Gmail',
					link: 'https://accounts.google.com/',
				},
				{
					name: 'Outlook',
					link: 'https://outlook.com/',
				}
			]
		}
	]

	// secondListsContainer: [
	// 	{
	// 		icon: 'music',
	// 		id: '1',
	// 		links: [
	// 			{
	// 				name: 'YouTube Music',
	// 				link: 'https://music.youtube.com/',
	// 			},
	// 			{
	// 				name: 'SoundCloud',
	// 				link: 'https://soundcloud.com/',
	// 			},
	// 			{
	// 				name: 'Bandcamp',
	// 				link: 'https://bandcamp.com/',
	// 			},
	// 			{
	// 				name: 'Last.fm',
	// 				link: 'https://last.fm/',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		icon: 'bookmark',
	// 		id: '2',
	// 		links: [
	// 			{
	// 				name: 'Pocket',
	// 				link: 'https://getpocket.com/',
	// 			},
	// 			{
	// 				name: 'Notion',
	// 				link: 'https://notion.so/',
	// 			},
	// 			{
	// 				name: 'Trello',
	// 				link: 'https://trello.com/',
	// 			},
	// 			{
	// 				name: 'Todoist',
	// 				link: 'https://todoist.com/',
	// 			},
	// 		],
	// 	},
	// ],
};
