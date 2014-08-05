var finger = new Finger()

var notifier = new Notifier()
var header = new Header()
var menu = new Menu()
var numpad = new Numpad()
	numpad.generateProblem()
var inventory = new Inventory()
var wallstreet = new Wallstreet()

var main = function()
{
	notifier.watch()

	game.blank()

	header.draw() // Draw the header on every screen

	if (currentScreen == 'earn')
	{
		numpad.draw()
	}
	else if (currentScreen == 'spend')
	{
		inventory.draw()
	}
	else if (currentScreen == 'invest')
	{
		wallstreet.draw()
	}

	wallstreet.checkInvestments()

	notifier.draw()

	menu.draw()

	game.draw()
}

game.start(main)