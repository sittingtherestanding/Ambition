var Notifier = function()
{
	var header = new Header()
	var numpad = new Numpad() // Used for regenerating problems on promotion

	var backgroundColor = yellow
	var color = maroon
	var size = 40
	var height = 120
	var opacity = 0.8
	var life = 1500

	var notification

	var canEarnInterest = true

	var pencil = new Pencil()
	var typewriter = new Typewriter()
		typewriter.setSize(size).setColor(color).setFont('bebas_neueregular').setBaseline('middle')

	var timer // Used for clearing the timer when a new notification is added to an existing one

	this.notify = function(message)
	{
		if (!notification)
		{
			notification = message
		}
		else
		{
			notification += ' + ' + message
			size -= 5
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

		var i = investmentOptions.length - 1
		while (i--)
		{
			if (investmentOptions[i + 1].returned) // Check if we got a return on our investment
			{
				investmentOptions[i + 1].returned = false

				this.notify('good investment')
			}
			else if (investmentOptions[i + 1].failed)
			{
				investmentOptions[i + 1].failed = false

				this.notify('bad investment')
			}
		}

		if (solved > 0 && solved % 10 == 0 && canEarnInterest)
		{
			canEarnInterest = false

			money += Math.round(money / 100)

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

			numpad.generateProblem()

			this.notify('promotion')
		}
		else if (social >= jobs[jobLevel].points[promotionLevel + 1])
		{
			promotionLevel++

			this.notify('raise')
		}
	}

	this.draw = function()
	{
		if (notification)
		{
			pencil.setPosition(0, l.room.height - height).setSize(l.room.width, height).setColor(backgroundColor).setOpacity(opacity).fillRectangle()
			typewriter.setPosition(l.room.width / 2, l.room.height - height / 2).setAlignment('center').setColor(color).setSize(size).write(notification)
		}
	}
}