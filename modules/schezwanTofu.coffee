exports.initSchezwanTofu = ->

	hop.SchezwanTofu.states.add
		hide: 
			opacity: 0
			scale: 0.6
		show: 
			opacity: 1
			scale: 1

	hop.schezwanBody.states.add
		hide: 
			opacity: 0
			scale: 0.6
		show: 
			opacity: 1
			scale: 1

	hop.ingredients.states.add
		hide: 
			opacity: 0
			y: 1000
		show: 
			opacity: 1
			y: hop.ingredients.y

	hop.schezwanSummary.states.add
		hide: 
			opacity: 0
			scaleY: 0
		show: 
			opacity: 1
			scaleY: 1
			originY: 1
	hop.schezwanSummary.states.animationOptions = 
		curve: "ease-out"
		time: 0.3

	hop.ingredients.states.switchInstant('hide')	
	hop.schezwanBody.states.switchInstant('hide')
	hop.globalFooter.states.switchInstant('hide')
	hop.schezwanSummary.states.switchInstant('hide')
	scroll = ScrollComponent.wrap(hop.schezwanBody)
	scroll.scrollFrame = Screen.frame
	scroll.contentInset = top: 0, left: 0, bottom: -200
	scroll.scrollHorizontal = false
	scroll.states.add
		hide: 
			opacity: 0
			scale: 0.6
		show: 
			opacity: 1
			scale: 1
	scroll.on Events.Move, ->
		parallaxCover(scroll.scrollY)
	

exports.showSchezwanTofu = ->
	hop.SchezwanTofu.states.switchInstant('show')
	hop.ingredients.states.switch('show')
	hop.schezwanSummary.states.switch('show')


		
		

parallaxCover = (y) ->
	hop.RecipeCoverImg.y = Utils.modulate(y, [0, 390], [0, 100], true)
	hop.RecipeCoverImg.blur = Utils.modulate(y, [0, 400], [0, 20], true)

exports.hideSchezwanTofu = ->
	hop.SchezwanTofu.states.switch('hide')
	hop.ingredients.states.switch('hide')
	hop.schezwanSummary.states.switch('hide')
	hop.globalFooter.states.switch('hide')
	


