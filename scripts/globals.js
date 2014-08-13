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
		.makeFullscreen()
		.appendCanvas()

// Haaaaaaack
if (l.retina > 2)
{
	l.retina = 2.5
}

var currentScreen = 'earn'
var displayMenu = false

var problemType

var numbers = new Array() // The list of ints used to display math problems
var userInput = '?'
var investmentHeader = 'no current investments'

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
		name: 'crazy wealthy investor',
		salary: [5000, 6500, 8000],
		points: [250000, 300000, 350000,]
	},
	{
		name: 'most influential being',
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
		points: 5,
		bought: 0
	},
	{
		name: 'nice clothes',
		price: 50,
		points: 12,
		bought: 0
	},
	{
		name: 'gym membership',
		price: 100,
		points: 25,
		bought: 0
	},
	{
		name: 'cologne/perfume',
		price: 150,
		points: 50,
		bought: 0
	},
	{
		name: 'slick shoes',
		price: 200,
		points: 100,
		bought: 0
	},
	{
		name: 'fancy business cards',
		price: 350,
		points: 250,
		bought: 0
	},
	{
		name: 'travel experience',
		price: 1000,
		points: 500,
		bought: 0
	},
	{
		name: 'new car',
		price: 10000,
		points: 1000,
		bought: 0
	},
	{
		name: 'plastic surgery',
		price: 25000,
		points: 2500,
		bought: 0
	},
	{
		name: 'managerial courses',
		price: 35000,
		points: 5000,
		bought: 0
	},
	{
		name: 'real estate',
		price: 75000,
		points: 10000,
		bought: 0
	},
	{
		name: 'airplane',
		price: 150000,
		points: 100000,
		bought: 0
	}
]

var investmentOptions = [
	{
		name: 'lottery ticket',
		interest: 100000000,
		risk: 999,
		price: 5,
		wait: 0,
		bought: 0,
		returned: false,
		failed: false
	},
	{
		name: 'small business investment',
		interest: 50,
		risk: 10,
		price: 10000,
		wait: 1 / 60, // in hours
		bought: 0,
		returned: false,
		failed: false
	},
	{
		name: 'medium business investment',
		interest: 150,
		risk: 5,
		price: 50000,
		wait: 12, // in hours
		bought: 0,
		returned: false,
		failed: false
	},
	{
		name: 'large business investment',
		interest: 250,
		risk: 1,
		price: 150000,
		wait: 24, // in hours
		bought: 0,
		returned: false,
		failed: false
	}
]