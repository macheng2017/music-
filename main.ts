input.onButtonPressed(Button.A, function () {
    if (num >= 360) {
        num = 360
        music.playTone(220, music.beat(BeatFraction.Half))
    }
    
num += 10
    robotbit.GeekServo2KG(robotbit.Servos.S1, num)
})
input.onButtonPressed(Button.B, function () {
    if (num <= 0) {
        num = 0
        music.playTone(294, music.beat(BeatFraction.Half))
    }

num += 0 - 10
    robotbit.GeekServo2KG(robotbit.Servos.S1, num)
})
let num = 0

forever(function () {
    basic.showNumber(num,200)
})