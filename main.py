def blinkaLSlump():
    global color
    color = randint(1, 7)
    if color == 1:
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.RED1)
    elif color == 2:
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.GREEN1)
    elif color == 3:
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.BLUE1)
    elif color == 4:
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.CYAN)
    elif color == 5:
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.PURPLE)
    elif color == 6:
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.WHITE)
    else:
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.YELLOW)
    basic.pause(hastighet)
def blinkaRSlump():
    global color
    color = randint(1, 7)
    if color == 1:
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.RED1)
    elif color == 2:
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.GREEN1)
    elif color == 3:
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.BLUE1)
    elif color == 4:
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.CYAN)
    elif color == 5:
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.PURPLE)
    elif color == 6:
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.WHITE)
    else:
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.YELLOW)
    basic.pause(hastighet)
color = 0
hastighet = 0
irRemote.connect_infrared(DigitalPin.P16)
hastighet = 200

def on_forever():
    while irRemote.return_ir_button() == irRemote.ir_button(IrButton.NUMBER_1):
        while irRemote.return_ir_button() != irRemote.ir_button(IrButton.NUMBER_0):
            if Math.random_boolean():
                blinkaRSlump()
            else:
                blinkaLSlump()
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.BLACK)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.BLACK)
basic.forever(on_forever)

def on_forever2():
    while irRemote.return_ir_button() == irRemote.ir_button(IrButton.UP):
        MiniCar.motor(Motorlist.M1, Direction1.FORWARD, 50)
        MiniCar.motor(Motorlist.M2, Direction1.FORWARD, 50)
        basic.show_leds("""
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            """)
    while irRemote.return_ir_button() == irRemote.ir_button(IrButton.DOWN):
        MiniCar.motor(Motorlist.M1, Direction1.BACKWARD, 50)
        MiniCar.motor(Motorlist.M2, Direction1.BACKWARD, 50)
        basic.show_leds("""
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            """)
        for index in range(4):
            music.play(music.tone_playable(988, music.beat(BeatFraction.DOUBLE)),
                music.PlaybackMode.UNTIL_DONE)
            basic.pause(200)
    while irRemote.return_ir_button() == irRemote.ir_button(IrButton.LEFT):
        MiniCar.motor(Motorlist.M1, Direction1.BACKWARD, 50)
        MiniCar.motor(Motorlist.M2, Direction1.FORWARD, 50)
        basic.show_leds("""
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            """)
    while irRemote.return_ir_button() == irRemote.ir_button(IrButton.RIGHT):
        MiniCar.motor(Motorlist.M1, Direction1.FORWARD, 50)
        MiniCar.motor(Motorlist.M2, Direction1.BACKWARD, 50)
        basic.show_leds("""
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            """)
    while irRemote.return_ir_button() == irRemote.ir_button(IrButton.OK):
        MiniCar.motor(Motorlist.M1, Direction1.FORWARD, 0)
        MiniCar.motor(Motorlist.M2, Direction1.FORWARD, 0)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
basic.forever(on_forever2)

def on_forever3():
    global hastighet
    while irRemote.return_ir_button() == irRemote.ir_button(IrButton.NUMBER_2):
        hastighet += -50
        basic.show_string("" + str((hastighet)))
    while irRemote.return_ir_button() == irRemote.ir_button(IrButton.NUMBER_8):
        hastighet += 50
        basic.show_string("" + str((hastighet)))
    while irRemote.return_ir_button() == irRemote.ir_button(IrButton.NUMBER_3):
        hastighet = 200
        basic.show_string("" + str((hastighet)))
basic.forever(on_forever3)
