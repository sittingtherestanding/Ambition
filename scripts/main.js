var ui = new UI()
var numpad = new Numpad()
var problem = new Problem()

problem.generate()

var main = function()
{
	game.blank()

	ui.draw()
	numpad.draw()
	problem.draw()

	game.draw()
}

game.start(main)