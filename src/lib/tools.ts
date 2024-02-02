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
		description: "Generate random string with the chars you want, uppercase or lowercase letters, numbers and/or symbols",
		link: "/token-generator",
		component: "TokenGenerator"
	}
]
