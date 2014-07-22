var Inventory = function()
{
	var size = 20
	var padding = 15

	var header = new Header()

	var top = header.height + padding
	var itemSize = padding * 3

	var typewriter = new Typewriter()
		typewriter.setSize(size).setColor(black).setFont('bebas_neueregular')

	var canClick = true

	this.drawButton = function(buttonID, row)
	{
		typewriter.setPosition(padding, top + itemSize * (row)).write(inventoryItems[buttonID].name)
		typewriter.setAlignment('right').setPosition(l.room.width - padding, top + itemSize * (row)).write(inventoryItems[buttonID].points + ' SSP for $' + inventoryItems[buttonID].price)
	}

	this.watch = function()
	{
		if (mouse.leftClick && canClick)
		{
			canClick = false

			var index = Math.floor((mouse.y - header.height) / itemSize)
			console.log(index)

			if (index >= 0) // Make it so we can't click on the header to buy things
			{
				this.purchase(index)
			}
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