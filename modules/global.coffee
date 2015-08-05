exports.initGlobal = ->
	exports.initBack()
	hop.Global.visible = true

exports.initBack = ->
	hop.back.on Events.Click, (event,layer) ->
		window.shopNowMod.hideShopNow()
		window.mainMenuMod.showMenu()