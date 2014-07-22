var Numpad = function()
{
	var self = this

	var pencil = new Pencil()
	var tool = new Tool()
	var typewriter = new Typewriter()
		typewriter.setSize(50).setAlignment('center').setColor(black).setFont('bebas_neueregular')

	var header = new Header()

	var buttonModifier = 3.25 // Larger numbers equal smaller buttons (3 is minimum)
	var buttonSize = l.room.width / buttonModifier
	var padding = (l.room.width / 2 - ((l.room.width / buttonModifier) / 2) - buttonSize) / 2

	var columnOne = 0 + padding
	var columnTwo = l.room.width / 2 - buttonSize / 2
	var columnThree = l.room.width - buttonSize - padding

	var rowZero = l.room.height - buttonSize * 4 - padding * 5
	var rowOne = l.room.height - buttonSize * 4 - padding * 4
	var rowTwo = l.room.height - buttonSize * 3 - padding * 3
	var rowThree = l.room.height - buttonSize * 2 - padding * 2
	var rowFour = l.room.height - buttonSize - padding

	var numbers = new Array()
	var problemPosition = (rowZero - header.height) / 2

	var numberOne = new Entity()
		numberOne.setSprite('svg/one.svg')
				 .setStretch(buttonSize, buttonSize, true, true)
				 .setPosition(columnOne, rowOne)

	var numberTwo = new Entity()
		numberTwo.setSprite('svg/two.svg')
				 .setStretch(buttonSize, buttonSize, true, true)
				 .setPosition(columnTwo, rowOne)

	var numberThree = new Entity()
		numberThree.setSprite('svg/three.svg')
				   .setStretch(buttonSize, buttonSize, true, true)
				   .setPosition(columnThree, rowOne)

	var numberFour = new Entity()
		numberFour.setSprite('svg/four.svg')
				  .setStretch(buttonSize, buttonSize, true, true)
				  .setPosition(columnOne, rowTwo)

	var numberFive = new Entity()
		numberFive.setSprite('svg/five.svg')
				  .setStretch(buttonSize, buttonSize, true, true)
				  .setPosition(columnTwo, rowTwo)

	var numberSix = new Entity()
		numberSix.setSprite('svg/six.svg')
				 .setStretch(buttonSize, buttonSize, true, true)
				 .setPosition(columnThree, rowTwo)

	var numberSeven = new Entity()
		numberSeven.setSprite('svg/seven.svg')
				   .setStretch(buttonSize, buttonSize, true, true)
				   .setPosition(columnOne, rowThree)

	var numberEight = new Entity()
		numberEight.setSprite('svg/eight.svg')
				   .setStretch(buttonSize, buttonSize, true, true)
				   .setPosition(columnTwo, rowThree)

	var numberNine = new Entity()
		numberNine.setSprite('svg/nine.svg')
				  .setStretch(buttonSize, buttonSize, true, true)
				  .setPosition(columnThree, rowThree)

	var numberZero = new Entity()
		numberZero.setSprite('svg/zero.svg')
				  .setStretch(buttonSize, buttonSize, true, true)
				  .setPosition(columnTwo, rowFour)

	var buttonClear = new Entity()
		buttonClear.setSprite('svg/clear.svg')
				   .setStretch(buttonSize, buttonSize, true, true)
				   .setPosition(columnOne, rowFour)

	var buttonDelete = new Entity()
		buttonDelete.setSprite('svg/delete.svg')
					.setStretch(buttonSize, buttonSize, true, true)
					.setPosition(columnThree, rowFour)

	var canClick = true

	this.generateProblem = function()
	{
		if (job == 0) // Single-digit addition
		{
			var cap = 9

			numbers[0] = Math.round(tool.random(0, cap))
			numbers[1] = Math.round(tool.random(0, cap))
		}
		else if (job == 1) // Single-digit subtraction (no negatives)
		{
			var cap = 9

			numbers[0] = Math.round(tool.random(0, cap))
			numbers[1] = Math.round(tool.random(0, cap))

			while (numbers[0] - numbers[1] < 0)
			{
				numbers[0] = Math.round(tool.random(0, cap))
				numbers[1] = Math.round(tool.random(0, cap))
			}
		}

		userInput = '0'
	}

	this.check = function()
	{
		if (job == 0)
		{
			if (parseInt(userInput) == (numbers[0] + numbers[1]))
			{
				this.pass()
			}
		}
		else if (job == 1)
		{
			if (parseInt(userInput) == (numbers[0] - numbers[1]))
			{
				this.pass()
			}
		}
	}

		this.pass = function()
		{
			game.setColor(lime)

			setTimeout(function()
			{
				answered++
				money += salaries[job * 3 + promotionLevel]

				self.generateProblem()

				game.setColor(aqua)
			}, 750)
		}

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

			this.check()
		}

	this.draw = function()
	{
		if (!mouse.leftClick)
		{
			canClick = true
		}

		this.watch()

		if (job == 0)
		{
			typewriter.setAlignment('center').setPosition(l.room.width / 2, problemPosition).write(numbers[0] + ' + ' + numbers[1] + ' = ' + userInput)
		}
		else if (job == 1)
		{
			typewriter.setAlignment('center').setPosition(l.room.width / 2, problemPosition).write(numbers[0] + ' - ' + numbers[1] + ' = ' + userInput)
		}

		pencil.setPosition(0, rowZero).setColor(black).setSize(l.room.width, l.room.height - rowZero).fillRectangle()

		numberOne.draw()
		numberTwo.draw()
		numberThree.draw()
		numberFour.draw()
		numberFive.draw()
		numberSix.draw()
		numberSeven.draw()
		numberEight.draw()
		numberNine.draw()
		numberZero.draw()
		buttonClear.draw()
		buttonDelete.draw()
	}
}