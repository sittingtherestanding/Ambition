var cupboard = new Cupboard()

var money = 0 // A straight int keeping track of your bank balance

var social = 0 // A straight int keeping track of your SSP

var jobLevel = 0 // The 'jobs' index marking your current job level
var promotionLevel = 0 // The 'jobs' index marking your current promotion level

var solved = 0

var loadStorage = function()
{
	if (cupboard.get('money'))
	{
		money = cupboard.get('money')
	}
	
	if (cupboard.get('social'))
	{
		social = cupboard.get('social')
	}
	
	if (cupboard.get('jobLevel'))
	{
		jobLevel = cupboard.get('jobLevel')
	}

	if (cupboard.get('promotionLevel'))
	{
		promotionLevel = cupboard.get('promotionLevel')
	}

	if (cupboard.get('inventoryItems'))
	{
		inventoryItems = cupboard.get('inventoryItems')
	}

	if (cupboard.get('investmentOptions'))
	{
		investmentOptions = cupboard.get('investmentOptions')
	}

	if (cupboard.get('solved'))
	{
		solved = cupboard.get('solved')
	}
}

var saveStorage = function()
{
	cupboard.set('money', money)
	cupboard.set('social', social)
	cupboard.set('jobLevel', jobLevel)
	cupboard.set('promotionLevel', promotionLevel)

	cupboard.set('inventoryItems', inventoryItems)
	cupboard.set('investmentOptions', investmentOptions)

	cupboard.set('solved', solved)
}