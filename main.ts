let color = 0
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    blinkaR()
    blinkaL()
})
function blinkaL () {
    for (let index = 0; index < 4; index++) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.red1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.blue1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.cyan)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.purple)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.white)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.yellow)
    }
}
function blinkaLSlump () {
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
function blinkaR () {
    for (let index = 0; index < 4; index++) {
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
        basic.pause(200)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
        basic.pause(200)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.blue1)
        basic.pause(200)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.cyan)
        basic.pause(200)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.purple)
        basic.pause(200)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.white)
        basic.pause(200)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.yellow)
        basic.pause(200)
    }
    MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.black)
}
basic.forever(function () {
	
})
basic.forever(function () {
    irRemote.connectInfrared(DigitalPin.P16)
})
