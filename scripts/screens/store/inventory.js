var Inventory = function()
{
	var clipper = new Clipper()

	var size = 20
	var padding = 15

	var typewriter = new Typewriter()
		typewriter.setSize(size).setColor(black).setFont('bebas_neueregular')
	// var mouse = new Mouse()

	var canClick = true

	var dragger = new Entity()
		dragger.setPosition(0, padding)
			   .setSize(l.room.width, l.room.height - padding, true)

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
		// mouse.checkDrag(dragger)
		dragger.debug()

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