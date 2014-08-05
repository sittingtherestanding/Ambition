var Wallstreet = function()
{
	var cupboard = new Cupboard()

	var size = 20
	var padding = 15 * l.retina

	var header = new Header()

	var top = header.height + padding * 3
	var itemSize = padding * 5

	var typewriter = new Typewriter()
		typewriter.setSize(l.retina * size).setColor(black).setFont('BebasNeue').setBaseline('top')
	var tool = new Tool()

	var canTouch = false

	this.drawButton = function(buttonID)
	{
		if (investmentTimers[buttonID])
		{
			typewriter.setAlignment('left').setColor(gray).setPosition(padding, top + itemSize * (buttonID)).write(investmentOptions[buttonID].name)
		}
		else
		{
			typewriter.setAlignment('left').setColor(aqua).setPosition(padding, top + itemSize * (buttonID)).write(investmentOptions[buttonID].name)
		}

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
		if (finger.touching && canTouch)
		{
			canTouch = false

			var index = Math.floor((finger.y - top) / itemSize)

			if (index == 0) // Make it so we can't click on the header to buy things
			{
				this.lottery(index)
			}
			else if (index > 0)
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
			if (money >= investmentOptions[index].price && !investmentTimers[index].time)
			{
				investmentOptions[index].bought++

				investmentTimers[index].start()
				investmentTimes[index] = investmentTimers[index].time

				cupboard.save('investmentTimes', investmentTimes) // Save to localStorage

				money -= investmentOptions[index].price

				saveStorage()
			}
		}

			this.checkInvestments = function()
			{
				// Check for running timers
				for (var i = 1; i < investmentTimers.length; i++)
				{
					if (investmentTimers[i].time)
					{
						var minutesLeft = (investmentOptions[i].wait * 60) - Math.round(investmentTimers[i].check() / 1000 / 60)
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

						break
					}
					else
					{
						investmentHeader = 'no current investments'
					}
				}

				var i = investmentOptions.length - 1
				while (i--)
				{
					// Check for finished timers
					if (investmentTimers[i + 1].check() >= investmentOptions[i + 1].wait * 1000 * 60 * 60)
					{
						if (Math.round(tool.random(0, 100 / investmentOptions[i + 1].risk)) !== 0)
						{
							money += investmentOptions[i + 1].price + Math.round(investmentOptions[i + 1].price / 100 * investmentOptions[i + 1].interest)

							investmentOptions[i + 1].returned = true

							investmentTimers[i + 1].clear()
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

		if (!finger.touching)
		{
			canTouch = true
		}

		this.watch()

		var i = investmentOptions.length
		while (i--)
		{
			this.drawButton(i)
		}
	}
}