

# Global Functions
exports.initMenu = ->
	#states for MainMenu
	hop.MainMenu.y = 0
	hop.MainMenu.states.add('hide',{opacity:0})
	hop.MainMenu.states.add('show',{opacity:1})
	hop.MainMenu.bringToFront()	
	hop.Global.bringToFront()
	#States for menu options
	for count in [1..8]
		option = hop["option" + count]
		option.states.add("show",{y:option.y, opacity:1})
		option.states.add("hide",{y:1200, opacity:0})
		#option.states.animationOptions = time:0.3
		option.states.switchInstant 'hide'

	#States for footer
	footer = hop["footer"]
	footer.states.add('hide', {y:1400, opacity:0})
	footer.states.add('show', {y:footer.y, opacity:1})
	footer.states.switchInstant 'hide'
	exports.showMenu()

exports.showMenu = ->
	hop.MainMenu.states.switch('show')
	for count in [1..8]
		do (count) ->
		   Utils.delay count * 0.1, ->
		     hop["option"+count].states.switch('show')

	Utils.delay 8 * 0.1, -> 
		hop.footer.states.switch('show')
	hop.MainMenu.bringToFront()	

exports.hideMenu = ->
	#hop.MainMenu.backgroundColor = '#ffffff'
	for count in [1..8]
		do (count) ->
		   Utils.delay count * 0.01, ->
		     hop["option"+count].states.switch('hide')
	Utils.delay 8 * 0.01, -> 
		hop.footer.states.switch('hide')
		hop.MainMenu.states.switch('hide')

# Events
hop.option2.on Events.Click, (event,layer) ->
	window.shopNowMod.showShopNow()
	exports.hideMenu()

hop.option3.on Events.Click, (event,layer) ->
	window.shoppingListMod.showShoppingList()
	exports.hideMenu()

hop.option6.on Events.Click, (event,layer) ->
	window.recipeListMod.showRecipeList()
	exports.hideMenu()

hop.option7.on Events.Click, (event,layer) ->
	window.nutritionMod.showNutritionList()
	exports.hideMenu()

