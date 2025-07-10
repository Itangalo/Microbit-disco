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
    basic.pause(200)
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
    basic.pause(200)
}
let color = 0
irRemote.connectInfrared(DigitalPin.P16)
basic.forever(function () {
    while (irRemote.returnIrButton() == irRemote.irButton(IrButton.Number_1)) {
        if (Math.randomBoolean()) {
            blinkaRSlump()
        } else {
            blinkaLSlump()
        }
    }
})
