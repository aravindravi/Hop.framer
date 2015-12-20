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
		item.states.animationOptions = time:0.5

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
	
hop.recipeItem3.on Events.Click, (event,layer) ->
	#recipeLayer = hop.recipeImg.copy()
	#recipeLayer.superLayer = hop.recipeListBody
	
	hop.SchezwanTofu.visible = true
	
	recipeLayer = hop.schezwanBody
	recipeLayer = hop.RecipeCoverImg.copy()
	recipeLayer.superLayer = hop.RecipeList
	recipeLayer.width = hop.recipeImg.width
	recipeLayer.height = hop.recipeImg.height
	recipeLayer.x = hop.recipeImg.screenFrame.x
	recipeLayer.y = hop.recipeImg.screenFrame.y
	
	animationTime = 0.3
	recipeLayer.states.add
		zoomIn:
			width: 640
			height: 391
			x: 0
			y: 115
			originX: 0
			originY: 1
	recipeLayer.states.animationOptions = 
		time: animationTime
		curve: "ease-out"
	recipeLayer.states.switch('zoomIn')
	hop.recipeListBody.states.switch('hide')
	hop.RecipeList.backgroundColor = "#FFFFFF"
	recipeLayer.on Events.AnimationEnd, -> 
		hop.RecipeList.visible = false
		window.schezwanMod.showSchezwanTofu()
		recipeLayer.destroy()


