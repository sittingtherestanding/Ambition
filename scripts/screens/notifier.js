var Notifier = function()
{
	var header = new Header()
	var numpad = new Numpad() // Used for regenerating problems on promotion

	var backgroundColor = yellow
	var color = maroon
	var initSize = 40 * l.retina
	var size = initSize
	var height = 80 * l.retina
	var opacity = 0.8
	var life = 1000

	var notification

	var canEarnInterest = true

	var pencil = new Pencil()
	var typewriter = new Typewriter()
		typewriter.setSize(size).setColor(color).setFont('BebasNeue').setBaseline('middle')

	var timer // Used for clearing the timer when a new notification is added to an existing one

	this.notify = function(message)
	{
		if (!notification)
		{
			size = initSize
			notification = message
		}
		else
		{
			notification += ' + ' + message

			if (size > initSize / 2)
			{
				size -= 5
			}
		}

		if (!timer)
		{
			timer = setTimeout(function()
			{
				notification = undefined
			}, life)
		}
		else
		{
			clearTimeout(timer)
			timer = setTimeout(function()
			{
				notification = undefined
			}, life)
		}
	}

	this.watch = function() // Watch for promotions and raises
	{
		if (investmentOptions[0].returned) // Check if we won the lottery
		{
			investmentOptions[0].returned = false

			this.notify('won lottery')
		}
		else if (investmentOptions[0].failed)
		{
			investmentOptions[0].failed = false

			this.notify('didn\'t win')
		}

		var i = investmentOptions.length - 1
		while (i--)
		{
			if (investmentOptions[i + 1].returned) // Check if we got a return on our investment
			{
				investmentOptions[i + 1].returned = false

				saveStorage()

				this.notify('good investment')
			}
			else if (investmentOptions[i + 1].failed)
			{
				investmentOptions[i + 1].failed = false

				saveStorage()

				this.notify('bad investment')
			}
		}

		if (solved > 0 && solved % 10 == 0 && canEarnInterest)
		{
			canEarnInterest = false

			var increase = Math.round(money / 100)

			money += increase
			makeItRain(increase)

			saveStorage()

			this.notify('interest')
		}
		else if (solved % 10 !== 0)
		{
			canEarnInterest = true
		}

		if (social >= jobs[jobLevel + 1].points[0] && promotionLevel == 2)
		{
			jobLevel++
			promotionLevel = 0

			saveStorage()

			numpad.generateProblem()

			this.notify('promotion')
		}
		else if (social >= jobs[jobLevel].points[promotionLevel + 1])
		{
			promotionLevel++

			saveStorage()

			this.notify('raise')
		}
	}

	this.draw = function()
	{
		if (notification)
		{
			pencil.setPosition(0, l.room.height - height).setSize(l.room.width, height).setColor(backgroundColor).setOpacity(opacity).fillRectangle()
			typewriter.setPosition(height / 4, l.room.height - height / 2).setAlignment('left').setColor(color).setSize(size).write(notification)
		}
	}
}