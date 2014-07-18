var UI = function()
{
	var padding = 15

	var sizeTitle = 15

	var typewriter = new Typewriter()
		typewriter.setColor(secondaryColor)

	this.draw = function()
	{
		typewriter.setSize(sizeTitle).setPosition(padding, padding).setAlignment('left').write('$ ' + money)
		typewriter.setSize(sizeTitle).setPosition(l.room.width / 2, padding).setAlignment('center').write(jobs[promotion])
		typewriter.setSize(sizeTitle).setPosition(l.room.width - padding, padding).setAlignment('right').write('SSP ' + social)
	}
}