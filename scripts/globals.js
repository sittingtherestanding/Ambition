var mainColor = '#dddddd'
var secondaryColor = '#111111'

var game = new Lorina()
	game.setTitle('Ambition')
		.setColor(mainColor)
		.setRoomSize(320, 568)
		.setDomSize(320, 568)

var mouse = new Mouse()

var money = 0
var answered = 0

var jobs = [
	'burger flipper',
	'maintenance/handyman',
	'manufacturing laborer',
	'heavy machinery operator',
	'sales guru',
	'crew manager',
	'head of sales',
	'sales manager',
	'CFO',
	'vice president',
	'CEO',
	'Primary stock ow0ner',
	'ridiculously wealthy venture capitalist',
	'most influential being in the world',
	'owner of nations',
	'supreme ruler of the earth'
]

var salaries = [
	[8, 10, 12],
	[15, 18, 20],
	[25, 30, 35],
	[40, 45, 50],
	[60, 65, 75],
	[80, 90, 100],
	[110, 125, 135],
	[150, 175, 200],
	[225, 250, 280],
	[500, 750, 1000],
	[1250, 1500, 2000],
	[2500, 3000, 4000],
	[5000, 6500, 8000],
	[10000, 12000, 15000],
	[50000, 75000, 100000],
	[300000, 500000, 1000000000]
]

var points = [
	[0, 25, 50],
	[100, 250, 500],
	[750, 1000, 1500],
	[2000, 3000, 4000],
	[5000, 6000, 7000],
	[8000, 10000, 12000],
	[15000, 17000, 20000],
	[25000, 30000, 35000],
	[40000, 45000, 50000],
	[60000, 70000, 85000],
	[100000, 120000, 150000],
	[175000, 200000, 225000],
	[250000, 300000, 350000],
	[500000, 750000, 1000000],
	[1500000, 2500000, 5000000],
	[10000000, 25000000, 100000000]
]

var social = 0

var raise = 0
var promotion = 0

var userInput = '0'