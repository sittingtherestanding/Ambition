var Raise = function()
{
	var size = 50

	var typewriter = new Typewriter()
		typewriter.setSize(size).setColor(yellow).setFont('bebas_neueregular')

	this.draw = function()
	{
		game.color = successColor

		typewriter.setAlignment('center').setPosition(l.room.width / 2, l.room.height / 2).write('RAISE')
	}
}