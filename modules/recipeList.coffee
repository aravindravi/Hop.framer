exports.initRecipeList = ->
	
	hop.recipeListBody.states.add
		hide: 
			opacity: 0
			scale: 0.6
		show: 
			opacity: 1
			scale: 1

	hop.recipeListBody.states.switchInstant('hide')
	hop.globalFooter.states.switchInstant('hide')

	for count in [1..5]
		item = hop['recipeItem' + count]
		item.states.add('show',{y: item.y, opacity:1})
		item.states.add('hide',{y: (1024), opacity:0})
		item.states.switchInstant('hide')

exports.showRecipeList = ->
	for count in [1..5]
		hop["recipeItem"+count].states.switchInstant('hide')

	hop.RecipeList.placeBehind(hop.MainMenu)
	hop.RecipeList.visible = true
	hop.recipeListBody.states.switch('show')
	hop.globalFooter.states.switch('default')	
	Utils.delay 0.2, -> 
		for count in [1..5]
			do (count) ->
			   Utils.delay count * 0.1, ->
			     hop["recipeItem"+count].states.switch('show')

exports.hideRecipeList = ->
	hop.recipeListBody.states.switch('hide')
	hop.globalFooter.states.switch('hide')
	