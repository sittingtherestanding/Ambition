var finger = new Finger()

var tool = new Tool()
var rain = new Group() // For dollars which should draw on every screen

var makeItRain = function(count)
{
	var count = Math.round(count)

	if (count > 1000)
	{
		count = 1000
	}

	while (count--)
	{
		var dollar = new Entity()
			dollar.setSprite('images/dollar.png')
				  .setPosition(tool.random(l.room.width / 6, l.room.width - l.room.width / 6), l.room.height)
				  .setAnchor(25 * l.retina, 12 * l.retina)
				  .setStretch(tool.random(50 * l.retina, 100 * l.retina), tool.random(25 * l.retina, 50 * l.retina))
				  .setFriction(0)
				  .spin(tool.random(-6, 6))
				  .pushTowardDegree(tool.random(130, 50), tool.random(15, 35))
		rain.add(dollar)
	}
}

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

	header.draw() // Draw the header on every screen

	menu.draw()

	notifier.draw()

	rain.applyPhysics().banish(150).draw()

	game.draw()
}

game.start(main)