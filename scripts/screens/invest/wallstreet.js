var Wallstreet = function()
{
	var size = 20
	var padding = 15

	var header = new Header()

	var top = header.height + padding * 3
	var itemSize = padding * 5

	var typewriter = new Typewriter()
		typewriter.setSize(size).setColor(black).setFont('bebas_neueregular').setBaseline('top')

	var canClick = false

	this.drawButton = function(buttonID)
	{
		typewriter.setAlignment('left').setColor(aqua).setPosition(padding, top + itemSize * (buttonID)).write(investmentOptions[buttonID].name)
		typewriter.setAlignment('left').setColor(black).setPosition(padding, top + itemSize * (buttonID) + padding * 1.5).write('bought 0 times')

		typewriter.setAlignment('right').setColor(lime).setPosition(l.room.width - padding, top + itemSize * (buttonID)).write('$' + investmentOptions[buttonID].minimum)
		typewriter.setAlignment('right').setColor(gray).setPosition(l.room.width - padding, top + itemSize * (buttonID) + padding * 1.5).write(investmentOptions[buttonID].risk + '% risk over ' + investmentOptions[buttonID].wait + ' hours')
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
			if (money >= investmentOptions[index].price && !displayMenu)
			{
				money -= investmentOptions[index].price
				social += investmentOptions[index].points

				investmentOptions[index].purchased = true
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

		var i = investmentOptions.length
		while (i--)
		{
			this.drawButton(i)
		}
	}
}