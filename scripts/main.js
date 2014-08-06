var finger = new Finger()

var rain = new Group() // For dollars which should draw on every screen

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

	wallstreet.checkInvestments()

	notifier.draw()

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

	menu.draw()

	rain.applyPhysics().banish(150).draw()

	game.draw()
}

game.start(main)