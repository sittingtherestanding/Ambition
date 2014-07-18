var Header = function()
{
	var padding = 15

	var sizeTitle = 15

	var typewriter = new Typewriter()
		typewriter.setColor(secondaryColor)

	var storeButton = new Entity()
		storeButton.setPosition(0, 0)
				   .setSize(l.room.width, sizeTitle * 3)

	this.watch = function()
	{
		if (mouse.checkLeftClicked(storeButton))
		{
			currentScreen = 'store'
		}
	}

	this.draw = function()
	{
		this.watch()

		typewriter.setSize(sizeTitle).setPosition(padding, padding).setAlignment('left').write('$ ' + money)
		typewriter.setSize(sizeTitle).setPosition(l.room.width / 2, padding).setAlignment('center').write(jobs[promotion])
		typewriter.setSize(sizeTitle).setPosition(l.room.width - padding, padding).setAlignment('right').write('SSP ' + social)
	}
}