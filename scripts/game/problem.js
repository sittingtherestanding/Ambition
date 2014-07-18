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
			setTimeout(function()
			{
				answered++
				money += salaries[promotion][raise]

				self.generate()
			}, 750)
		}

	this.draw = function()
	{
		typewriter.setPosition(l.room.width / 2, yPosition).write(first + ' + ' + second + ' =')
		typewriter.setPosition(l.room.width / 2, yPosition + size * 1.5).write(userInput)
	}
}