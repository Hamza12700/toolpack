type Tools = {
	icon_name: string,
	title: string,
	description: string,
	link: string,
	component: string
}

export const tools: Tools[] = [
	{
		title: "Token Generator",
		icon_name: "game-icons:power-generator",
		description: "Generate random string",
		link: "/token-generator",
		component: "TokenGenerator"
	},
	{
		title: "Hash Text",
		icon_name: "streamline:device-database-encryption-1",
		description: "Hash a text string using the function you need : MD5, SHA1, SHA256",
		component: "HashText",
		link: "/hash-text"
	},
	{
		title: "Encode/decode url formatted strings",
		icon_name: "oui:link",
		description: "Encode to url-encoded format (also known as 'percent-encoded') or decode",
		link: "/url-encoder",
		component: "UrlEncoder"
	}
]
