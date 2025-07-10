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
    basic.pause(hastighet)
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
    basic.pause(hastighet)
}
let color = 0
let hastighet = 0
irRemote.connectInfrared(DigitalPin.P16)
hastighet = 200
basic.forever(function () {
    while (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_1)) {
        while (irRemote.returnIrButton() != irRemote.irButton(IrButton.Number_0)) {
            if (Math.randomBoolean()) {
                blinkaRSlump()
            } else {
                blinkaLSlump()
            }
        }
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.black)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.black)
    }
})
basic.forever(function () {
    while (irRemote.returnIrButton() == irRemote.irButton(IrButton.Up)) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 50)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 50)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    while (irRemote.returnIrButton() == irRemote.irButton(IrButton.Down)) {
        MiniCar.motor(Motorlist.M1, Direction1.Backward, 50)
        MiniCar.motor(Motorlist.M2, Direction1.Backward, 50)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    while (irRemote.returnIrButton() == irRemote.irButton(IrButton.Left)) {
        MiniCar.motor(Motorlist.M1, Direction1.Backward, 50)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 50)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    while (irRemote.returnIrButton() == irRemote.irButton(IrButton.Right)) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 50)
        MiniCar.motor(Motorlist.M2, Direction1.Backward, 50)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    while (irRemote.returnIrButton() == irRemote.irButton(IrButton.Ok)) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    while (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_2)) {
        hastighet += -50
        basic.showString("" + (hastighet))
    }
    while (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_8)) {
        hastighet += 50
        basic.showString("" + (hastighet))
    }
    while (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_3)) {
        hastighet = 200
        basic.showString("" + (hastighet))
    }
})
