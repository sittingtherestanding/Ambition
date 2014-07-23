var Inventory = function()
{
	var size = 20
	var padding = 15

	var header = new Header()

	var top = header.height + padding * 2
	var itemSize = padding * 3

	var opacity = 1
	var blurred = 0.35

	var typewriter = new Typewriter()
		typewriter.setSize(size).setColor(black).setFont('bebas_neueregular')

	var canClick = true

	this.drawButton = function(buttonID)
	{
		if (!inventoryItems[buttonID].purchased)
		{
			opacity = 1
		}
		else
		{
			opacity = blurred
		}

		typewriter.setOpacity(opacity).setPosition(padding, top + itemSize * (buttonID)).write(inventoryItems[buttonID].name)
		typewriter.setOpacity(opacity).setAlignment('right').setPosition(l.room.width - padding, top + itemSize * (buttonID)).write('$' + inventoryItems[buttonID].price + ' for ' + inventoryItems[buttonID].points + ' SSP')
	}

	this.watch = function()
	{
		if (mouse.leftClick && canClick)
		{
			canClick = false

			var index = Math.floor((mouse.y - header.height) / itemSize)

			if (index >= 0) // Make it so we can't click on the header to buy things
			{
				this.purchase(index)
			}
		}
	}

		this.purchase = function(index)
		{
			if (money >= inventoryItems[index].price && !inventoryItems[index].purchased)
			{
				money -= inventoryItems[index].price
				social += inventoryItems[index].points

				inventoryItems[index].purchased = true
			}
		}

	this.draw = function()
	{
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