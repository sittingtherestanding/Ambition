var PromotionWatcher = function()
{
	this.watch = function()
	{
		if (social >= points[job * 3 + promotionLevel + 1] && promotionLevel == 2)
		{
			currentScreen = 'promotion'
			job++
			promotionLevel = 0

			setTimeout(function()
			{
				game.color = mainColor
				currentScreen = 'solving'
			}, 1500)
		}

		if (social >= points[job * 3 + promotionLevel + 1])
		{
			currentScreen = 'raise'
			promotionLevel++

			setTimeout(function()
			{
				game.color = mainColor
				currentScreen = 'solving'
			}, 1500)
		}

		console.log(job, promotionLevel)
	}
}