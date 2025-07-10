input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    blinkaR()
})
function blinkaL () {
    MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.red1)
    MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
    MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.blue1)
    MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.cyan)
    MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.purple)
    MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.white)
    MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.yellow)
}
function blinkaR () {
    MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
    MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
    MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.blue1)
    MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.cyan)
    MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.purple)
    MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.white)
    MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.yellow)
}
basic.forever(function () {
	
})
basic.forever(function () {
    irRemote.connectInfrared(DigitalPin.P16)
})
