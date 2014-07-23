var mouse = new Mouse()

var notifier = new Notifier()
var header = new Header()
var numpad = new Numpad()
	numpad.generateProblem()
var inventory = new Inventory()

var main = function()
{
	notifier.watch()

	game.blank()

	header.draw() // Draw the header on every screen

	if (currentScreen == 'solving')
	{
		numpad.draw()
	}
	else if (currentScreen == 'store')
	{
		inventory.draw()
	}

	notifier.draw()

	game.draw()
}

game.start(main)