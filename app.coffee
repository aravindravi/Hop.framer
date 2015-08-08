# This imports all the layers for "Hop Framer" into hopFramerLayers2
window.hop = Framer.Importer.load "imported/Hop Framer"
window.mainMenuMod = require 'mainMenu'
window.shopNowMod = require 'shopNow'
window.globalMod = require 'global'
window.recipeListMod = require 'recipeList'
window.shoppingListMod = require 'shoppingList'


globalMod.initGlobal()
mainMenuMod.initMenu()
shopNowMod.initShopNow()
shoppingListMod.initShoppingList()
recipeListMod.initRecipeList()


# Retina scaling
Framer.Device.contentScale = 1.7

