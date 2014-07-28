var Wallstreet = function()
{
	var size = 20
	var padding = 15

	var header = new Header()

	var top = header.height + padding * 3
	var itemSize = padding * 5

	var typewriter = new Typewriter()
		typewriter.setSize(size).setColor(black).setFont('bebas_neueregular').setBaseline('top')
	var timer = new Timer()
		timer.log()
	var tool = new Tool()

	var canClick = false

	this.drawButton = function(buttonID)
	{
		typewriter.setAlignment('left').setColor(aqua).setPosition(padding, top + itemSize * (buttonID)).write(investmentOptions[buttonID].name)

		if (investmentOptions[buttonID].bought == 1)
		{
			typewriter.setAlignment('left').setColor(black).setPosition(padding, top + itemSize * (buttonID) + padding * 1.5).write('bought ' + investmentOptions[buttonID].bought + ' time')
		}
		else
		{
			typewriter.setAlignment('left').setColor(black).setPosition(padding, top + itemSize * (buttonID) + padding * 1.5).write('bought ' + investmentOptions[buttonID].bought + ' times')
		}

		typewriter.setAlignment('right').setColor(lime).setPosition(l.room.width - padding, top + itemSize * (buttonID)).write('$' + investmentOptions[buttonID].price)

		if (investmentOptions[buttonID].wait == 1)
		{
 			typewriter.setAlignment('right').setColor(gray).setPosition(l.room.width - padding, top + itemSize * (buttonID) + padding * 1.5).write(investmentOptions[buttonID].risk + '% risk over ' + investmentOptions[buttonID].wait + ' hour')
		}
		else if (investmentOptions[buttonID].wait > 0)
		{
 			typewriter.setAlignment('right').setColor(gray).setPosition(l.room.width - padding, top + itemSize * (buttonID) + padding * 1.5).write(investmentOptions[buttonID].risk + '% risk over ' + investmentOptions[buttonID].wait + ' hours')
		}
		else
		{
 			typewriter.setAlignment('right').setColor(gray).setPosition(l.room.width - padding, top + itemSize * (buttonID) + padding * 1.5).write(investmentOptions[buttonID].risk + '% risk immediately')
		}
	}

	this.watch = function()
	{
		if (mouse.leftClick && canClick)
		{
			canClick = false

			var index = Math.floor((mouse.y - top) / itemSize)

			if (index == 0) // Make it so we can't click on the header to buy things
			{
				this.lottery(index)
			}
		}
	}

		this.lottery = function(index)
		{
			if (money >= investmentOptions[index].price && !displayMenu)
			{
				money -= investmentOptions[index].price

				investmentOptions[index].bought++

				if (Math.round(tool.random(0, 999)) == 0)
				{
					money += investmentOptions[index].price * investmentOptions[index].interest

					investmentOptions[index].returned = true
				}
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