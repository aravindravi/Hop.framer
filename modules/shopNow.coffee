# Add the following line to your project in Framer Studio. 
# myModule = require "myModule"
# Reference the contents by name, like myModule.myFunction() or myModule.myVar


exports.initShopNow = ->
	
	hop.shopNowBody.states.add
		hide: 
			opacity: 0
			scale: 0.6
		show: 
			opacity: 1
			scale: 1
	hop.map.states.add
		hide:
			opacity: 0
			scale: 0.6
		show: 
			opacity: 1
			scale: 1
			curve: 'ease-out'	
	hop.globalFooter.states.add
		hide:
			y: 1200

	hop.map.states.switchInstant('hide')
	hop.shopNowBody.states.switchInstant('hide')
	hop.globalFooter.states.switchInstant('hide')

	for count in [1..5]
		item = hop['shopItem' + count]
		item.states.add('show',{y: item.y, opacity:1})
		item.states.add('hide',{y: (item.y - 40), opacity:0})
		item.states.switchInstant 'hide'

exports.showShopNow = ->
	hop.ShopNow.visible = true
	hop.shopNowBody.states.switch('show')	
	hop.globalFooter.states.switch('default')	
	Utils.delay 0.2, -> 
		hop.map.states.switch('show')
		for count in [1..5]
			do (count) ->
			   Utils.delay count * 0.2, ->
			     hop["shopItem"+count].states.switch('show')
	Utils.delay 1.2, ->
		hop.ShopNow.bringToFront()
exports.hideShopNow = ->
	hop.map.states.switch('hide')
	hop.globalFooter.states.switch('hide')
	for count in [1..5]
		do (count) ->
		   Utils.delay count * 0.2, ->
		     hop["shopItem"+count].states.switch('hide')
	hop.shopNowBody.states.switch('hide')






