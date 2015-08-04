# This imports all the layers for "Hop Framer" into hopFramerLayers2
window.hop = Framer.Importer.load "imported/Hop Framer"
window.mainMenuMod = require 'mainMenu'
window.shopNowMod = require 'shopNow'
window.globalMod = require 'global'
window.onresize = -> hop.View.center()


mainMenuMod.initMenu()
shopNowMod.initShopNow()
globalMod.initGlobal()

# Retina scaling
if window.devicePixelRatio > 1.5
  hop.scale = 0.75