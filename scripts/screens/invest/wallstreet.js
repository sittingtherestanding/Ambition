var Wallstreet = function()
{
	var cupboard = new Cupboard()

	var size = 20
	var padding = 15 * l.retina

	var header = new Header()

	var top = header.height + padding * 3
	var itemSize = padding * 6

	var typewriter = new Typewriter()
		typewriter.setSize(l.retina * size).setColor(black).setFont('BebasNeue').setBaseline('top')
	var tool = new Tool()

	var canTouch = false

	this.drawButton = function(buttonID)
	{
		if (investmentTimes[buttonID] > 0)
		{
			typewriter.setAlignment('left').setColor(yellow).setPosition(padding, top + itemSize * (buttonID)).write(investmentOptions[buttonID].name)
		}
		else
		{
			if (investmentOptions[buttonID].price <= money)
			{
				typewriter.setColor(aqua)
			}
			else
			{
				typewriter.setColor(gray)
			}

			typewriter.setAlignment('left').setPosition(padding, top + itemSize * (buttonID)).write(investmentOptions[buttonID].name)
		}

		typewriter.setAlignment('right').setColor(lime).setPosition(l.room.width - padding, top + itemSize * (buttonID)).write('$' + investmentOptions[buttonID].price)

		if (investmentOptions[buttonID].wait == 1)
		{
 			typewriter.setAlignment('left').setColor(silver).setPosition(padding, top + itemSize * (buttonID) + padding * 1.5).write(investmentOptions[buttonID].risk + '% risk for a ' + investmentOptions[buttonID].interest + '% return after 1 hr')
		}
		else if (investmentOptions[buttonID].wait > 0)
		{
 			typewriter.setAlignment('left').setColor(silver).setPosition(padding, top + itemSize * (buttonID) + padding * 1.5).write(investmentOptions[buttonID].risk + '% risk for a ' + investmentOptions[buttonID].interest + '% return after ' + investmentOptions[buttonID].wait + ' hrs')
		}
		else
		{
 			typewriter.setAlignment('left').setColor(silver).setPosition(padding, top + itemSize * (buttonID) + padding * 1.5).write(investmentOptions[buttonID].risk + '% risk for a ' + investmentOptions[buttonID].interest + '% return')
		}

		if (investmentOptions[buttonID].bought == 1)
		{
			typewriter.setAlignment('left').setColor(black).setPosition(padding, top + itemSize * (buttonID) + padding * 3).write('bought ' + investmentOptions[buttonID].bought + ' time')
		}
		else
		{
			typewriter.setAlignment('left').setColor(black).setPosition(padding, top + itemSize * (buttonID) + padding * 3).write('bought ' + investmentOptions[buttonID].bought + ' times')
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
				else
				{
					investmentOptions[index].failed = true
				}

				saveStorage()
			}
		}

			this.winLottery = function(index)
			{
				var increase = investmentOptions[index].price * investmentOptions[index].interest
				money += increase
				makeItRain(increase)

				saveStorage()

				investmentOptions[index].returned = true
			}

		this.invest = function(index)
		{
			if (investmentOptions[index] && money >= investmentOptions[index].price && !investmentTimers[index].time)
			{
				investmentOptions[index].bought++

				investmentTimers[index].start()
				investmentTimes[index] = investmentTimers[index].time

				pusher.notify('Your investment finished!', investmentOptions.wait * 60  * 60)

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
						var secondsLeft = (investmentOptions[i].wait * 60 * 60) - Math.ceil(investmentTimers[i].check() / 1000)
						var minutesLeft = (investmentOptions[i].wait * 60) - Math.ceil(investmentTimers[i].check() / 1000 / 60)
						var hoursLeft = Math.ceil(minutesLeft / 60 * 10) / 10

						if (minutesLeft < 1)
						{
							investmentHeader = secondsLeft + ' seconds until next return'
						}
						else if (minutesLeft == 1)
						{
							investmentHeader = '1 minute until next return'
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
							var increase = investmentOptions[i + 1].price + Math.round(investmentOptions[i + 1].price / 100 * investmentOptions[i + 1].interest)

							makeItRain(increase)
							money += increase

							investmentOptions[i + 1].returned = true

							investmentTimers[i + 1].clear()
							investmentTimes[i+ 1] = 0
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