exports.initNutritionList = ->
	
	hop.nutritionBody.states.add
		hide: 
			opacity: 0
			scale: 0.6
		show: 
			opacity: 1
			scale: 1
	hop.nutritionBody.states.switchInstant('hide')
	hop.globalFooter.states.switchInstant('hide')

	for count in [1..2]
		item = hop['nutritionItem' + count]
		item.states.add('show',{y: item.y, opacity:1})
		item.states.add('hide',{y: (1024), opacity:0})
		item.states.switchInstant('hide')

exports.showNutritionList = ->
	for count in [1..2]
		hop["nutritionItem"+count].states.switchInstant('hide')
	hop.Nutrition.placeBehind(hop.MainMenu)
	hop.Nutrition.visible = true
	hop.nutritionBody.states.switch('show')
	
	Utils.delay 0.2, -> 
		for count in [1..2]
			do (count) ->
			   Utils.delay count * 0.1, ->
			     hop["nutritionItem"+count].states.switch('show')
	Utils.delay 0.6, ->
		hop.globalFooter.states.switch('default')	
exports.hideNutritionList = ->
	hop.nutritionBody.states.switch('hide')
	hop.globalFooter.states.switch('hide')
	


