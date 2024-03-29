var Header = function()
{
	var padding = 10 * l.retina
	var size = 18 * l.retina
	this.height = padding * 3
	var yText = this.height / 2

	var typewriter = new Typewriter()
		typewriter.setFont('BebasNeue').setBaseline('middle')
	var pencil = new Pencil()

	var canTouch = true

	this.watch = function()
	{
		if (canTouch && finger.touching)
		{
			canTouch = false

			if (finger.y < this.height)
			{
				if (!displayMenu)
				{
					displayMenu = true
				}
				else
				{
					displayMenu = false
				}
			}
		}
		else if (!finger.touching)
		{
			canTouch = true
		}
	}

	this.draw = function()
	{
		this.watch()

		pencil.setPosition(0, 0).setSize(l.room.width, this.height).setColor(orange).fillRectangle()

		if (money >= 1000000)
		{
			var displayMoney = Math.round(money / 1000000 * 100) / 100 + 'M'
		}
		else if (money >= 1000)
		{
			var displayMoney = Math.round(money / 1000 * 100) / 100 + 'K'
		}
		else
		{
			var displayMoney = money
		}

		typewriter.setColor(maroon)
		typewriter.setSize(size).setPosition(padding, yText).setAlignment('left').write('$' + displayMoney)
		typewriter.setColor(yellow)
		typewriter.setSize(size).setPosition(l.room.width / 2, yText).setAlignment('center').write(jobs[jobLevel].name)
		
		if (social >= 1000000)
		{
			var displaySocial = Math.round(social / 1000000 * 100) / 100 + 'M'
		}
		else if (social >= 1000)
		{
			var displaySocial = Math.round(social / 1000 * 100) / 100 + 'K'
		}
		else
		{
			var displaySocial = social
		}

		typewriter.setColor(maroon)
		typewriter.setSize(size).setPosition(l.room.width - padding, yText).setAlignment('right').write(displaySocial + ' SSP')

		typewriter.setColor(gray).setSize(size).setPosition(l.room.width / 2, this.height + yText).setAlignment('center')

		if (currentScreen == 'earn')
		{
			if (solved == 1)
			{
				typewriter.write(Math.round(solved) + ' problem solved')
			}
			else
			{
				typewriter.write(Math.round(solved) + ' problems solved')
			}
		}
		else if (currentScreen == 'spend')
		{
			var toPromotion
			var raiseOrPromotion

			if (promotionLevel == 2)
			{
				toPromotion = jobs[jobLevel + 1].points[0]

				raiseOrPromotion = 'promotion'
			}
			else
			{
				toPromotion = jobs[jobLevel].points[promotionLevel + 1]

				raiseOrPromotion = 'raise'
			}

			if (raiseOrPromotion == 'promotion')
			{
				typewriter.write(toPromotion - social + ' SSP to next promotion')
			}
			else if (raiseOrPromotion == 'raise')
			{
				typewriter.write(toPromotion - social + ' SSP to next raise')
			}
		}
	}
}