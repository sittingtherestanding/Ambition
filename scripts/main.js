var ui = new UI()
var numpad = new Numpad()

var main = function()
{
	game.blank()

	ui.draw()
	numpad.draw()

	game.draw()
}

game.start(main)