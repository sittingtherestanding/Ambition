// Save data loaded at bottom of file

var cupboard = new Cupboard()

var currentScreen = 'earn'

var money = 0 // A straight int keeping track of your bank balance

var social = 0 // A straight int keeping track of your SSP

var jobLevel = 0 // The 'jobs' index marking your current job level
var promotionLevel = 0 // The 'jobs' index marking your current promotion level

var solved = 0

var investmentTimes = new Array()
var investmentTimers = new Array()

var i = investmentOptions.length
while (i--)
{
	investmentTimes[i] = 0 // Save the timer start times alone
	investmentTimers[i] = new Timer()
}

var loadStorage = function()
{
	cupboard.load('currentScreen')

	cupboard.load('money')
	cupboard.load('social')
	cupboard.load('jobLevel')
	cupboard.load('promotionLevel')
	cupboard.load('inventoryItems')
	cupboard.load('investmentOptions')
	cupboard.load('solved')
	cupboard.load('investmentTimes')

	if (cupboard.get('investmentTimes'))
	{
		var i = investmentOptions.length // Load the timer start times into the timer objects
		while (i--)
		{
			investmentTimers[i].time = investmentTimes[i]
		}
	}

	if (solved % 10 == 0) // "Fix" a bug that allowed you to get interest upon every reload if paused at the right time
	{
		solved += 0.00001
	}
}

var saveStorage = function()
{
	cupboard.save('currentScreen', currentScreen)

	cupboard.save('money', money)
	cupboard.save('social', social)
	cupboard.save('jobLevel', jobLevel)
	cupboard.save('promotionLevel', promotionLevel)

	cupboard.save('inventoryItems', inventoryItems)
	cupboard.save('investmentOptions', investmentOptions)

	cupboard.save('solved', solved)

	cupboard.save('investmentTimes', investmentTimes)
}

loadStorage()