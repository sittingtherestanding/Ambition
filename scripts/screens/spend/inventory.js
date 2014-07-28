var Inventory = function()
{
	var buttoner = new Buttoner()

	this.purchase = function(index)
	{
		console.log(index)

		if (money >= inventoryItems[index].price && !displayMenu)
		{
			money -= inventoryItems[index].price
			social += inventoryItems[index].points

			inventoryItems[index].purchased = true
		}
	}

	this.draw = function()
	{
		game.color = maroon

		if (buttoner.watch)
		{
			this.purchase(buttoner.watch)
		}

		var i = inventoryItems.length
		while (i--)
		{
			this.drawButton(i)
		}
	}
}