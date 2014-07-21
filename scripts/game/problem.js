var Problem = function()
{
	var self = this

	var size = 50
	var yPosition = size * 1.5
	var cap = 9

	var tool = new Tool()
	var typewriter = new Typewriter()
		typewriter.setSize(size).setAlignment('center')

	var first
	var second

	this.generate = function()
	{
		// Works only for addition for now
		first = Math.round(tool.random(0, cap))
		second = Math.round(tool.random(0, cap))

		userInput = '0'
	}

	this.check = function()
	{
		if (parseInt(userInput) == (first + second))
		{
			this.pass()
		}
	}

		this.pass = function()
		{
			game.setColor(successColor)

			setTimeout(function()
			{
				answered++
				money += salaries[salary * 3 + promotionLevel]

				self.generate()

				game.setColor(mainColor)
			}, 750)
		}

	this.draw = function()
	{
		typewriter.setAlignment('center').setPosition(l.room.width / 2, yPosition).write(first + ' + ' + second + ' =')
		typewriter.setAlignment('center').setPosition(l.room.width / 2, yPosition + size * 1.5).write(userInput)
	}
}