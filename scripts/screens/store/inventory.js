var Inventory = function()
{
	var size = 20
	var padding = 15

	var typewriter = new Typewriter()
		typewriter.setSize(size).setColor(secondaryColor)

	var canClick = true

	this.drawButton = function(buttonID, row)
	{
		typewriter.setPosition(padding, (padding * 3) * (row + 1)).write(inventoryItems[buttonID])
		typewriter.setAlignment('right').setPosition(l.room.width - padding, (padding * 3) * (row + 1)).write(inventoryPoints[buttonID] + ' SSP for $' + inventoryPrices[buttonID])
	}

	this.watch = function()
	{
		if (mouse.leftClick && canClick)
		{
			canClick = false

			var clickedID = Math.floor(mouse.y / (padding * 3)) - 1

			if (money >= inventoryPrices[clickedID])
			{
				money -= inventoryPrices[clickedID]
			}
		}
	}

	this.purchase = function()
	{

	}

	this.draw = function()
	{
		if (!mouse.leftClick)
		{
			canClick = true
		}

		this.watch()

		this.drawButton(0, 0)
		this.drawButton(1, 1)
		this.drawButton(2, 2)
		this.drawButton(3, 3)
		this.drawButton(4, 4)
		this.drawButton(5, 5)
	}
}