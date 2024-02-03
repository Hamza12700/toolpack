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
		description: "Hash a text string using the function you need : MD5, SHA1, SHA256, SHA224, SHA512, SHA384, SHA3 or RIPEMD160",
		component: "HashText",
		link: "/hash-text"
	}
]
