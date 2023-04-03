sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    fish.setPosition(randint(0, 120), randint(0, 120))
    info.changeScoreBy(77)
    info.startCountdown(10)
})
let fish: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 8 8 . . . . . 
    . . . . . . . . 8 8 8 . . . . . 
    . . . . . . . 8 8 8 8 . . . . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    . 8 8 f 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 f f f 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    . . . . . . . . 8 8 8 . . . . . 
    . . . . . . . . 8 8 8 8 . . . . 
    . . . . . . . . . 8 8 8 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
fish = sprites.create(assets.image`fish`, SpriteKind.Food)
