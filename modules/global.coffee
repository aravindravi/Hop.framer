exports.initGlobal = ->
	exports.initBack()
	hop.Global.visible = true
	hop.globalFooter.states.add
		hide:
			y: 1400

exports.initBack = ->
	hop.globalBack.on Events.Click, (event,layer) ->
		window.shopNowMod.hideShopNow()
		window.shoppingListMod.hideShoppingList()
		window.recipeListMod.hideRecipeList()
		window.mainMenuMod.showMenu()
