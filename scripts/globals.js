var navy = '#001F3F'
var blue = '#0074D9'
var aqua = '#7FDBFF'
var teal = '#39CCCC'
var olive = '#3D9970'
var green = '#2ECC40'
var lime = '#01FF70'
var yellow = '#FFDC00'
var orange = '#FF851B'
var red = '#FF4136'
var maroon = '#85144B'
var fuchsia = '#F012BE'
var purple = '#B10DC9'
var black = '#111111'
var gray = '#AAAAAA'
var silver = '#DDDDDD'
var white = '#FFFFFF'

var game = new Lorina()
	game.setTitle('Ambition')
		.setColor(aqua)
		.setRoomSize(320, 568)
		.setDomSize(320, 568)

var currentScreen = 'solving'

var money = 0 // A straight int that keeps track of money
var social = 0 // A straight int keeping track of your SSP

var jobLevel = 0 // The 'jobs' index marking your current job level
var promotionLevel = 0 // The 'jobs' index marking your current promotion level

var userInput = '?'
var answered = 0

var jobs = [
	{
		name: 'burger flipper',
		salary: [8, 10, 12],
		points: [0, 25, 50]
	},
	{
		name: 'maintenance/handyman',
		salary: [15, 18, 20],
		points: [100, 250, 500]
	},
	{
		name: 'manufacturing laborer',
		salary: [25, 30, 35],
		points: [750, 1000, 1500]
	},
	{
		name: 'heavy machinery operator',
		salary: [40, 45, 50],
		points: [2000, 3000, 4000]
	},
	{
		name: 'sales guru',
		salary: [60, 65, 75],
		points: [5000, 6000, 7000]
	},
	{
		name: 'crew manager',
		salary: [80, 90, 100],
		points: [8000, 10000, 12000]
	},
	{
		name: 'head of sales',
		salary: [110, 125, 135],
		points: [15000, 17000, 20000]
	},
	{
		name: 'sales manager',
		salary: [150, 175, 200],
		points: [25000, 30000, 35000]
	},
	{
		name: 'CFO',
		salary: [225, 250, 280],
		points: [40000, 45000, 50000]
	},
	{
		name: 'vice president',
		salary: [500, 750, 1000],
		points: [60000, 70000, 85000]
	},
	{
		name: 'CEO',
		salary: [1250, 1500, 2000],
		points: [100000, 120000, 150000]
	},
	{
		name: 'primary stock owner',
		salary: [2500, 3000, 4000],
		points: [175000, 200000, 225000]
	},
	{
		name: 'ridiculously wealthy venture capitalist',
		salary: [5000, 6500, 8000],
		points: [250000, 300000, 350000,]
	},
	{
		name: 'most influential being in the world',
		salary: [10000, 12000, 15000],
		points: [500000, 750000, 1000000]
	},
	{
		name: 'owner of nations',
		salary: [50000, 75000, 100000],
		points: [1500000, 2500000, 5000000]
	},
	{
		name: 'supreme ruler of the earth',
		salary: [300000, 500000, 1000000000],
		points: [10000000, 25000000, 100000000]
	}
]

var inventoryItems = [
	{
		name: 'hair cut',
		price: 20,
		points: 5
	},
	{
		name: 'nice clothes',
		price: 50,
		points: 12
	},
	{
		name: 'gym membership',
		price: 100,
		points: 25
	},
	{
		name: 'cologne/perfume',
		price: 150,
		points: 50
	},
	{
		name: 'slick shoes',
		price: 200,
		points: 100
	},
	{
		name: 'fancy business cards',
		price: 350,
		points: 250
	},
	{
		name: 'travel experience',
		price: 1000,
		points: 500
	},
	{
		name: 'new car',
		price: 10000,
		points: 1000
	},
	{
		name: 'plastic surgery',
		price: 25000,
		points: 2500
	},
	{
		name: 'managerial courses',
		price: 35000,
		points: 5000
	},
	{
		name: 'real estate',
		price: 75000,
		points: 10000
	},
	{
		name: 'airplane',
		price: 150000,
		points: 100000
	}
]