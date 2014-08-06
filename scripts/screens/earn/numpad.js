var Numpad = function()
{
	var self = this

	var pencil = new Pencil()
	var tool = new Tool()
	var typewriter = new Typewriter()
		typewriter.setSize(l.retina * 50).setAlignment('center').setColor(black).setFont('BebasNeue').setBaseline('middle')
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

	var pressedButton = new Entity()
		pressedButton.setSprite('images/pressed.png')
			   		 .setPosition(columnOne, rowOne)
			   		 .setStretch(buttonSize, buttonSize)
			   		 .setOpacity(0)

	var numberOne = new Entity()
		numberOne.setSprite('images/one.png')
				 .setStretch(buttonSize, buttonSize, true, true)
				 .setPosition(columnOne, rowOne)

	var numberTwo = new Entity()
		numberTwo.setSprite('images/two.png')
				 .setStretch(buttonSize, buttonSize, true, true)
				 .setPosition(columnTwo, rowOne)

	var numberThree = new Entity()
		numberThree.setSprite('images/three.png')
				   .setStretch(buttonSize, buttonSize, true, true)
				   .setPosition(columnThree, rowOne)

	var numberFour = new Entity()
		numberFour.setSprite('images/four.png')
				  .setStretch(buttonSize, buttonSize, true, true)
				  .setPosition(columnOne, rowTwo)

	var numberFive = new Entity()
		numberFive.setSprite('images/five.png')
				  .setStretch(buttonSize, buttonSize, true, true)
				  .setPosition(columnTwo, rowTwo)

	var numberSix = new Entity()
		numberSix.setSprite('images/six.png')
				 .setStretch(buttonSize, buttonSize, true, true)
				 .setPosition(columnThree, rowTwo)

	var numberSeven = new Entity()
		numberSeven.setSprite('images/seven.png')
				   .setStretch(buttonSize, buttonSize, true, true)
				   .setPosition(columnOne, rowThree)

	var numberEight = new Entity()
		numberEight.setSprite('images/eight.png')
				   .setStretch(buttonSize, buttonSize, true, true)
				   .setPosition(columnTwo, rowThree)

	var numberNine = new Entity()
		numberNine.setSprite('images/nine.png')
				  .setStretch(buttonSize, buttonSize, true, true)
				  .setPosition(columnThree, rowThree)

	var numberZero = new Entity()
		numberZero.setSprite('images/zero.png')
				  .setStretch(buttonSize, buttonSize, true, true)
				  .setPosition(columnTwo, rowFour)

	var buttonClear = new Entity()
		buttonClear.setSprite('images/clear.png')
				   .setStretch(buttonSize, buttonSize, true, true)
				   .setPosition(columnOne, rowFour)

	var buttonDelete = new Entity()
		buttonDelete.setSprite('images/delete.png')
					.setStretch(buttonSize, buttonSize, true, true)
					.setPosition(columnThree, rowFour)

	var canTouch = true

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

				saveStorage()

				self.generateProblem()

				game.setColor(aqua)
			}, 350)
		}

			this.makeItRain = function(count)
			{
				while (count--)
				{
					var dollar = new Entity()
						dollar.setSprite('images/dollar.png')
							  .setPosition(tool.random(l.room.width / 6, l.room.width - l.room.width / 6), l.room.height)
							  .setAnchor(25 * l.retina, 12 * l.retina)
							  .setStretch(tool.random(50 * l.retina, 100 * l.retina), tool.random(25 * l.retina, 50 * l.retina))
							  .setFriction(0)
							  .spin(tool.random(-6, 6))
							  .pushTowardDegree(tool.random(130, 50), tool.random(15, 20))
					rain.add(dollar)
				}
			}

	this.watch = function()
	{
		// Check button presses
		if (!displayMenu && canTouch)
		{
			if (finger.touching)
			{
				canTouch = false

				if (finger.checkTouched(numberOne))
				{
					this.movePressedButton(numberOne)

					this.addInput('1')
				}

				if (finger.checkTouched(numberTwo))
				{
					this.movePressedButton(numberTwo)

					this.addInput('2')
				}

				if (finger.checkTouched(numberThree))
				{
					this.movePressedButton(numberThree)

					this.addInput('3')
				}

				if (finger.checkTouched(numberFour))
				{
					this.movePressedButton(numberFour)

					this.addInput('4')
				}

				if (finger.checkTouched(numberFive))
				{
					this.movePressedButton(numberFive)

					this.addInput('5')
				}

				if (finger.checkTouched(numberSix))
				{
					this.movePressedButton(numberSix)

					this.addInput('6')
				}

				if (finger.checkTouched(numberSeven))
				{
					this.movePressedButton(numberSeven)

					this.addInput('7')
				}

				if (finger.checkTouched(numberEight))
				{
					this.movePressedButton(numberEight)

					this.addInput('8')
				}

				if (finger.checkTouched(numberNine))
				{
					this.movePressedButton(numberNine)

					this.addInput('9')
				}

				if (finger.checkTouched(numberZero))
				{
					this.movePressedButton(numberZero)

					this.addInput('0')
				}

				if (finger.checkTouched(buttonClear))
				{
					this.movePressedButton(buttonClear)

					userInput = '?'
				}

				if (finger.checkTouched(buttonDelete))
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

		if (!finger.touching)
		{
			canTouch = true
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
			typewriter.setAlignment('center').setPosition(l.room.width / 2, problemPosition).write(numbers[0] + ' x ' + numbers[1] + ' = ' + userInput)
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
			typewriter.setAlignment('center').setPosition(l.room.width / 2, problemPosition).write(numbers[0] + ' x ' + numbers[1] + ' = ' + userInput)
		}
		else if (problemType == 11)
		{
			typewriter.setAlignment('center').setPosition(l.room.width / 2, problemPosition).write(numbers[0] + ' / ' + numbers[1] + ' = ' + userInput)
		}

		pencil.setPosition(0, this.top).setColor(black).setSize(l.retina * l.room.width, l.room.height - this.top).fillRectangle()

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

		pressedButton.draw()
	}
}