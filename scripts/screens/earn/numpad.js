var Numpad = function()
{
	var self = this

	var pencil = new Pencil()
	var tool = new Tool()
	var typewriter = new Typewriter()
		typewriter.setSize(50).setAlignment('center').setColor(black).setFont('bebas_neueregular').setBaseline('middle')
	var header = new Header()

	var buttonModifier = 3.1 // Larger numbers equal smaller buttons (3 is minimum)
	var buttonSize = l.room.width / buttonModifier
	var padding = (l.room.width / 2 - ((l.room.width / buttonModifier) / 2) - buttonSize) / 2

	var columnOne = 0 + padding
	var columnTwo = l.room.width / 2 - buttonSize / 2
	var columnThree = l.room.width - buttonSize - padding

	this.top = l.room.height - buttonSize * 4 - padding * 5
	var rowOne = l.room.height - buttonSize * 4 - padding * 4
	var rowTwo = l.room.height - buttonSize * 3 - padding * 3
	var rowThree = l.room.height - buttonSize * 2 - padding * 2
	var rowFour = l.room.height - buttonSize - padding

	var problemPosition = header.height + (this.top - header.height) / 2

	var rain = new Group()

	var pressedButton = new Entity()
		pressedButton.setSprite('images/pressed.png')
			   		 .setPosition(columnOne, rowOne)
			   		 .setStretch(buttonSize, buttonSize)
			   		 .setOpacity(0)

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
		if (jobLevel >= 14)
		{
			promblemType = 12
		}
		else if (jobLevel == 13)
		{
			var shoe = 8
			var cap = 11

			problemType = Math.round(tool.random(shoe, cap))
		}
		else if (jobLevel > 8)
		{
			problemType = jobLevel - 1
		}
		else if (jobLevel == 8)
		{
			var shoe = 2
			var cap = 5

			problemType = Math.round(tool.random(shoe, cap))
		}
		else
		{
			problemType = jobLevel
		}

		if (problemType == 0) // Single-digit addition
		{
			var cap = 9

			numbers[0] = Math.round(tool.random(0, cap))
			numbers[1] = Math.round(tool.random(0, cap))
		}
		else if (problemType == 1) // Single-digit subtraction (no negatives)
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
		else if (problemType == 2) // Double-digit addition
		{
			var cap = 25

			numbers[0] = Math.round(tool.random(0, cap))
			numbers[1] = Math.round(tool.random(0, cap))
		}
		else if (problemType == 3) // Double-digit subtraction (no negatives)
		{
			var cap = 20

			numbers[0] = Math.round(tool.random(0, cap))
			numbers[1] = Math.round(tool.random(0, cap))

			while (numbers[0] - numbers[1] < 0)
			{
				numbers[0] = Math.round(tool.random(0, cap))
				numbers[1] = Math.round(tool.random(0, cap))
			}
		}
		else if (problemType == 4) // Single-digit multiplication
		{
			var cap = 9

			numbers[0] = Math.round(tool.random(0, cap))
			numbers[1] = Math.round(tool.random(0, cap))
		}
		else if (problemType == 5) // Single-digit division
		{
			var cap = 9

			numbers[0] = Math.round(tool.random(0, cap))
			numbers[1] = Math.round(tool.random(0, cap))

			while (numbers[0] / numbers[1] % 1 !== 0)
			{
				numbers[0] = Math.round(tool.random(0, cap))
				numbers[1] = Math.round(tool.random(0, cap))
			}
		}
		else if (problemType == 6) // Double-digit addition
		{
			var shoe = 25
			var cap = 99

			numbers[0] = Math.round(tool.random(shoe, cap))
			numbers[1] = Math.round(tool.random(shoe, cap))
		}
		else if (problemType == 7) // Double-digit subtraction
		{
			var shoe = 25
			var cap = 99

			numbers[0] = Math.round(tool.random(shoe, cap))
			numbers[1] = Math.round(tool.random(shoe, cap))

			while (numbers[0] - numbers[1] < 0)
			{
				numbers[0] = Math.round(tool.random(shoe, cap))
				numbers[1] = Math.round(tool.random(shoe, cap))
			}
		}
		else if (problemType == 8) // Triple-digit addition
		{
			var shoe = 100
			var cap = 999

			numbers[0] = Math.round(tool.random(shoe, cap))
			numbers[1] = Math.round(tool.random(shoe, cap))
		}
		else if (problemType == 9) // Triple-digit subtraction
		{
			var shoe = 100
			var cap = 999

			numbers[0] = Math.round(tool.random(shoe, cap))
			numbers[1] = Math.round(tool.random(shoe, cap))

			while (numbers[0] - numbers[1] < 0)
			{
				numbers[0] = Math.round(tool.random(shoe, cap))
				numbers[1] = Math.round(tool.random(shoe, cap))
			}
		}
		else if (problemType == 10) // Double-digit multiplication
		{
			var shoe = 10
			var cap = 25

			numbers[0] = Math.round(tool.random(0, cap))
			numbers[1] = Math.round(tool.random(0, cap))
		}
		else if (problemType == 11) // Double-digit division
		{
			var shoe = 10
			var cap = 25

			numbers[0] = Math.round(tool.random(0, cap))
			numbers[1] = Math.round(tool.random(0, cap))

			while (numbers[0] / numbers[1] % 1 !== 0)
			{
				numbers[0] = Math.round(tool.random(0, cap))
				numbers[1] = Math.round(tool.random(0, cap))
			}
		}
		else if (problemType == 12) // Quadrupal-digit addition
		{
			var shoe = 1000
			var cap = 9999

			numbers[0] = Math.round(tool.random(shoe, cap))
			numbers[1] = Math.round(tool.random(shoe, cap))
		}

		userInput = '?'
	}

	this.check = function()
	{
		if (problemType == 0)
		{
			if (parseInt(userInput) == (numbers[0] + numbers[1]))
			{
				this.pass()
			}
		}
		else if (problemType == 1)
		{
			if (parseInt(userInput) == (numbers[0] - numbers[1]))
			{
				this.pass()
			}
		}
		else if (problemType == 2)
		{
			if (parseInt(userInput) == (numbers[0] + numbers[1]))
			{
				this.pass()
			}
		}
		else if (problemType == 3)
		{
			if (parseInt(userInput) == (numbers[0] - numbers[1]))
			{
				this.pass()
			}
		}
		else if (problemType == 4)
		{
			if (parseInt(userInput) == (numbers[0] * numbers[1]))
			{
				this.pass()
			}
		}
		else if (problemType == 5)
		{
			if (parseInt(userInput) == (numbers[0] / numbers[1]))
			{
				this.pass()
			}
		}
		else if (problemType == 6)
		{
			if (parseInt(userInput) == (numbers[0] + numbers[1]))
			{
				this.pass()
			}
		}
		else if (problemType == 7)
		{
			if (parseInt(userInput) == (numbers[0] - numbers[1]))
			{
				this.pass()
			}
		}
		else if (problemType == 8)
		{
			if (parseInt(userInput) == (numbers[0] + numbers[1]))
			{
				this.pass()
			}
		}
		else if (problemType == 9)
		{
			if (parseInt(userInput) == (numbers[0] - numbers[1]))
			{
				this.pass()
			}
		}
		else if (problemType == 10)
		{
			if (parseInt(userInput) == (numbers[0] * numbers[1]))
			{
				this.pass()
			}
		}
		else if (problemType == 11)
		{
			if (parseInt(userInput) == (numbers[0] / numbers[1]))
			{
				this.pass()
			}
		}
	}

		this.pass = function()
		{
			game.setColor(lime)

			this.makeItRain(jobs[jobLevel].salary[promotionLevel])

			setTimeout(function()
			{
				solved++
				money += jobs[jobLevel].salary[promotionLevel]

				self.generateProblem()

				game.setColor(aqua)
			}, 350)
		}

			this.makeItRain = function(count)
			{
				while (count--)
				{
					var dollar = new Entity()
						dollar.setSprite('svg/dollar.svg')
							  .setPosition(tool.random(l.room.width / 6, l.room.width - l.room.width / 6), l.room.height)
							  .setAnchor(25, 12)
							  .setStretch(tool.random(50, 100), tool.random(25, 50))
							  .setFriction(0)
							  .spin(tool.random(-6, 6))
							  .pushTowardDegree(tool.random(140, 40), tool.random(8, 12))
					rain.add(dollar)
				}
			}

	this.watch = function()
	{
		// Check button presses
		if (canClick && mouse.leftClick && !displayMenu)
		{
			canClick = false

			if (mouse.checkLeftClicked(numberOne))
			{
				this.movePressedButton(numberOne)

				this.addInput('1')
			}

			if (mouse.checkLeftClicked(numberTwo))
			{
				this.movePressedButton(numberTwo)

				this.addInput('2')
			}

			if (mouse.checkLeftClicked(numberThree))
			{
				this.movePressedButton(numberThree)

				this.addInput('3')
			}

			if (mouse.checkLeftClicked(numberFour))
			{
				this.movePressedButton(numberFour)

				this.addInput('4')
			}

			if (mouse.checkLeftClicked(numberFive))
			{
				this.movePressedButton(numberFive)

				this.addInput('5')
			}

			if (mouse.checkLeftClicked(numberSix))
			{
				this.movePressedButton(numberSix)

				this.addInput('6')
			}

			if (mouse.checkLeftClicked(numberSeven))
			{
				this.movePressedButton(numberSeven)

				this.addInput('7')
			}

			if (mouse.checkLeftClicked(numberEight))
			{
				this.movePressedButton(numberEight)

				this.addInput('8')
			}

			if (mouse.checkLeftClicked(numberNine))
			{
				this.movePressedButton(numberNine)

				this.addInput('9')
			}

			if (mouse.checkLeftClicked(numberZero))
			{
				this.movePressedButton(numberZero)

				this.addInput('0')
			}

			if (mouse.checkLeftClicked(buttonClear))
			{
				this.movePressedButton(buttonClear)

				userInput = '?'
			}

			if (mouse.checkLeftClicked(buttonDelete))
			{
				this.movePressedButton(buttonDelete)

				if (userInput.length > 1)
				{
					userInput = userInput.substring(0, userInput.length - 1)
				}
				else
				{
					userInput = '?'
				}
			}
		}
	}

		this.movePressedButton = function(button)
		{
			pressedButton.opacity = 1
			pressedButton.x = button.x
			pressedButton.y = button.y
		}

		this.addInput = function(input)
		{
			if (userInput == '?')
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
		game.color = aqua

		if (!mouse.leftClick)
		{
			canClick = true
			pressedButton.opacity = 0
		}

		this.watch()

		if (problemType == 0)
		{
			typewriter.setAlignment('center').setPosition(l.room.width / 2, problemPosition).write(numbers[0] + ' + ' + numbers[1] + ' = ' + userInput)
		}
		else if (problemType == 1)
		{
			typewriter.setAlignment('center').setPosition(l.room.width / 2, problemPosition).write(numbers[0] + ' - ' + numbers[1] + ' = ' + userInput)
		}
		else if (problemType == 2)
		{
			typewriter.setAlignment('center').setPosition(l.room.width / 2, problemPosition).write(numbers[0] + ' + ' + numbers[1] + ' = ' + userInput)
		}
		else if (problemType == 3)
		{
			typewriter.setAlignment('center').setPosition(l.room.width / 2, problemPosition).write(numbers[0] + ' - ' + numbers[1] + ' = ' + userInput)
		}
		else if (problemType == 4)
		{
			typewriter.setAlignment('center').setPosition(l.room.width / 2, problemPosition).write(numbers[0] + ' * ' + numbers[1] + ' = ' + userInput)
		}
		else if (problemType == 5)
		{
			typewriter.setAlignment('center').setPosition(l.room.width / 2, problemPosition).write(numbers[0] + ' / ' + numbers[1] + ' = ' + userInput)
		}
		else if (problemType == 6)
		{
			typewriter.setAlignment('center').setPosition(l.room.width / 2, problemPosition).write(numbers[0] + ' + ' + numbers[1] + ' = ' + userInput)
		}
		else if (problemType == 7)
		{
			typewriter.setAlignment('center').setPosition(l.room.width / 2, problemPosition).write(numbers[0] + ' - ' + numbers[1] + ' = ' + userInput)
		}
		else if (problemType == 8)
		{
			typewriter.setAlignment('center').setPosition(l.room.width / 2, problemPosition).write(numbers[0] + ' + ' + numbers[1] + ' = ' + userInput)
		}
		else if (problemType == 9)
		{
			typewriter.setAlignment('center').setPosition(l.room.width / 2, problemPosition).write(numbers[0] + ' - ' + numbers[1] + ' = ' + userInput)
		}
		else if (problemType == 10)
		{
			typewriter.setAlignment('center').setPosition(l.room.width / 2, problemPosition).write(numbers[0] + ' * ' + numbers[1] + ' = ' + userInput)
		}
		else if (problemType == 11)
		{
			typewriter.setAlignment('center').setPosition(l.room.width / 2, problemPosition).write(numbers[0] + ' / ' + numbers[1] + ' = ' + userInput)
		}

		pencil.setPosition(0, this.top).setColor(black).setSize(l.room.width, l.room.height - this.top).fillRectangle()

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

		pressedButton.draw().banish()

		rain.applyPhysics().draw()
	}
}