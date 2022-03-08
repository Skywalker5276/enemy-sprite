input.onButtonPressed(Button.A, function () {
    Player_sprite.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.TiltLeft, function () {
    Player_sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Player_sprite.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    Player_sprite.change(LedSpriteProperty.X, 1)
})
let Player_sprite: game.LedSprite = null
let Enemy_Sprite = game.createSprite(randint(0, 4), randint(0, 4))
Player_sprite = game.createSprite(2, 2)
basic.forever(function () {
    if (Player_sprite.isTouching(Enemy_Sprite)) {
        basic.showIcon(IconNames.Happy)
        Enemy_Sprite.delete()
        Enemy_Sprite = game.createSprite(randint(0, 4), randint(0, 4))
    }
})
