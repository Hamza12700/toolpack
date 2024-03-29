type Tools = {
	icon_name: string,
	title: string,
	description: string,
	link: string,
	component: string
}

export const tools: Tools[] = [
	{
		title: "Random String Generator",
		icon_name: "game-icons:power-generator",
		description: "Generate random string",
		link: "/random-string-generator",
		component: "StringGenerator"
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
	},
	{
		title: "UUIDs generator",
		icon_name: "teenyicons:fingerprint-solid",
		description: "A Universally Unique Identifier (UUID) is a 128-bit number used to identify information in computer systems.",
		link: "/uuid-generator",
		component: "UuidGenerator"
	},
	{
		title: "Base64 string encoder/decoder",
		icon_name: "tabler:list-letters",
		description: "Simply encode and decode string into a their base64 representation.",
		link: "/base64-string-converter",
		component: "Base64"
	},
	{
		title: "Text to ASCII Binary",
		icon_name: "ant-design:field-binary-outlined",
		description: "Convert text to its ASCII binary representation and vice versa.",
		link: "/text-to-binary",
		component: "TextToBinary"
	},
	{
		title: "Escape HTML entities",
		icon_name: "tabler:file-type-html",
		description: "Escape or unescape html entities (replace <,>, &, \" and \' to their html version)",
		link: "/html-entities-escape",
		component: "EscapeHTMLEntities"
	},
]
