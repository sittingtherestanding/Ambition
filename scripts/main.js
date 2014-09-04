var finger = new Finger()

var tool = new Tool()
var rain = new Group() // For dollars which should draw on every screen

var makeItRain = function(count)
{
	speaker.play('money')

	var count = Math.round(count)

	if (count > 50)
	{
		count = 50
	}

	while (count--)
	{
		var dollar = new Entity()
			dollar.setSprite('images/dollar.png')
				  .setPosition(tool.random(50, l.room.width -50), l.room.height + 100)
				  .setAnchor(25 * l.retina, 12 * l.retina)
				  .setStretch(tool.random(50 * l.retina, 100 * l.retina), tool.random(25 * l.retina, 50 * l.retina))
				  .setFriction(0)
				  .spin(tool.random(-7, 7))
				  .pushTowardDegree(tool.random(130, 50), tool.random(10, 15) * l.retina)
		rain.add(dollar)
	}
}

var pushNotify = function(message, delay) // Delay is in hours
{
	var date = new Date()
	var future = new Date(date.getTime() + delay * 60 * 60 * 1000)

	window.plugin.notification.local.add({
	    date: future, // This expects a date object
	    message: message // The message that is displayed
	    // title: String // The title of the message
	})
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