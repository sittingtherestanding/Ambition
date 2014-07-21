var Header = function()
{
	var padding = 12

	var sizeTitle = 20

	var typewriter = new Typewriter()
		typewriter.setColor(maroon).setFont('bebas_neueregular')
	var pencil = new Pencil()

	var switchButton = new Entity()
		switchButton.setPosition(0, 0)
					.setSize(l.room.width, padding * 2 + sizeTitle, true)

	var canClick = true

	this.watch = function()
	{
		if (canClick && mouse.leftClick)
		{
			canClick = false

			if (mouse.checkLeftClicked(switchButton))
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

		pencil.setPosition(0, 0).setSize(l.room.width, padding * 2 + sizeTitle).setColor(orange).fillRectangle()

		typewriter.setSize(sizeTitle).setPosition(padding, padding).setAlignment('left').write('$' + money)
		typewriter.setSize(sizeTitle).setPosition(l.room.width / 2, padding).setAlignment('center').write(jobs[job])
		typewriter.setSize(sizeTitle).setPosition(l.room.width - padding, padding).setAlignment('right').write('SSP ' + social)
	}
}