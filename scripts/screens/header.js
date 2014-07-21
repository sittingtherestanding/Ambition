var Header = function()
{
	var padding = 15

	var sizeTitle = 15

	var typewriter = new Typewriter()
		typewriter.setColor(secondaryColor)

	var switchButton = new Entity()
		switchButton.setPosition(0, 0)
					.setSize(l.room.width, sizeTitle * 3)

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

		typewriter.setSize(sizeTitle).setPosition(padding, padding).setAlignment('left').write('$' + money)
		typewriter.setSize(sizeTitle).setPosition(l.room.width / 2, padding).setAlignment('center').write(jobs[promotion])
		typewriter.setSize(sizeTitle).setPosition(l.room.width - padding, padding).setAlignment('right').write('SSP ' + social)
	}
}