var Header = function()
{
	var padding = 10
	var size = 18
	this.height = padding * 3
	var yText = this.height / 2

	var typewriter = new Typewriter()
		typewriter.setFont('bebas_neueregular').setBaseline('middle')
	var pencil = new Pencil()

	var canClick = true

	this.watch = function()
	{
		if (canClick && mouse.leftClick)
		{
			canClick = false

			if (mouse.y < this.height)
			{
				if (!displayMenu)
				{
					displayMenu = true
				}
				else
				{
					displayMenu = false
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

		typewriter.setColor(maroon)
		typewriter.setSize(size).setPosition(padding, yText).setAlignment('left').write('$' + money)
		typewriter.setSize(size).setPosition(l.room.width / 2, yText).setAlignment('center').write(jobs[jobLevel].name)
		typewriter.setSize(size).setPosition(l.room.width - padding, yText).setAlignment('right').write('SSP ' + social)

		typewriter.setColor(gray).setSize(size).setPosition(l.room.width / 2, this.height + yText).setAlignment('center')

		if (currentScreen == 'solve' || currentScreen == 'invest')
		{
			if (solved == 1)
			{
				typewriter.write(solved + ' problem solved')
			}
			else
			{
				typewriter.write(solved + ' problems solved')
			}
		}
		else if (currentScreen == 'store')
		{
			var toPromotion

			if (promotionLevel == 2)
			{
				toPromotion = jobs[jobLevel + 1].points[0]
			}
			else
			{
				toPromotion = jobs[jobLevel].points[promotionLevel + 1]
			}

			typewriter.write(toPromotion + ' SSP to next promotion')
		}
	}
}