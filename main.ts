namespace SpriteKind {
    export const life = SpriteKind.create()
    export const projectileenemy = SpriteKind.create()
}
function Enemy_1 () {
    airplane_enemy_1 = sprites.createProjectileFromSide(img`
        ..........fffff..........
        ........ff2f2f2ff........
        .......f222f2f222f.......
        .......f222f2f222f.......
        ........fff2f2fff........
        ...........f2f...........
        ...........f2f...........
        ...........f2f...........
        ..........f222f..........
        ..........f222f..........
        .........f22222f.........
        ......fffffffffffff......
        ..ffff222f6f6f6f222ffff..
        .f2222222f6f6f6f2222222f.
        f22f22222fff6fff22222f22f
        f222222f2f22f22f2f222222f
        .ffffff2ff22222ff2ffffff.
        .......f..f222f..f.......
        ..........ff2ff..........
        ..........ff2ff..........
        ..........f222f..........
        ...........ff............
        .........fffffff.........
        ............f............
        `, 0, 50)
    airplane_enemy_1.setKind(SpriteKind.Enemy)
    airplane_enemy_1.setPosition(randint(16, 135), 0)
    airplane_enemy_1.z = 9
    if (game.runtime() >= 1500) {
        projectilenemy = sprites.createProjectileFromSprite(img`
            . f . . . . . . . . . f . 
            f 2 f . . . . . . . f 2 f 
            f 2 f . . . . . . . f 2 f 
            f 4 f . . . . . . . f 4 f 
            f 4 f . . . . . . . f 4 f 
            f 5 f . . . . . . . f 5 f 
            f 1 f . . . . . . . f 1 f 
            . f . . . . . . . . . f . 
            `, airplane_enemy_1, 0, 100)
        projectilenemy.setKind(SpriteKind.projectileenemy)
        airplane_enemy_1.z = 2
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.pewPew.play()
    projectile = sprites.createProjectileFromSprite(img`
        . f . . . . . . . . . f . 
        f 1 f . . . . . . 3 f 1 f 
        f 5 f . . . . . . . f 5 f 
        f 4 f . . . . . . . f 4 f 
        f 4 f . . . . . . . f 4 f 
        f 2 f . . . . . . . f 2 f 
        f 2 f . . . . . . . f 2 f 
        . f . . . . . . . . . f . 
        `, spriteplayer, 0, -60)
    projectile.setKind(SpriteKind.Projectile)
    projectile.y += -5
    projectile.z = 2
    pause(500)
})
function Enemy_2 () {
    airplane_enemy_2 = sprites.createProjectileFromSide(img`
        ..........fffff..........
        ........ff2f2f2ff........
        .......f222f2f222f.......
        .......f222f2f222f.......
        ........fff2f2fff........
        ...........f2f...........
        ...........f2f...........
        ...........f2f...........
        ..........f222f..........
        ..........f222f..........
        .........f22222f.........
        ......fffffffffffff......
        ..ffff222f6f6f6f222ffff..
        .f2222222f6f6f6f2222222f.
        f22f22222fff6fff22222f22f
        f222222f2f22f22f2f222222f
        .ffffff2ff22222ff2ffffff.
        .......f..f222f..f.......
        ..........ff2ff..........
        ..........ff2ff..........
        ..........f222f..........
        ...........ff............
        .........fffffff.........
        ............f............
        `, 0, 70)
    airplane_enemy_2.setKind(SpriteKind.Enemy)
    airplane_enemy_2.setPosition(randint(26, 135), 0)
    airplane_enemy_2.z = 9
    if (game.runtime() >= 2500) {
        projectilenemy = sprites.createProjectileFromSprite(img`
            . f . . . . . . . . . f . 
            f 2 f . . . . . . . f 2 f 
            f 2 f . . . . . . . f 2 f 
            f 4 f . . . . . . . f 4 f 
            f 4 f . . . . . . . f 4 f 
            f 5 f . . . . . . . f 5 f 
            f 1 f . . . . . . . f 1 f 
            . f . . . . . . . . . f . 
            `, airplane_enemy_1, 0, 100)
        projectilenemy.setKind(SpriteKind.projectileenemy)
        airplane_enemy_1.z = 2
    }
}
sprites.onOverlap(SpriteKind.projectileenemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy()
    projectilenemy.destroy()
    spriteplayer.startEffect(effects.fire, 200)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
    music.jumpDown.play()
})
function addplayer () {
    spriteplayer = sprites.create(img`
        ............f............
        .........fffffff.........
        ...........fff...........
        ..........f777f..........
        ..........ff7ff..........
        .......f..ff7ff..f.......
        ..fffff7fff777fff7fffff..
        .f77777f777f7f777f77777f.
        f77ee777777f7f777777ee77f
        f77ee777777fff777777ee77f
        .f77777777f666f77777777f.
        ..ffff7777f666f7777ffff..
        ......ffffff6ffffff......
        ..........f7f7f..........
        ..........f777f..........
        ...........f7f...........
        ...........f7f...........
        ...........f7f...........
        ...........f7f...........
        .........ff7f7ff.........
        ........f77f7f77f........
        ........f77f7f77f........
        .........fff7fff.........
        ............f............
        `, SpriteKind.Player)
    spriteplayer.setStayInScreen(true)
    spriteplayer.bottom = scene.screenHeight()
    spriteplayer.z = 10
    controller.moveSprite(spriteplayer, 100, 0)
    info.setLife(2)
    info.setScore(0)
}
function Mainscreen () {
    mainscreen = sprites.create(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
        1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
        1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
        1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
        1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff11111fffffffffff1111111ffffffffffffffffff111fffffffffffffff111fffffffffff1111111ffffffffffffffffff11111ff1
        1ff11111fffffffffff1111111ffffffffffffffffff111fffffffffffffff111fffffffffff1111111ffffffffffffffffff11111ff1
        1ff11111fffffffffff1111111ffffffffffffffffff111fffffffffffffff111fffffffffff1111111ffffffffffffffffff11111ff1
        1ff11111ffff111111111111111111111ffff1111111111ffff1111111ffff111ffff1111111ffff1111111111ffff111111111111ff1
        1ff11111ffff111111111111111111111ffff1111111111ffff1111111ffff111ffff1111111ffff1111111111ffff111111111111ff1
        1ff11111ffff111111111111111111111ffff1111111111ffff1111111ffff111ffff1111111ffff1111111111ffff111111111111ff1
        1ff11111ffff111111111111111111111ffff1111111111ffff1111111ffff111ffff1111111ffff1111111111ffff111111111111ff1
        1ff11111ffffffffffffff11111111111ffff1111111111fffffffffffffff111fffffffffff11111111111111ffff111111111111ff1
        1ff11111ffffffffffffff11111111111ffff1111111111fffffffffffffff111fffffffffff11111111111111ffff111111111111ff1
        1ff11111ffffffffffffff11111111111ffff1111111111fffffffffffffff111fffffffffff11111111111111ffff111111111111ff1
        1ff11111ffffffffffffff11111111111ffff1111111111fffffffffffffff111fffffffffff11111111111111ffff111111111111ff1
        1ff1111111111111111fff11111111111ffff1111111111ffff1111111ffff111ffff1111111ffff1111111111ffff111111111111ff1
        1ff1111111111111111fff11111111111ffff1111111111ffff1111111ffff111ffff1111111ffff1111111111ffff111111111111ff1
        1ff1111111111111111fff11111111111ffff1111111111ffff1111111ffff111ffff1111111ffff1111111111ffff111111111111ff1
        1ff1111111111111111fff11111111111ffff1111111111ffff1111111ffff111ffff1111111ffff1111111111ffff111111111111ff1
        1ff11111ffffffffffffff11111111111ffff1111111111ffff1111111ffff111ffff1111111ffff1111111111ffff111111111111ff1
        1ff11111ffffffffffffff11111111111ffff1111111111ffff1111111ffff111ffff1111111ffff1111111111ffff111111111111ff1
        1ff11111ffffffffffffff11111111111ffff1111111111ffff1111111ffff111ffff1111111ffff1111111111ffff111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
        1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
        1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
        1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff1
        1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
        1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `, SpriteKind.Player)
    mainscreen.z = 99
    game.setDialogFrame(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `)
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f 1 1 1 1 1 f . . . . . . 
        . . f 1 2 2 2 2 2 1 f . . . . . 
        . f 1 2 2 2 2 2 2 2 1 f . . . . 
        f 1 2 2 2 1 1 1 2 2 2 1 f . . . 
        f 1 2 2 1 2 2 2 1 2 2 1 f . . . 
        f 1 2 2 1 2 2 2 1 2 2 1 f . . . 
        f 1 2 2 1 1 1 1 1 2 2 1 f . . . 
        f 1 2 2 1 2 2 2 1 2 2 1 f . . . 
        . f 1 2 2 2 2 2 2 2 1 f . . . . 
        . . f 1 2 2 2 2 2 1 f . . . . . 
        . . . f 1 1 1 1 1 f . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    game.showLongText("", DialogLayout.Bottom)
    mainscreen.destroy(effects.disintegrate, 500)
}
info.onLifeZero(function () {
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.life, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(1)
    music.magicWand.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    projectile.destroy()
    otherSprite.destroy(effects.disintegrate, 500)
    info.changeScoreBy(1)
    music.baDing.play()
})
let lifeplus: Sprite = null
let gameover: Sprite = null
let win_screen: Sprite = null
let mainscreen: Sprite = null
let airplane_enemy_2: Sprite = null
let spriteplayer: Sprite = null
let projectile: Sprite = null
let projectilenemy: Sprite = null
let airplane_enemy_1: Sprite = null
Mainscreen()
addplayer()
scene.setBackgroundColor(8)
effects.starField.startScreenEffect()
game.onUpdate(function () {
    if (info.score() > 60) {
        win_screen = sprites.create(img`
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccfffccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccfffccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccfffccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccff11fffcccccccccccccccccccccccccfff11ffccccccccccccccccccccccccccff111ffccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccff11fffcccccccccccccccccccccccccfff11ffccccccccccccccccccccccccccff111ffccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccfff1155555ffcccccccccccccccccccccff1115555fffcccccccccccccccccccccff1155555ffccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccfff1155555ffcccccccccccccccccccccff1115555fffcccccccccccccccccccccff1155555ffccccccccccccccccccccccccccccc
            ccccccccccccccccccccccffffffffff1155555fffffffffcccccccfffffffff1115555ffffffffffcccccccfffffffff1155555fffffffffcccccccccccccccccccccc
            ccccccccccccccccccccccffffffffff1155555fffffffffcccccccfffffffff1115555ffffffffffcccccccfffffffff1155555fffffffffcccccccccccccccccccccc
            ccccccccccccccccccccccffffffffff1155555fffffffffcccccccfffffffff1115555ffffffffffcccccccfffffffff1155555fffffffffcccccccccccccccccccccc
            ccccccccccccccccccccff11111111115555555555555555ffcccff11111111155555555555555555ffccfff1111111115555555555555555fffccccccccccccccccccc
            ccccccccccccccccccccff11111111115555555555555555ffcccff11111111155555555555555555ffccfff1111111115555555555555555fffccccccccccccccccccc
            ccccccccccccccccccccccfff555555555555555555555ffcccccccff555555555555555555555fffcccccccff555555555555555555555ffcccccccccccccccccccccc
            ccccccccccccccccccccccfff555555555555555555555ffcccccccff555555555555555555555fffcccccccff555555555555555555555ffcccccccccccccccccccccc
            cccccccccccccccccccccccccff5555555555555555fffcccccccccccfff5555555555555555ffccccccccccccff55555555555555555ffcccccccccccccccccccccccc
            cccccccccccccccccccccccccff5555555555555555fffcccccccccccfff5555555555555555ffccccccccccccff55555555555555555ffcccccccccccccccccccccccc
            cccccccccccccccccccccccccff5555555555555555fffcccccccccccfff5555555555555555ffccccccccccccff55555555555555555ffcccccccccccccccccccccccc
            cccccccccccccccccccccccccccff555555555555ffcccccccccccccccccff555555555555ffccccccccccccccccfff55555555555fffcccccccccccccccccccccccccc
            cccccccccccccccccccccccccccff555555555555ffcccccccccccccccccff555555555555ffccccccccccccccccfff55555555555fffcccccccccccccccccccccccccc
            cccccccccccccccccccccccccff1155555555555555fffcccccccccccfff1155555555555555ffccccccccccccff11155555555555555ffcccccccccccccccccccccccc
            cccccccccccccccccccccccccff1155555555555555fffcccccccccccfff1155555555555555ffccccccccccccff11155555555555555ffcccccccccccccccccccccccc
            ccccccccccccccccccccccfff1155555fffffff5555555ffcccccccff1115555fffffff5555555fffcccccccff1155555fffffff5555555ffcccccccccccccccccccccc
            ccccccccccccccccccccccfff1155555fffffff5555555ffcccccccff1115555fffffff5555555fffcccccccff1155555fffffff5555555ffcccccccccccccccccccccc
            ccccccccccccccccccccccfff1155555fffffff5555555ffcccccccff1115555fffffff5555555fffcccccccff1155555fffffff5555555ffcccccccccccccccccccccc
            ccccccccccccccccccccff1115555fffffccfffff5555555ffcccff1155555fffffccfffff5555555ffccfff1155555ffffcccffff5555555fffccccccccccccccccccc
            ccccccccccccccccccccff1115555fffffccfffff5555555ffcccff1155555fffffccfffff5555555ffccfff1155555ffffcccffff5555555fffccccccccccccccccccc
            ccccccccccccccccccccccfffffffccccccccccccfffffffcccccccfffffffccccccccccccfffffffcccccccfffffffcccccccccccfffffffcccccccccccccccccccccc
            ccccccccccccccccccccccfffffffccccccccccccfffffffcccccccfffffffccccccccccccfffffffcccccccfffffffcccccccccccfffffffcccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            c11111ccccccc11111cccc11111111111111ccccc111111111111ccccccc11111111111ccccccc11111111111111ccccccc111111111111ccccccc11111ccccccc1111c
            c11111ccccccc11111cccc11111111111111ccccc111111111111ccccccc11111111111ccccccc11111111111111ccccccc111111111111ccccccc11111ccccccc1111c
            c1111111ccc1111111ccccccccc11111ccccccc1111ccccccc11111cc11111ccccccc11111ccccccccc11111ccccccccc11111ccccccc1111ccccc1111111ccccc1111c
            c1111111ccc1111111ccccccccc11111ccccccc1111ccccccc11111cc11111ccccccc11111ccccccccc11111ccccccccc11111ccccccc1111ccccc1111111ccccc1111c
            c1111111ccc1111111ccccccccc11111ccccccc1111ccccccc11111cc11111ccccccc11111ccccccccc11111ccccccccc11111ccccccc1111ccccc1111111ccccc1111c
            c11111111111111111ccccccccc11111ccccccc1111cccccccccccccc11111ccccccccccccccccccccc11111ccccccccc11111ccccccc1111ccccc111111111ccc1111c
            c11111111111111111ccccccccc11111ccccccc1111cccccccccccccc11111ccccccccccccccccccccc11111ccccccccc11111ccccccc1111ccccc111111111ccc1111c
            c11111cc111cc11111ccccccccc11111ccccccccc111111111111ccccccc11111111111cccccccccccc11111ccccccccc11111ccccccc1111ccccc11111cc111111111c
            c11111cc111cc11111ccccccccc11111ccccccccc111111111111ccccccc11111111111cccccccccccc11111ccccccccc11111ccccccc1111ccccc11111cc111111111c
            c11111cc111cc11111ccccccccc11111cccccccccccccccccc11111cccccccccccccc11111ccccccccc11111ccccccccc11111ccccccc1111ccccc11111cccc1111111c
            c11111cc111cc11111ccccccccc11111cccccccccccccccccc11111cccccccccccccc11111ccccccccc11111ccccccccc11111ccccccc1111ccccc11111cccc1111111c
            c11111cc111cc11111ccccccccc11111cccccccccccccccccc11111cccccccccccccc11111ccccccccc11111ccccccccc11111ccccccc1111ccccc11111cccc1111111c
            c11111ccccccc11111ccccccccc11111ccccccc1111ccccccc11111cc11111ccccccc11111ccccccccc11111ccccccccc11111ccccccc1111ccccc11111ccccccc1111c
            c11111ccccccc11111ccccccccc11111ccccccc1111ccccccc11111cc11111ccccccc11111ccccccccc11111ccccccccc11111ccccccc1111ccccc11111ccccccc1111c
            c11111ccccccc11111cccc11111111111111ccccc111111111111ccccccc11111111111ccccccc11111111111111ccccccc111111111111ccccccc11111ccccccc1111c
            c11111ccccccc11111cccc11111111111111ccccc111111111111ccccccc11111111111ccccccc11111111111111ccccccc111111111111ccccccc11111ccccccc1111c
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccc111111111ccccccc111111111111ccccc1111ccccccc11111cc11111111111111ccccc11111ccccccccccc111111111111cc11111111111111ccc11111111111c
            cccccc111111111ccccccc111111111111ccccc1111ccccccc11111cc11111111111111ccccc11111ccccccccccc111111111111cc11111111111111ccc11111111111c
            cccc1111ccccc11111cc11111ccccccc1111ccc1111111cc1111111cc11111ccccccc11111cc11111ccccccccccc11111cccccccccccccc11111ccccccc1111cccccccc
            cccc1111ccccc11111cc11111ccccccc1111ccc1111111cc1111111cc11111ccccccc11111cc11111ccccccccccc11111cccccccccccccc11111ccccccc1111cccccccc
            cccc1111ccccc11111cc11111ccccccc1111ccc1111111cc1111111cc11111ccccccc11111cc11111ccccccccccc11111cccccccccccccc11111ccccccc1111cccccccc
            c11111cccccccccccccc11111ccccccc1111ccc1111111111111111cc11111ccccccc11111cc11111ccccccccccc11111cccccccccccccc11111ccccccc1111cccccccc
            c11111cccccccccccccc11111ccccccc1111ccc1111111111111111cc11111ccccccc11111cc11111ccccccccccc11111cccccccccccccc11111ccccccc1111cccccccc
            c11111cccccccccccccc11111ccccccc1111ccc1111ccc11cc11111cc11111ccccccc11111cc11111ccccccccccc1111111cccccccccccc11111ccccccc1111111ccccc
            c11111cccccccccccccc11111ccccccc1111ccc1111ccc11cc11111cc11111ccccccc11111cc11111ccccccccccc1111111cccccccccccc11111ccccccc1111111ccccc
            c11111cccccccccccccc11111ccccccc1111ccc1111ccc11cc11111cc11111111111111ccccc11111ccccccccccc11111cccccccccccccc11111ccccccc1111cccccccc
            c11111cccccccccccccc11111ccccccc1111ccc1111ccc11cc11111cc11111111111111ccccc11111ccccccccccc11111cccccccccccccc11111ccccccc1111cccccccc
            c11111cccccccccccccc11111ccccccc1111ccc1111ccc11cc11111cc11111111111111ccccc11111ccccccccccc11111cccccccccccccc11111ccccccc1111cccccccc
            cccc1111ccccc11111cc11111ccccccc1111ccc1111ccccccc11111cc11111cccccccccccccc11111ccccccccccc11111cccccccccccccc11111ccccccc1111cccccccc
            cccc1111ccccc11111cc11111ccccccc1111ccc1111ccccccc11111cc11111cccccccccccccc11111ccccccccccc11111cccccccccccccc11111ccccccc1111cccccccc
            cccccc111111111ccccccc111111111111ccccc1111ccccccc11111cc11111cccccccccccccc11111111111111cc111111111111ccccccc11111ccccccc11111111111c
            cccccc111111111ccccccc111111111111ccccc1111ccccccc11111cc11111cccccccccccccc11111111111111cc111111111111ccccccc11111ccccccc11111111111c
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            `, SpriteKind.Player)
        win_screen.z += 999
        game.setDialogFrame(img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `)
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . f 1 1 1 1 1 f . . . . . . 
            . . f 1 2 2 2 2 2 1 f . . . . . 
            . f 1 2 2 2 2 2 2 2 1 f . . . . 
            f 1 2 2 2 1 1 1 2 2 2 1 f . . . 
            f 1 2 2 1 2 2 2 1 2 2 1 f . . . 
            f 1 2 2 1 2 2 2 1 2 2 1 f . . . 
            f 1 2 2 1 1 1 1 1 2 2 1 f . . . 
            f 1 2 2 1 2 2 2 1 2 2 1 f . . . 
            . f 1 2 2 2 2 2 2 2 1 f . . . . 
            . . f 1 2 2 2 2 2 1 f . . . . . 
            . . . f 1 1 1 1 1 f . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        game.showLongText("", DialogLayout.Full)
        game.reset()
    }
    if (0 >= info.life()) {
        gameover = sprites.create(img`
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff11111111111fffffffffffffffff111111111111fffffffffff111111111111fffff111111111111111111fffff111111fffffffffffffffffffffff111111111fffff
            fffff11111111111fffffffffffffffff111111111111fffffffffff111111111111fffff111111111111111111fffff111111fffffffffffffffffffffff111111111fffff
            fffff11111111111fffffffffffffffff111111111111fffffffffff111111111111fffff111111111111111111fffff111111fffffffffffffffffffffff111111111fffff
            fffff11111111111fffffffffffffffff111111111111fffffffffff111111111111fffff111111111111111111fffff111111fffffffffffffffffffffff111111111fffff
            fffff11111111111fffffffffffffffff111111111111fffffffffff111111111111fffff111111111111111111fffff111111fffffffffffffffffffffff111111111fffff
            fffff11111111111fffffffffffffffff111111111111fffffffffff111111111111fffff111111111111111111fffff111111fffffffffffffffffffffff111111111fffff
            fffff11111ffffff11111111111111111111111ffffff11111111111ffffff111111fffffffffff111111fffffffffff111111ffffff11111111111111111111111111fffff
            fffff11111ffffff11111111111111111111111ffffff11111111111ffffff111111fffffffffff111111fffffffffff111111ffffff11111111111111111111111111fffff
            fffff11111ffffff11111111111111111111111ffffff11111111111ffffff111111fffffffffff111111fffffffffff111111ffffff11111111111111111111111111fffff
            fffff11111ffffff11111111111111111111111ffffff11111111111ffffff111111fffffffffff111111fffffffffff111111ffffff11111111111111111111111111fffff
            fffff11111ffffff11111111111111111111111ffffff11111111111ffffff111111fffffffffff111111fffffffffff111111ffffff11111111111111111111111111fffff
            fffff11111ffffff11111111111111111111111ffffff11111111111ffffff111111fffffffffff111111fffffffffff111111ffffff11111111111111111111111111fffff
            fffff11111ffffff111111fffffffffff111111fffffffffffffffffffffff111111fffff111111ffffff111111fffff111111fffffffffffffffff111111111111111fffff
            fffff11111ffffff111111fffffffffff111111fffffffffffffffffffffff111111fffff111111ffffff111111fffff111111fffffffffffffffff111111111111111fffff
            fffff11111ffffff111111fffffffffff111111fffffffffffffffffffffff111111fffff111111ffffff111111fffff111111fffffffffffffffff111111111111111fffff
            fffff11111ffffff111111fffffffffff111111fffffffffffffffffffffff111111fffff111111ffffff111111fffff111111fffffffffffffffff111111111111111fffff
            fffff11111ffffff111111fffffffffff111111fffffffffffffffffffffff111111fffff111111ffffff111111fffff111111fffffffffffffffff111111111111111fffff
            fffff11111ffffff111111fffffffffff111111fffffffffffffffffffffff111111fffff111111ffffff111111fffff111111fffffffffffffffff111111111111111fffff
            fffff11111ffffff111111111111fffff111111ffffff11111111111ffffff111111fffff111111111111111111fffff111111ffffff11111111111111111111111111fffff
            fffff11111ffffff111111111111fffff111111ffffff11111111111ffffff111111fffff111111111111111111fffff111111ffffff11111111111111111111111111fffff
            fffff11111ffffff111111111111fffff111111ffffff11111111111ffffff111111fffff111111111111111111fffff111111ffffff11111111111111111111111111fffff
            fffff11111ffffff111111111111fffff111111ffffff11111111111ffffff111111fffff111111111111111111fffff111111ffffff11111111111111111111111111fffff
            fffff11111ffffff111111111111fffff111111ffffff11111111111ffffff111111fffff111111111111111111fffff111111ffffff11111111111111111111111111fffff
            fffff11111ffffff111111111111fffff111111ffffff11111111111ffffff111111fffff111111111111111111fffff111111ffffff11111111111111111111111111fffff
            fffff11111111111fffffffffffffffff111111ffffff11111111111ffffff111111fffff111111111111111111fffff111111fffffffffffffffffffffff111111111fffff
            fffff11111111111fffffffffffffffff111111ffffff11111111111ffffff111111fffff111111111111111111fffff111111fffffffffffffffffffffff111111111fffff
            fffff11111111111fffffffffffffffff111111ffffff11111111111ffffff111111fffff111111111111111111fffff111111fffffffffffffffffffffff111111111fffff
            fffff11111111111fffffffffffffffff111111ffffff11111111111ffffff111111fffff111111111111111111fffff111111fffffffffffffffffffffff111111111fffff
            fffff11111111111fffffffffffffffff111111ffffff11111111111ffffff111111fffff111111111111111111fffff111111fffffffffffffffffffffff111111111fffff
            fffff11111111111fffffffffffffffff111111ffffff11111111111ffffff111111fffff111111111111111111fffff111111fffffffffffffffffffffff111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff11111111111ffffffffffff11111111111ffffff11111111111111111ffffff11111fffffffffffffffffffffff111111fffffffffffffffff111111111111111fffff
            fffff11111111111ffffffffffff11111111111ffffff11111111111111111ffffff11111fffffffffffffffffffffff111111fffffffffffffffff111111111111111fffff
            fffff11111111111ffffffffffff11111111111ffffff11111111111111111ffffff11111fffffffffffffffffffffff111111fffffffffffffffff111111111111111fffff
            fffff11111111111ffffffffffff11111111111ffffff11111111111111111ffffff11111fffffffffffffffffffffff111111fffffffffffffffff111111111111111fffff
            fffff11111111111ffffffffffff11111111111ffffff11111111111111111ffffff11111fffffffffffffffffffffff111111fffffffffffffffff111111111111111fffff
            fffff11111111111ffffffffffff11111111111ffffff11111111111111111ffffff11111fffffffffffffffffffffff111111fffffffffffffffff111111111111111fffff
            fffff11111ffffff111111111111fffff111111ffffff11111111111111111ffffff11111ffffff11111111111111111111111ffffff11111111111ffffff111111111fffff
            fffff11111ffffff111111111111fffff111111ffffff11111111111111111ffffff11111ffffff11111111111111111111111ffffff11111111111ffffff111111111fffff
            fffff11111ffffff111111111111fffff111111ffffff11111111111111111ffffff11111ffffff11111111111111111111111ffffff11111111111ffffff111111111fffff
            fffff11111ffffff111111111111fffff111111ffffff11111111111111111ffffff11111ffffff11111111111111111111111ffffff11111111111ffffff111111111fffff
            fffff11111ffffff111111111111fffff111111ffffff11111111111111111ffffff11111ffffff11111111111111111111111ffffff11111111111ffffff111111111fffff
            fffff11111ffffff111111111111fffff111111ffffff11111111111111111ffffff11111ffffff11111111111111111111111ffffff11111111111ffffff111111111fffff
            fffff11111ffffff111111111111fffff111111ffffff11111111111111111ffffff11111ffffffffffffffffff11111111111fffffffffffffffffffffff111111111fffff
            fffff11111ffffff111111111111fffff111111ffffff11111111111111111ffffff11111ffffffffffffffffff11111111111fffffffffffffffffffffff111111111fffff
            fffff11111ffffff111111111111fffff111111ffffff11111111111111111ffffff11111ffffffffffffffffff11111111111fffffffffffffffffffffff111111111fffff
            fffff11111ffffff111111111111fffff111111ffffff11111111111111111ffffff11111ffffffffffffffffff11111111111fffffffffffffffffffffff111111111fffff
            fffff11111ffffff111111111111fffff111111ffffff11111111111111111ffffff11111ffffffffffffffffff11111111111fffffffffffffffffffffff111111111fffff
            fffff11111ffffff111111111111fffff111111ffffff11111111111111111ffffff11111ffffffffffffffffff11111111111fffffffffffffffffffffff111111111fffff
            fffff11111ffffff111111111111fffff111111111111ffffff11111ffffff11111111111ffffff11111111111111111111111ffffff111111fffff111111111111111fffff
            fffff11111ffffff111111111111fffff111111111111ffffff11111ffffff11111111111ffffff11111111111111111111111ffffff111111fffff111111111111111fffff
            fffff11111ffffff111111111111fffff111111111111ffffff11111ffffff11111111111ffffff11111111111111111111111ffffff111111fffff111111111111111fffff
            fffff11111ffffff111111111111fffff111111111111ffffff11111ffffff11111111111ffffff11111111111111111111111ffffff111111fffff111111111111111fffff
            fffff11111ffffff111111111111fffff111111111111ffffff11111ffffff11111111111ffffff11111111111111111111111ffffff111111fffff111111111111111fffff
            fffff11111ffffff111111111111fffff111111111111ffffff11111ffffff11111111111ffffff11111111111111111111111ffffff111111fffff111111111111111fffff
            fffff11111111111ffffffffffff11111111111111111111111fffff11111111111111111fffffffffffffffffffffff111111ffffff11111111111ffffff111111111fffff
            fffff11111111111ffffffffffff11111111111111111111111fffff11111111111111111fffffffffffffffffffffff111111ffffff11111111111ffffff111111111fffff
            fffff11111111111ffffffffffff11111111111111111111111fffff11111111111111111fffffffffffffffffffffff111111ffffff11111111111ffffff111111111fffff
            fffff11111111111ffffffffffff11111111111111111111111fffff11111111111111111fffffffffffffffffffffff111111ffffff11111111111ffffff111111111fffff
            fffff11111111111ffffffffffff11111111111111111111111fffff11111111111111111fffffffffffffffffffffff111111ffffff11111111111ffffff111111111fffff
            fffff11111111111ffffffffffff11111111111111111111111fffff11111111111111111fffffffffffffffffffffff111111ffffff11111111111ffffff111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `, SpriteKind.Player)
        gameover.z += 999
        game.setDialogFrame(img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `)
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . f 1 1 1 1 1 f . . . . . . 
            . . f 1 2 2 2 2 2 1 f . . . . . 
            . f 1 2 2 2 2 2 2 2 1 f . . . . 
            f 1 2 2 2 1 1 1 2 2 2 1 f . . . 
            f 1 2 2 1 2 2 2 1 2 2 1 f . . . 
            f 1 2 2 1 2 2 2 1 2 2 1 f . . . 
            f 1 2 2 1 1 1 1 1 2 2 1 f . . . 
            f 1 2 2 1 2 2 2 1 2 2 1 f . . . 
            . f 1 2 2 2 2 2 2 2 1 f . . . . 
            . . f 1 2 2 2 2 2 1 f . . . . . 
            . . . f 1 1 1 1 1 f . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        game.showLongText("", DialogLayout.Full)
    }
})
game.onUpdateInterval(800, function () {
    Enemy_1()
})
game.onUpdateInterval(1800, function () {
    Enemy_2()
})
game.onUpdateInterval(20000, function () {
    lifeplus = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f 1 1 1 1 1 f . . . . 
        . . . . f 1 1 2 2 2 1 1 f . . . 
        . . . f 1 1 1 2 2 2 1 1 1 f . . 
        . . f 1 1 1 1 2 2 2 1 1 1 1 f . 
        . . f 1 2 2 2 2 2 2 2 2 2 1 f . 
        . . f 1 2 2 2 2 2 2 2 2 2 1 f . 
        . . f 1 2 2 2 2 2 2 2 2 2 1 f . 
        . . f 1 1 1 1 2 2 2 1 1 1 1 f . 
        . . . f 1 1 1 2 2 2 1 1 1 f . . 
        . . . . f 1 1 2 2 2 1 1 f . . . 
        . . . . . f 1 1 1 1 1 f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 100)
    lifeplus.setKind(SpriteKind.life)
    lifeplus.setPosition(randint(26, 135), 0)
    lifeplus.z = 1
})
