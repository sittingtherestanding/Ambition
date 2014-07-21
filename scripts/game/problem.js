var Problem = function()
{
	var self = this

	var size = 50
	var yPosition = size * 1.5

	var tool = new Tool()
	var typewriter = new Typewriter()
		typewriter.setSize(size).setAlignment('center')

	var numbers = new Array()

	this.generate = function()
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
			game.setColor(successColor)

			setTimeout(function()
			{
				answered++
				money += salaries[job * 3 + promotionLevel]

				self.generate()

				game.setColor(mainColor)
			}, 750)
		}

	this.draw = function()
	{
		if (job == 0)
		{
			typewriter.setAlignment('center').setPosition(l.room.width / 2, yPosition).write(numbers[0] + ' + ' + numbers[1] + ' =')
		}
		else if (job == 1)
		{
			typewriter.setAlignment('center').setPosition(l.room.width / 2, yPosition).write(numbers[0] + ' - ' + numbers[1] + ' =')
		}

		typewriter.setAlignment('center').setPosition(l.room.width / 2, yPosition + size * 1.5).write(userInput)
	}
}