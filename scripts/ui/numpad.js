var Numpad = function()
{
	var size = 30
	var entityPadding = size / 2 // Use entities as invisible buttons
	var xPadding = size * 2
	var yPadding = size * 2.5

	var columnOne = xPadding
	var columnTwo = l.room.width / 2
	var columnThree = l.room.width - xPadding

	var rowOne = l.room.height - yPadding * 4
	var rowTwo = l.room.height - yPadding * 3
	var rowThree = l.room.height - yPadding * 2
	var rowFour = l.room.height - yPadding

	var typewriter = new Typewriter()
		typewriter.setColor(secondaryColor).setSize(size).setAlignment('center')

	var numberOne = new Entity()
		numberOne.setPosition(columnOne, rowOne + entityPadding)
				 .setSize(size * 2, size * 2)
				 .setAnchor(size, size)

	this.watch = function()
	{
		if (mouse.checkLeftClicked(numberOne))
		{
			console.log('clicked')

			userInput += 1
		}
	}

	this.draw = function()
	{
		this.watch()
		numberOne.debug()

		typewriter.setPosition(columnOne, rowOne).write('1')
		typewriter.setPosition(columnTwo, rowOne).write('2')
		typewriter.setPosition(columnThree, rowOne).write('3')

		typewriter.setPosition(columnOne, rowTwo).write('4')
		typewriter.setPosition(columnTwo, rowTwo).write('5')
		typewriter.setPosition(columnThree, rowTwo).write('6')

		typewriter.setPosition(columnOne, rowThree).write('7')
		typewriter.setPosition(columnTwo, rowThree).write('8')
		typewriter.setPosition(columnThree, rowThree).write('9')

		typewriter.setPosition(columnOne, rowFour).write('x')
		typewriter.setPosition(columnTwo, rowFour).write('0')
		typewriter.setPosition(columnThree, rowFour).write('<')
	}
}