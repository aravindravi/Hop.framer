# Add the following line to your project in Framer Studio. 
# myModule = require "myModule"
# Reference the contents by name, like myModule.myFunction() or myModule.myVar


exports.initShoppingList = ->
	
	hop.shoppingListBody.states.add
		hide: 
			opacity: 0
			scale: 0.6
		show: 
			opacity: 1
			scale: 1
	
	hop.shoppingListBody.states.switchInstant('hide')
	hop.globalFooter.states.switchInstant('hide')

	for count in [1..5]
		item = hop['listItem' + count]
		item.states.add('show',{y: item.y, opacity:1})
		item.states.add('hide',{y: (item.y - 100), opacity:0})
		item.states.switchInstant 'hide'

exports.showShoppingList = ->
	hop.ShoppingList.visible = true
	hop.shoppingListBody.states.switch('show')	
	hop.globalFooter.states.switch('default')	
	Utils.delay 0.2, -> 
		hop.map.states.switch('show')
		for count in [1..5]
			do (count) ->
			   Utils.delay count * 0.2, ->
			     hop["listItem"+count].states.switch('show')
	Utils.delay 1.2, ->
		hop.ShoppingList.bringToFront()

exports.hideShoppingList = ->
	hop.globalFooter.states.switch('hide')
	for count in [1..5]
		do (count) ->
		   Utils.delay count * 0.2, ->
		     hop["listItem"+count].states.switch('hide')
	hop.shoppingListBody.states.switch('hide')






