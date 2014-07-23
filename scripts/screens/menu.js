var Menu = function()
{
	var header = new Header()

	var backgroundColor = yellow
	var buttonColor = maroon
	var color = white
	var activeColor = lime
	var padding = 16
	var height = 100
	var solveButtonY = header.height + padding
	var storeButtonY = solveButtonY + height + padding
	var investButtonY = storeButtonY + height + padding
	var size = 40

	var pencil = new Pencil()
	var typewriter = new Typewriter()
		typewriter.setFont('bebas_neueregular').setSize(size)

	this.watch = function()
	{
		if (displayMenu)
		{
			if (mouse.leftClick)
			{
				if (mouse.x > padding && mouse.x < l.room.width - padding)
				{
					if (mouse.y > solveButtonY && mouse.y < solveButtonY + height)
					{
						currentScreen = 'solve'
						displayMenu = false
					}
					else if (mouse.y > storeButtonY && mouse.y < storeButtonY + height)
					{
						currentScreen = 'store'
						displayMenu = false
					}
					else if (mouse.y > investButtonY && mouse.y < investButtonY + height)
					{
						currentScreen = 'invest'
						displayMenu = false
					}
				}
			}
		}
	}

	this.draw = function()
	{
		this.watch()

		if (displayMenu)
		{
			pencil.setPosition(0, header.height).setSize(l.room.width, padding * 4 + height * 3).setColor(backgroundColor).fillRectangle() // Menu background

			pencil.setPosition(padding, solveButtonY).setSize(l.room.width - padding * 2, height).setColor(buttonColor).fillRectangle() // Solve button background
			pencil.setPosition(padding, storeButtonY).setSize(l.room.width - padding * 2, height).setColor(buttonColor).fillRectangle() // Store button background
			pencil.setPosition(padding, investButtonY).setSize(l.room.width - padding * 2, height).setColor(buttonColor).fillRectangle() // Invest button background
		
			if (currentScreen == 'solve')
			{
				typewriter.setColor(activeColor)
			}
			else
			{
				typewriter.setColor(color)
			}

			typewriter.setPosition(l.room.width / 2, solveButtonY + height / 2 - size / 1.5).setAlignment('center').write('solve')

			if (currentScreen == 'store')
			{
				typewriter.setColor(activeColor)
			}
			else
			{
				typewriter.setColor(color)
			}

			typewriter.setPosition(l.room.width / 2, storeButtonY + height / 2 - size / 1.5).setAlignment('center').write('store')

			if (currentScreen == 'invest')
			{
				typewriter.setColor(activeColor)
			}
			else
			{
				typewriter.setColor(color)
			}

			typewriter.setPosition(l.room.width / 2, investButtonY + height / 2 - size / 1.5).setAlignment('center').write('invest')
		}
	}
}