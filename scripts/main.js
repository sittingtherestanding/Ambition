var header = new Header()
var numpad = new Numpad()
	numpad.generateProblem()
var inventory = new Inventory()
var promotion = new Promotion()
var raise = new Raise()

var promotionWatcher = new PromotionWatcher()

var main = function()
{
	promotionWatcher.watch()

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
	else if (currentScreen == 'promotion')
	{
		promotion.draw()
	}
	else if (currentScreen == 'raise')
	{
		raise.draw()
	}

	game.draw()
}

game.start(main)