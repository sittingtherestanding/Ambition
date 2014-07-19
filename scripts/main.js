var header = new Header()
var numpad = new Numpad()
var inventory = new Inventory()

var main = function()
{
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

	game.draw()
}

game.start(main)