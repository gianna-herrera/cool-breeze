const navLinks = [
	{
		id: "cocktails",
		title: "Flavors",
	},
	{
		id: "about",
		title: "About Us",
	},
	{
		id: "art",
		title: "Our Craft",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

// Best sellers — single-serve 330ml cans
const cocktailLists = [
	{
		name: "Orange Zest",
		country: "Citrus",
		detail: "330 ml can",
		price: "$2.50",
	},
	{
		name: "Strawberry Fizz",
		country: "Berry",
		detail: "330 ml can",
		price: "$2.50",
	},
	{
		name: "Lime Cooler",
		country: "Citrus",
		detail: "330 ml can",
		price: "$2.50",
	},
	{
		name: "Grape Splash",
		country: "Berry",
		detail: "330 ml can",
		price: "$2.50",
	},
];

// Family size — 1L bottles
const mockTailLists = [
	{
		name: "Orange Zest",
		country: "Citrus",
		detail: "1 L bottle",
		price: "$4.90",
	},
	{
		name: "Strawberry Fizz",
		country: "Berry",
		detail: "1 L bottle",
		price: "$4.90",
	},
	{
		name: "Lime Cooler",
		country: "Citrus",
		detail: "1 L bottle",
		price: "$4.90",
	},
	{
		name: "Grape Splash",
		country: "Berry",
		detail: "1 L bottle",
		price: "$4.90",
	},
];

const profileLists = [
	{
		imgPath: "/images/profile1.png",
	},
	{
		imgPath: "/images/profile2.png",
	},
	{
		imgPath: "/images/profile3.png",
	},
	{
		imgPath: "/images/profile4.png",
	},
];

const featureLists = [
	"Made with real fruit",
	"No artificial sweeteners",
	"Naturally sparkling",
	"Low in sugar, high in flavor",
];

const goodLists = [
	"Cold-pressed ingredients",
	"Small-batch crafted",
	"Non-GMO & gluten-free",
	"Sustainably sourced",
];

const storeInfo = {
	heading: "Where to Find Us",
	address: "Miraflores, Lima, Peru",
	contact: {
		phone: "+51 979197888",
		email: "hello@coolbreezedrinks.com",
	},
};

const openingHours = [
	{ day: "Mon–Thu", time: "9:00am – 7:00pm" },
	{ day: "Fri", time: "9:00am – 8:00pm" },
	{ day: "Sat", time: "10:00am – 6:00pm" },
	{ day: "Sun", time: "Closed" },
];

const socials = [
	{
		name: "Instagram",
		icon: "https://res.cloudinary.com/h5rywbkv/image/upload/v1785789301/insta_fj6z0x.png",
		url: "#",
	},
	{
		name: "X (Twitter)",
		icon: "https://res.cloudinary.com/h5rywbkv/image/upload/v1785789307/x_hrjjav.png",
		url: "#",
	},
	{
		name: "Facebook",
		icon: "https://res.cloudinary.com/h5rywbkv/image/upload/v1785789299/fb_igdwt2.png",
		url: "#",
	},
];

// The 4 core Cool Breeze flavors, featured in the interactive menu slider
const allCocktails = [
	{
		id: 1,
		name: "Orange Zest",
		image: "https://res.cloudinary.com/h5rywbkv/image/upload/v1785789298/drink1_gjyfdh.png",
		title: "Vitamin C Charged Sunshine",
		description:
			"Cold-pressed orange juice blended with sparkling spring water and just a touch of natural cane sugar. No artificial flavors, no preservatives — pure citrus energy in every sip.",
	},
	{
		id: 2,
		name: "Lime Cooler",
		image: "https://res.cloudinary.com/h5rywbkv/image/upload/v1785789298/drink2_zfkes7.png",
		title: "Crisp, Clean & Refreshing",
		description:
			"Zesty lime juice meets sparkling water for a light, low-calorie refresher. Perfect for hot days when you need something clean and revitalizing.",
	},
	{
		id: 3,
		name: "Grape Splash",
		image: "https://res.cloudinary.com/h5rywbkv/image/upload/v1785789298/drink3_v4paap.png",
		title: "Bold Flavor, Naturally Sweet",
		description:
			"Real grape juice, naturally sweetened and lightly carbonated. A rich, fruity favorite packed with antioxidants and zero added sugar.",
	},
	{
		id: 4,
		name: "Strawberry Fizz",
		image: "https://res.cloudinary.com/h5rywbkv/image/upload/v1785789298/drink4_kjv4j1.png",
		title: "Juicy, Sweet & Sparkling",
		description:
			"Fresh strawberry puree blended with sparkling water for a naturally sweet, fizzy treat. Made with real fruit and nothing you can't pronounce.",
	},
];

export {
	navLinks,
	cocktailLists,
	mockTailLists,
	profileLists,
	featureLists,
	goodLists,
	openingHours,
	storeInfo,
	socials,
	allCocktails,
};