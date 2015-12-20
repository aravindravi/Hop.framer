# This imports all the layers for "Hop Framer" into hopFramerLayers
window.hop = Framer.Importer.load "imported/Hop Framer"

# This imports all the layers for "Hop Framer" into hopFramerLayers2
hop.MainMenu.backgroundColor="#000"
window.mainMenuMod = require 'mainMenu'
window.shopNowMod = require 'shopNow'
window.globalMod = require 'global'
window.recipeListMod = require 'recipeList'
window.shoppingListMod = require 'shoppingList'
window.nutritionMod = require 'nutrition'
window.schezwanMod = require 'schezwanTofu'


globalMod.initGlobal()
mainMenuMod.initMenu()
shopNowMod.initShopNow()
shoppingListMod.initShoppingList()
recipeListMod.initRecipeList()
nutritionMod.initNutritionList()
schezwanMod.initSchezwanTofu()

# Retina scaling
Framer.Device.contentScale = 1.7

