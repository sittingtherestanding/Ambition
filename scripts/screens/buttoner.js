var Buttoner = function()
{
	var size = 20
	var padding = 15

	var header = new Header()

	var top = header.height + padding * 3
	var itemSize = padding * 5

	var typewriter = new Typewriter()
		typewriter.setSize(size).setColor(black).setFont('bebas_neueregular').setBaseline('top')

	var canClick = false

	this.draw = function(buttonID)
	{
		typewriter.setAlignment('left').setColor(aqua).setPosition(padding, top + itemSize * (buttonID)).write(inventoryItems[buttonID].name)
		typewriter.setAlignment('left').setColor(black).setPosition(padding, top + itemSize * (buttonID) + padding * 1.5).write('purchased 0 times')

		typewriter.setAlignment('right').setColor(lime).setPosition(l.room.width - padding, top + itemSize * (buttonID)).write('$' + inventoryItems[buttonID].price)
		typewriter.setAlignment('right').setColor(gray).setPosition(l.room.width - padding, top + itemSize * (buttonID) + padding * 1.5).write(inventoryItems[buttonID].points + ' SSP')
	}

	this.watch = function()
	{
		if (!mouse.leftClick)
		{
			canClick = true
		}
		else if (mouse.leftClick && canClick)
		{
			canClick = false

			return Math.floor((mouse.y - top) / itemSize)
		}
	}
}