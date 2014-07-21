var Problem = function()
{
	var self = this

	var size = 50
	var yPosition = size * 2

	var tool = new Tool()
	var typewriter = new Typewriter()
		typewriter.setSize(size).setAlignment('center').setColor(black).setFont('bebas_neueregular')

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
			game.setColor(lime)

			setTimeout(function()
			{
				answered++
				money += salaries[job * 3 + promotionLevel]

				self.generate()

				game.setColor(aqua)
			}, 750)
		}

	this.draw = function()
	{
		if (job == 0)
		{
			typewriter.setAlignment('center').setPosition(l.room.width / 2, yPosition).write(numbers[0] + ' + ' + numbers[1])
		}
		else if (job == 1)
		{
			typewriter.setAlignment('center').setPosition(l.room.width / 2, yPosition).write(numbers[0] + ' - ' + numbers[1])
		}
	}
}