scene.setBackgroundColor(9)
let Hero = sprites.create(img`
    . . . . . . . . . . . . 
    . . . f f f f f f . . . 
    . f f f e e e e e f . . 
    f f f e e e e e e e f . 
    f f f f e e e e e e e f 
    f f f f f e e e 4 e e f 
    f f f f e e e 4 4 e e f 
    f f f f 4 4 4 4 4 e f f 
    f f 4 e 4 f f 4 4 e f . 
    f f 4 d 4 d d d d f . . 
    . f f f 4 d d b b f . . 
    . 4 d d e 4 4 4 e f . . 
    . e d d e 1 1 1 1 f . . 
    . f e e f 6 6 6 6 f f . 
    . f f f f f f f f f f . 
    . . f f . . . f f f . . 
    `, SpriteKind.Player)
controller.moveSprite(Hero)
tiles.setTilemap(tilemap`level1`)