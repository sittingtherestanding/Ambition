var Notifier = function()
{
	var header = new Header()

	var backgroundColor = yellow
	var color = white
	var padding = 20
	var size = 40
	var height = 120
	var life = 1500

	var notification = undefined

	var pencil = new Pencil()
	var typewriter = new Typewriter()
		typewriter.setSize(size).setColor(color).setFont('bebas_neueregular')

	this.notify = function(message)
	{
		notification = message

		setTimeout(function()
		{
			notification = undefined
		}, life)
	}

	this.watch = function() // Watch for promotions and raises
	{
		if (social >= jobs[jobLevel].points[promotionLevel + 1] && promotionLevel == 2)
		{
			jobLevel++
			promotionLevel = 0

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
			pencil.setPosition(padding, header.height + padding).setSize(l.room.width - padding * 2, height).setColor(backgroundColor).fillRectangle()
			typewriter.setPosition(l.room.width / 2, header.height + padding + height / 3.5).setAlignment('center').setColor(black).setSize(size).write(notification)
		}
	}
}