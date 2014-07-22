var Inventory = function()
{
	var size = 20
	var padding = 15

	var yPosition = padding

	var typewriter = new Typewriter()
		typewriter.setSize(size).setColor(black).setFont('bebas_neueregular')
	// var mouse = new Mouse()

	var canClick = true

	this.drawButton = function(buttonID, row)
	{
		typewriter.setPosition(padding, yPosition + padding * 3 * (row + 1)).write(inventoryItems[buttonID])
		typewriter.setAlignment('right').setPosition(l.room.width - padding, yPosition + padding * 3 * (row + 1)).write(inventoryPoints[buttonID] + ' SSP for $' + inventoryPrices[buttonID])
	}

	this.watch = function()
	{
		if (mouse.leftClick && canClick)
		{
			canClick = false

			var clickedID = Math.floor(mouse.y / yPosition) - 1

			this.purchase(clickedID)
		}
	}

		this.purchase = function(id)
		{
			if (money >= inventoryPrices[id])
			{
				money -= inventoryPrices[id]
				social += inventoryPoints[id]
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