var Inventory = function()
{
	var size = 20
	var padding = 15

	var header = new Header()

	var top = header.height + padding * 3
	var itemSize = padding * 5

	var typewriter = new Typewriter()
		typewriter.setSize(l.retina * size).setColor(black).setFont('bebas').setBaseline('top')

	var canClick = false

	this.drawButton = function(buttonID)
	{
		typewriter.setAlignment('left').setColor(aqua).setPosition(padding, top + itemSize * (buttonID)).write(inventoryItems[buttonID].name)

		if (inventoryItems[buttonID].bought != 1)
		{
			typewriter.setAlignment('left').setColor(black).setPosition(padding, top + itemSize * (buttonID) + padding * 1.5).write('bought ' + inventoryItems[buttonID].bought + ' times')
		}
		else
		{
			typewriter.setAlignment('left').setColor(black).setPosition(padding, top + itemSize * (buttonID) + padding * 1.5).write('bought ' + inventoryItems[buttonID].bought + ' time')
		}

		typewriter.setAlignment('right').setColor(lime).setPosition(l.room.width - padding, top + itemSize * (buttonID)).write('$' + inventoryItems[buttonID].price)
		typewriter.setAlignment('right').setColor(gray).setPosition(l.room.width - padding, top + itemSize * (buttonID) + padding * 1.5).write(inventoryItems[buttonID].points + ' SSP')
	}

	this.watch = function()
	{
		if (mouse.leftClick && canClick)
		{
			canClick = false

			var index = Math.floor((mouse.y - top) / itemSize)

			if (index >= 0) // Make it so we can't click on the header to buy things
			{
				this.purchase(index)
			}
		}
	}

		this.purchase = function(index)
		{
			if (money >= inventoryItems[index].price && !displayMenu)
			{
				money -= inventoryItems[index].price
				social += inventoryItems[index].points

				inventoryItems[index].bought++

				saveStorage()
			}
		}

	this.draw = function()
	{
		game.color = maroon

		if (!mouse.leftClick)
		{
			canClick = true
		}

		this.watch()

		var i = inventoryItems.length
		while (i--)
		{
			this.drawButton(i)
		}
	}
}