var Problem = function()
{
	var size = 50
	var yPosition = size * 1.5
	var cap = 50

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
	}

	this.check = function()
	{
		/*
		if (userInput == problem)
		{
			this.pass()
		}
		else
		{
			this.fail()
		}
		*/
	}

		this.pass = function()
		{
			solved++
		}

		this.fail = function()
		{
			// Stuff
		}

	this.draw = function()
	{
		typewriter.setPosition(l.room.width / 2, yPosition).write(first + ' + ' + second + ' =')
		typewriter.setPosition(l.room.width / 2, yPosition + size * 1.5).write(userInput)
	}
}