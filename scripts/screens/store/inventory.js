var Inventory = function()
{
	var size = 20
	var padding = 15

	var typewriter = new Typewriter()
		typewriter.setSize(size).setColor(secondaryColor)

	this.draw = function()
	{
		typewriter.setPosition(padding, padding * 3).write(inventoryItems[0])
	}
}