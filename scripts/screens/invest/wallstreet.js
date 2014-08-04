var Wallstreet = function()
{
	var cupboard = new Cupboard()

	var size = 20
	var padding = 15

	var header = new Header()

	var top = header.height + padding * 3
	var itemSize = padding * 5

	if (cupboard.get('timers')) // Load if we have saved timers
	{
		this.timers = cupboard.get('timers')
	}
	else
	{
		this.timers = new Array()
	}

	var i = investmentOptions.length
	while (i--)
	{
		this.timers[i] = new Timer()
	}

	var typewriter = new Typewriter()
		typewriter.setSize(size).setColor(black).setFont('bebas_neueregular').setBaseline('top')
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
 			typewriter.setAlignment('right').setColor(gray).setPosition(l.room.width - padding, top + itemSize * (buttonID) + padding * 1.5).write(investmentOptions[buttonID].risk + '% immediate risk')
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
			else if (index == 1)
			{
				this.invest(index)
			}
		}
	}

		this.lottery = function(index)
		{
			if (money >= investmentOptions[index].price && !displayMenu)
			{
				money -= investmentOptions[index].price

				investmentOptions[index].bought++

				if (Math.round(tool.random(0, 1000)) == 0)
				{
					this.winLottery()
				}

				saveStorage()
			}
		}

			this.winLottery = function(index)
			{
				money += investmentOptions[index].price * investmentOptions[index].interest

				investmentOptions[index].returned = true
			}

		this.invest = function(index)
		{
			if (money >= investmentOptions[index].price && !this.timers[index].time)
			{
				investmentOptions[index].bought++

				this.timers[index].start()

				cupboard.set('timers', this.timers) // Save to localStorage

				money -= investmentOptions[index].price

				saveStorage()
			}
		}

			this.checkInvestments = function()
			{
				// Check for running timers
				if (this.timers[1].time)
				{
					var minutesLeft = (investmentOptions[1].wait * 60) - Math.round(this.timers[1].check() / 1000 / 60)
					var hoursLeft = Math.round(minutesLeft / 60 * 10) / 10

					if (minutesLeft == 1)
					{
						investmentHeader = minutesLeft + ' minute until next return'
					}
					else if (minutesLeft < 60)
					{
						investmentHeader = minutesLeft + ' minutes until next return'
					}
					else if (hoursLeft == 1)
					{
						investmentHeader = hoursLeft + ' hour until next return'
					}
					else
					{
						investmentHeader = hoursLeft + ' hours until next return'
					}
				}
				else
				{
					investmentHeader = 'no current investments'
				}

				var i = investmentOptions.length - 1
				while (i--)
				{
					// Check for finished timers
					if (this.timers[i + 1].check() >= investmentOptions[i + 1].wait * 1000 * 60 * 60)
					{
						if (Math.round(tool.random(0, 100 / investmentOptions[i + 1].risk)) !== 0)
						{
							money += investmentOptions[i + 1].price + Math.round(investmentOptions[i + 1].price / 100 * investmentOptions[i + 1].interest)

							investmentOptions[i + 1].returned = true

							this.timers[i + 1].clear()
						}
						else
						{
							investmentOptions[i + 1].failed = true
						}

						saveStorage()
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