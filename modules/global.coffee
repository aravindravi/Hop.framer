exports.initGlobal = ->
	exports.initBack()
	hop.Global.visible = true

exports.initBack = ->
	hop.shopNowFooter.on Events.Click, (event,layer) ->
		window.shopNowMod.hideShopNow()
		window.mainMenuMod.showMenu()