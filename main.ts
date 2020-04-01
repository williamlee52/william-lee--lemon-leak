sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    mySprite.startEffect(effects.ashes, 200)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(13)
mySprite = sprites.create(img`
4 4 4 . . 4 4 4 4 4 . . . . . . 
4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
. b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
. b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
. c 4 5 5 5 5 d d d 5 5 5 5 5 b 
. c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
. . c 4 4 d 4 4 4 4 4 d d 5 d c 
. . . c 4 4 4 4 4 4 4 4 5 5 5 4 
. . . . c c b 4 4 4 b b 4 5 4 4 
. . . . . . c c c c c c b b 4 . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(500)
info.startCountdown(30)
forever(function () {
    if (info.score() <= 0) {
        game.over(false)
    }
})
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . c c c c . . . . 
. . . . c c c c c c c c c . . . 
. . . c f c c a a a a c a c . . 
. . c c f f f f a a a c a a c . 
. . c c a f f c a a f f f a a c 
. . c c a a a a b c f f f a a c 
. c c c c a c c b a f c a a c c 
c a f f c c c a b b 6 b b b c c 
c a f f f f c c c 6 b b b a a c 
c a a c f f c a 6 6 b b b a a c 
c c b a a a a b 6 b b a b b a . 
. c c b b b b b b b a c c b a . 
. . c c c b c c c b a a b c . . 
. . . . c b a c c b b b c . . . 
. . . . c b b a a 6 b c . . . . 
. . . . . . b 6 6 c c . . . . . 
`, Math.randomRange(-100, 100), Math.randomRange(-100, 100))
})
