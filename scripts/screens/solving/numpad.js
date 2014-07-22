var Numpad = function()
{
	var size = 30
	var entityPadding = size / 2 // Use entities as invisible buttons
	var xPadding = size * 1.8
	var yPadding = size * 2.25

	var columnOne = xPadding
	var columnTwo = l.room.width / 2
	var columnThree = l.room.width - xPadding

	var rowOne = l.room.height - yPadding * 4
	var rowTwo = l.room.height - yPadding * 3
	var rowThree = l.room.height - yPadding * 2
	var rowFour = l.room.height - yPadding

	var typewriter = new Typewriter()
		typewriter.setColor(maroon)
	var pencil = new Pencil()
	var problem = new Problem()
		problem.generate()

	var numberOne = new Entity()
		numberOne.setSprite('svg/one.svg')
				 .setPosition(columnOne, rowOne + entityPadding)
				 .setSize(size * 2, size * 2)
				 .setAnchor(size, size)

	var numberTwo = new Entity()
		numberTwo.setSprite('svg/two.svg')
				 .setPosition(columnTwo, rowOne + entityPadding)
				 .setSize(size * 2, size * 2)
				 .setAnchor(size, size)

	var numberThree = new Entity()
		numberThree.setSprite('svg/three.svg')
				   .setPosition(columnThree, rowOne + entityPadding)
				   .setSize(size * 2, size * 2)
				   .setAnchor(size, size)

	var numberFour = new Entity()
		numberFour.setSprite('svg/four.svg')
				  .setPosition(columnOne, rowTwo + entityPadding)
				  .setSize(size * 2, size * 2)
				  .setAnchor(size, size)

	var numberFive = new Entity()
		numberFive.setSprite('svg/five.svg')
				  .setPosition(columnTwo, rowTwo + entityPadding)
				  .setSize(size * 2, size * 2)
				  .setAnchor(size, size)

	var numberSix = new Entity()
		numberSix.setSprite('svg/six.svg')
				 .setPosition(columnThree, rowTwo + entityPadding)
				 .setSize(size * 2, size * 2)
				 .setAnchor(size, size)

	var numberSeven = new Entity()
		numberSeven.setSprite('svg/seven.svg')
				   .setPosition(columnOne, rowThree + entityPadding)
				   .setSize(size * 2, size * 2)
				   .setAnchor(size, size)

	var numberEight = new Entity()
		numberEight.setSprite('svg/eight.svg')
				   .setPosition(columnTwo, rowThree + entityPadding)
				   .setSize(size * 2, size * 2)
				   .setAnchor(size, size)

	var numberNine = new Entity()
		numberNine.setSprite('svg/nine.svg')
				  .setPosition(columnThree, rowThree + entityPadding)
				  .setSize(size * 2, size * 2)
				  .setAnchor(size, size)

	var numberZero = new Entity()
		numberZero.setSprite('svg/zero.svg')
				  .setPosition(columnTwo, rowFour + entityPadding)
				  .setSize(size * 2, size * 2)
				  .setAnchor(size, size)

	var buttonClear = new Entity()
		buttonClear.setSprite('svg/clear.svg')
				   .setPosition(columnOne, rowFour + entityPadding)
				   .setSize(size * 2, size * 2)
				   .setAnchor(size, size)

	var buttonDelete = new Entity()
		buttonDelete.setSprite('svg/delete.svg')
					.setPosition(columnThree, rowFour + entityPadding)
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

		pencil.setPosition(0, rowOne - yPadding).setColor(black).setSize(l.room.width, l.room.height - (rowOne - yPadding)).fillRectangle()

		numberOne.draw()
		numberTwo.draw()
		numberThree.draw()
		numberFour.draw()
		numberFive.draw()
		numberSix.draw()
		numberSeven.draw()
		numberEight.draw()
		numberNine.draw()
		buttonClear.draw()
		buttonDelete.draw()

		pencil.setPosition(0, rowOne - yPadding).setColor(maroon).setSize(l.room.width, yPadding * 0.75).fillRectangle()

		typewriter.setColor(game.color).setAlignment('left').setFont('liquid_crystalregular').setSize(size * 1.5).setPosition(xPadding / 4, rowOne - yPadding).write(userInput)
	}
}