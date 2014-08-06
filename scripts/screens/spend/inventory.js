var Inventory = function()
{
	var size = 20
	var padding = 15 * l.retina

	var header = new Header()

	var top = header.height + padding * 3
	var itemSize = padding * 5

	var typewriter = new Typewriter()
		typewriter.setSize(l.retina * size).setColor(black).setFont('BebasNeue').setBaseline('top')
	var pencil = new Pencil()

	var canTouch = false

	var scrollPosition = 0
	var scrollSpeed = 5
	var scrollLimit = inventoryItems.length * (padding * 3)

	var scrollbarHeight = 12 * l.retina * 3 // So it's a bit bigger than the header
	var scrollbarColor = black

	var scrollDown = new Entity()
		scrollDown.setSprite('images/scroll_down.png')
				  .setSize(50, 25)
				  .setAnchor(25, 12)
				  .setPosition(l.room.width / 4, l.room.height - scrollbarHeight / 2)

	var scrollUp = new Entity()
		scrollUp.setSprite('images/scroll_up.png')
				.setSize(50, 25)
				.setAnchor(25, 12)
				.setPosition(l.room.width / 4 * 3, l.room.height - scrollbarHeight / 2)

	this.drawButton = function(buttonID)
	{
		typewriter.setAlignment('left').setColor(aqua).setPosition(padding, scrollPosition + top + itemSize * (buttonID)).write(inventoryItems[buttonID].name)

		if (inventoryItems[buttonID].bought != 1)
		{
			typewriter.setAlignment('left').setColor(black).setPosition(padding, scrollPosition + top + itemSize * (buttonID) + padding * 1.5).write('bought ' + inventoryItems[buttonID].bought + ' times')
		}
		else
		{
			typewriter.setAlignment('left').setColor(black).setPosition(padding, scrollPosition + top + itemSize * (buttonID) + padding * 1.5).write('bought ' + inventoryItems[buttonID].bought + ' time')
		}

		typewriter.setAlignment('right').setColor(lime).setPosition(l.room.width - padding, scrollPosition + top + itemSize * (buttonID)).write('$' + inventoryItems[buttonID].price)
		typewriter.setAlignment('right').setColor(gray).setPosition(l.room.width - padding, scrollPosition + top + itemSize * (buttonID) + padding * 1.5).write(inventoryItems[buttonID].points + ' SSP')
	}

	this.watch = function()
	{
		// Scroll
		if (finger.checkTouched(scrollDown))
		{
			if (scrollPosition > -scrollLimit)
			{
				scrollPosition -= scrollSpeed
			}
		}
		else if (finger.checkTouched(scrollUp))
		{
			if (scrollPosition < 0)
			{
				scrollPosition += scrollSpeed
			}
		}
		else if (finger.touching && canTouch) // Buy things
		{
			canTouch = false

			var index = Math.floor((scrollPosition + finger.y - top) / itemSize)

			if (index >= 0) // Make it so we can't click on the header to buy things
			{
				this.purchase(index)
			}
		}
	}

		this.purchase = function(index)
		{
			if (money >= inventoryItems[index].price && !displayMenu)
			{
				money -= inventoryItems[index].price
				social += inventoryItems[index].points

				inventoryItems[index].bought++

				saveStorage()
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

		var i = inventoryItems.length
		while (i--)
		{
			this.drawButton(i)
		}

		pencil.setPosition(0, l.room.height - scrollbarHeight).setSize(l.room.width, scrollbarHeight).setColor(scrollbarColor).fillRectangle()

		scrollDown.draw()
		scrollUp.draw()
	}
}