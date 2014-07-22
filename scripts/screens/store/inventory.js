var Inventory = function()
{
	var size = 20
	var padding = 15

	var header = new Header()

	var yPosition = header.height + padding

	var typewriter = new Typewriter()
		typewriter.setSize(size).setColor(black).setFont('bebas_neueregular')
	// var mouse = new Mouse()

	var canClick = true

	this.drawButton = function(buttonID, row)
	{
		typewriter.setPosition(padding, yPosition + padding * 3 * (row)).write(inventoryItems[buttonID].name)
		typewriter.setAlignment('right').setPosition(l.room.width - padding, yPosition + padding * 3 * (row)).write(inventoryItems[buttonID].points + ' SSP for $' + inventoryItems[buttonID].price)
	}

	this.watch = function()
	{
		if (mouse.leftClick && canClick)
		{
			canClick = false

			var index = Math.floor(mouse.y / yPosition)

			this.purchase(index)
		}
	}

		this.purchase = function(index)
		{
			if (money >= inventoryItems[index].price)
			{
				money -= inventoryItems[index].price
				social += inventoryItems[index].points
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
			this.drawButton(i, i)
		}
	}
}