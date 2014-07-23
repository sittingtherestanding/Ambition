var Notifier = function()
{
	var header = new Header()
	var numpad = new Numpad() // Used for regenerating problems on promotion

	var backgroundColor = yellow
	var color = maroon
	var initSize = 40
	var size = initSize
	var height = 120
	var opacity = 0.8
	var life = 1500

	var notification

	var pencil = new Pencil()
	var typewriter = new Typewriter()
		typewriter.setSize(size).setColor(color).setFont('bebas_neueregular')

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

		setTimeout(function()
		{
			notification = undefined
			size = initSize
		}, life)
	}

	this.watch = function() // Watch for promotions and raises
	{
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
			typewriter.setPosition(l.room.width / 2, l.room.height - height / 2 - size / 2).setAlignment('center').setColor(color).setSize(size).write(notification)
		}
	}
}