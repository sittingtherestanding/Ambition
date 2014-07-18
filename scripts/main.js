var header = new Header()
var numpad = new Numpad()

var main = function()
{
	game.blank()

	if (currentScreen == 'solving')
	{
		header.draw()
		numpad.draw()
	}
	else if (currentScreen == 'store')
	{
		// Stuff
	}

	game.draw()
}

game.start(main)