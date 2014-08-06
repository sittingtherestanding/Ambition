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

	var currentItem = 0

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

	this.drawButton = function(i)
	{
		var buttonID = i + currentItem

		if (inventoryItems[buttonID])
		{
			if (inventoryItems[buttonID].price <= money)
			{
				typewriter.setAlignment('left').setColor(aqua).setPosition(padding, top + itemSize * (i)).write(inventoryItems[buttonID].name)
			}
			else
			{
				typewriter.setAlignment('left').setColor(gray).setPosition(padding, top + itemSize * (i)).write(inventoryItems[buttonID].name)
			}

			if (inventoryItems[buttonID].bought != 1)
			{
				typewriter.setAlignment('left').setColor(black).setPosition(padding, top + itemSize * (i) + padding * 1.5).write('bought ' + inventoryItems[buttonID].bought + ' times')
			}
			else
			{
				typewriter.setAlignment('left').setColor(black).setPosition(padding, top + itemSize * (i) + padding * 1.5).write('bought ' + inventoryItems[buttonID].bought + ' time')
			}

			typewriter.setAlignment('right').setColor(lime).setPosition(l.room.width - padding, top + itemSize * (i)).write('$' + inventoryItems[buttonID].price)
			typewriter.setAlignment('right').setColor(gray).setPosition(l.room.width - padding, top + itemSize * (i) + padding * 1.5).write(inventoryItems[buttonID].points + ' SSP')
		}
	}

	this.watch = function()
	{
		if (finger.touching && canTouch)
		{
			canTouch = false

			if (finger.y > l.room.height - scrollbarHeight) // Scroll
			{
				if (finger.x < l.room.width / 2)
				{
					if (currentItem < inventoryItems.length - 1)
					{
						currentItem++
					}
				}
				else
				{
					if (currentItem > 0)
					{
						currentItem--
					}
				}
			}
			else // Buy things
			{
				var index = currentItem + Math.floor((finger.y - top) / itemSize)

				if (index >= 0) // Make it so we can't click on the header to buy things
				{
					this.purchase(index)
				}
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

		// Draw buttons
		var i = Math.floor(l.room.height / itemSize)
		while (i--)
		{
			this.drawButton(i)
		}

		pencil.setPosition(0, l.room.height - scrollbarHeight).setSize(l.room.width, scrollbarHeight).setColor(scrollbarColor).fillRectangle()

		scrollDown.draw()
		scrollUp.draw()
	}
}