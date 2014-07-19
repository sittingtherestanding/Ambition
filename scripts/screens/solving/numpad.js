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
		typewriter.setColor(secondaryColor).setSize(size)
	var problem = new Problem()
		problem.generate()

	var numberOne = new Entity()
		numberOne.setPosition(columnOne, rowOne + entityPadding)
				 .setSize(size * 2, size * 2)
				 .setAnchor(size, size)

	var numberTwo = new Entity()
		numberTwo.setPosition(columnTwo, rowOne + entityPadding)
				 .setSize(size * 2, size * 2)
				 .setAnchor(size, size)

	var numberThree = new Entity()
		numberThree.setPosition(columnThree, rowOne + entityPadding)
				   .setSize(size * 2, size * 2)
				   .setAnchor(size, size)

	var numberFour = new Entity()
		numberFour.setPosition(columnOne, rowTwo + entityPadding)
				  .setSize(size * 2, size * 2)
				  .setAnchor(size, size)

	var numberFive = new Entity()
		numberFive.setPosition(columnTwo, rowTwo + entityPadding)
				  .setSize(size * 2, size * 2)
				  .setAnchor(size, size)

	var numberSix = new Entity()
		numberSix.setPosition(columnThree, rowTwo + entityPadding)
				 .setSize(size * 2, size * 2)
				 .setAnchor(size, size)

	var numberSeven = new Entity()
		numberSeven.setPosition(columnOne, rowThree + entityPadding)
				   .setSize(size * 2, size * 2)
				   .setAnchor(size, size)

	var numberEight = new Entity()
		numberEight.setPosition(columnTwo, rowThree + entityPadding)
				   .setSize(size * 2, size * 2)
				   .setAnchor(size, size)

	var numberNine = new Entity()
		numberNine.setPosition(columnThree, rowThree + entityPadding)
				  .setSize(size * 2, size * 2)
				  .setAnchor(size, size)

	var numberZero = new Entity()
		numberZero.setPosition(columnTwo, rowFour + entityPadding)
				  .setSize(size * 2, size * 2)
				  .setAnchor(size, size)

	var buttonClear = new Entity()
		buttonClear.setPosition(columnOne, rowFour + entityPadding)
				   .setSize(size * 2, size * 2)
				   .setAnchor(size, size)

	var buttonDelete = new Entity()
		buttonDelete.setPosition(columnThree, rowFour + entityPadding)
					.setSize(size * 2, size * 2)
					.setAnchor(size, size)

	var canClick = true

	this.watch = function()
	{
		if (canClick && mouse.leftClick)
		{
			canClick = false

			if (mouse.checkLeftClicked(numberOne))
			{
				this.addInput('1')
			}

			if (mouse.checkLeftClicked(numberTwo))
			{
				this.addInput('2')
			}

			if (mouse.checkLeftClicked(numberThree))
			{
				this.addInput('3')
			}

			if (mouse.checkLeftClicked(numberFour))
			{
				this.addInput('4')
			}

			if (mouse.checkLeftClicked(numberFive))
			{
				this.addInput('5')
			}

			if (mouse.checkLeftClicked(numberSix))
			{
				this.addInput('6')
			}

			if (mouse.checkLeftClicked(numberSeven))
			{
				this.addInput('7')
			}

			if (mouse.checkLeftClicked(numberEight))
			{
				this.addInput('8')
			}

			if (mouse.checkLeftClicked(numberNine))
			{
				this.addInput('9')
			}

			if (mouse.checkLeftClicked(numberZero))
			{
				this.addInput('0')
			}

			if (mouse.checkLeftClicked(buttonClear))
			{
				userInput = '0'
			}

			if (mouse.checkLeftClicked(buttonDelete))
			{
				if (userInput.length > 1)
				{
					userInput = userInput.substring(0, userInput.length - 1)
				}
				else
				{
					userInput = '0'
				}
			}
		}
	}

		this.addInput = function(input)
		{
			if (userInput == '0')
			{
				userInput = input
			}
			else
			{
				userInput += input
			}

			problem.check()
		}

	this.draw = function()
	{
		if (!mouse.leftClick)
		{
			canClick = true
		}

		this.watch()

		problem.draw()

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