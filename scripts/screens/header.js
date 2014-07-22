var Header = function()
{
	var padding = 10
	var topPadding = 5
	var size = 17
	var bottomPadding = 10
	this.height = topPadding + size + bottomPadding

	var typewriter = new Typewriter()
		typewriter.setColor(maroon).setFont('bebas_neueregular')
	var pencil = new Pencil()

	var canClick = true

	this.watch = function()
	{
		if (canClick && mouse.leftClick)
		{
			canClick = false

			if (mouse.y < this.height)
			{
				if (currentScreen == 'store')
				{
					currentScreen = 'solving'
				}
				else
				{
					currentScreen = 'store'
				}
			}
		}
		else if (!mouse.leftClick)
		{
			canClick = true
		}
	}

	this.draw = function()
	{
		this.watch()

		pencil.setPosition(0, 0).setSize(l.room.width, this.height).setColor(orange).fillRectangle()

		typewriter.setSize(size).setPosition(padding, topPadding).setAlignment('left').write('$' + money)
		typewriter.setSize(size).setPosition(l.room.width / 2, topPadding).setAlignment('center').write(jobs[job])
		typewriter.setSize(size).setPosition(l.room.width - padding, topPadding).setAlignment('right').write('SSP ' + social)
	}
}