function doWheels () {
    if (hjul == 0) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (hjul == 1) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, hjulhastighet)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, hjulhastighet)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (hjul == 2) {
        MiniCar.motor(Motorlist.M1, Direction1.Backward, hjulhastighet)
        MiniCar.motor(Motorlist.M2, Direction1.Backward, hjulhastighet)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        backa()
    }
    if (hjul == 3) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, vrida)
        MiniCar.motor(Motorlist.M2, Direction1.Backward, vrida)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        hjul = 0
    }
    if (hjul == 4) {
        MiniCar.motor(Motorlist.M1, Direction1.Backward, vrida)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, vrida)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        hjul = 0
    }
    if (avstånd == MiniCar.ultra()) {
        for (let index = 0; index < 20; index++) {
            MiniCar.motor(Motorlist.M1, Direction1.Backward, 60)
            MiniCar.motor(Motorlist.M2, Direction1.Backward, 60)
        }
    }
    if (irKnapp == 4) {
        avstånd += 2
    }
    if (irKnapp == 7) {
        avstånd += -2
    }
}
function getInput () {
    irKnapp = irRemote.returnIrButton()
    if (irKnapp == irRemote.irButton(IrButton.Number_1)) {
        lampor = 1
    }
    if (irKnapp == irRemote.irButton(IrButton.Number_0)) {
        lampor = 0
    }
    if (irKnapp == irRemote.irButton(IrButton.Number_2)) {
        lamphastighet += -50
    }
    if (irKnapp == irRemote.irButton(IrButton.Number_5)) {
        lamphastighet += 50
    }
    if (irKnapp == irRemote.irButton(IrButton.Number_3)) {
        lamphastighet = hjulhastighetDefault
    }
    if (irKnapp == irRemote.irButton(IrButton.Ok)) {
        hjul = 0
    }
    if (irKnapp == irRemote.irButton(IrButton.Up)) {
        hjul = 1
    }
    if (irKnapp == irRemote.irButton(IrButton.Down)) {
        hjul = 2
    }
    if (irKnapp == irRemote.irButton(IrButton.Right)) {
        hjul = 3
    }
    if (irKnapp == irRemote.irButton(IrButton.Left)) {
        hjul = 4
    }
}
function blinkaLSlump () {
    color = randint(1, 7)
    if (color == 1) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.red1)
    } else if (color == 2) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
    } else if (color == 3) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.blue1)
    } else if (color == 4) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.cyan)
    } else if (color == 5) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.purple)
    } else if (color == 6) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.white)
    } else {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.yellow)
    }
    basic.pause(lamphastighet)
}
function backa () {
    for (let index = 0; index < 5; index++) {
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        basic.pause(200)
    }
}
function blinkaRSlump () {
    color = randint(1, 7)
    if (color == 1) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
    } else if (color == 2) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
    } else if (color == 3) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.blue1)
    } else if (color == 4) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.cyan)
    } else if (color == 5) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.purple)
    } else if (color == 6) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.white)
    } else {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.yellow)
    }
    basic.pause(lamphastighet)
}
function doLights () {
    if (lampor == 1) {
        if (Math.randomBoolean()) {
            blinkaRSlump()
        } else {
            blinkaLSlump()
        }
    }
    if (lampor == 0) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.black)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.black)
        lamphastighet = 200
    }
}
let color = 0
let irKnapp = 0
let avstånd = 0
let hjulhastighet = 0
let hjulhastighetDefault = 0
let vrida = 0
let hjul = 0
let lamphastighet = 0
let lampor = 0
irRemote.connectInfrared(DigitalPin.P16)
lampor = 0
let lamphastighetDefault = 200
lamphastighet = lamphastighetDefault
hjul = 0
vrida = 39
hjulhastighetDefault = 75
hjulhastighet = hjulhastighetDefault
avstånd = 7
basic.forever(function () {
    getInput()
    doLights()
    doWheels()
})
