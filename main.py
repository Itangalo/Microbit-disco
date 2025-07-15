def doWheels():
    global hjul, avstånd
    if hjul == 0:
        MiniCar.motor(Motorlist.M1, Direction1.FORWARD, 0)
        MiniCar.motor(Motorlist.M2, Direction1.FORWARD, 0)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
    if hjul == 1:
        MiniCar.motor(Motorlist.M1, Direction1.FORWARD, hjulhastighet)
        MiniCar.motor(Motorlist.M2, Direction1.FORWARD, hjulhastighet)
        basic.show_leds("""
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            """)
    if hjul == 2:
        MiniCar.motor(Motorlist.M1, Direction1.BACKWARD, hjulhastighet)
        MiniCar.motor(Motorlist.M2, Direction1.BACKWARD, hjulhastighet)
        basic.show_leds("""
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            """)
        backa()
    if hjul == 3:
        MiniCar.motor(Motorlist.M1, Direction1.FORWARD, vrida)
        MiniCar.motor(Motorlist.M2, Direction1.BACKWARD, vrida)
        basic.show_leds("""
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            """)
        hjul = 0
    if hjul == 4:
        MiniCar.motor(Motorlist.M1, Direction1.BACKWARD, vrida)
        MiniCar.motor(Motorlist.M2, Direction1.FORWARD, vrida)
        basic.show_leds("""
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            """)
        hjul = 0
    if avstånd == MiniCar.ultra():
        for index in range(20):
            MiniCar.motor(Motorlist.M1, Direction1.BACKWARD, 60)
            MiniCar.motor(Motorlist.M2, Direction1.BACKWARD, 60)
    if irKnapp == 4:
        avstånd += 2
    if irKnapp == 7:
        avstånd += -2
def getInput():
    global irKnapp, lampor, lamphastighet, hjul
    irKnapp = irRemote.return_ir_button()
    if irKnapp == irRemote.ir_button(IrButton.NUMBER_1):
        lampor = 1
    if irKnapp == irRemote.ir_button(IrButton.NUMBER_0):
        lampor = 0
    if irKnapp == irRemote.ir_button(IrButton.NUMBER_2):
        lamphastighet += -50
    if irKnapp == irRemote.ir_button(IrButton.NUMBER_5):
        lamphastighet += 50
    if irKnapp == irRemote.ir_button(IrButton.NUMBER_3):
        lamphastighet = hjulhastighetDefault
    if irKnapp == irRemote.ir_button(IrButton.OK):
        hjul = 0
    if irKnapp == irRemote.ir_button(IrButton.UP):
        hjul = 1
    if irKnapp == irRemote.ir_button(IrButton.DOWN):
        hjul = 2
    if irKnapp == irRemote.ir_button(IrButton.RIGHT):
        hjul = 3
    if irKnapp == irRemote.ir_button(IrButton.LEFT):
        hjul = 4
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
    basic.pause(lamphastighet)
def backa():
    for index2 in range(5):
        music.play(music.tone_playable(988, music.beat(BeatFraction.DOUBLE)),
            music.PlaybackMode.UNTIL_DONE)
        basic.pause(200)
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
    basic.pause(lamphastighet)
def doLights():
    global lamphastighet
    if lampor == 1:
        if Math.random_boolean():
            blinkaRSlump()
        else:
            blinkaLSlump()
    if lampor == 0:
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.BLACK)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.BLACK)
        lamphastighet = 200
color = 0
irKnapp = 0
avstånd = 0
hjulhastighet = 0
hjulhastighetDefault = 0
vrida = 0
hjul = 0
lamphastighet = 0
lampor = 0
irRemote.connect_infrared(DigitalPin.P16)
lampor = 0
lamphastighetDefault = 200
lamphastighet = lamphastighetDefault
hjul = 0
vrida = 39
hjulhastighetDefault = 75
hjulhastighet = hjulhastighetDefault
avstånd = 7

def on_forever():
    getInput()
    doLights()
    doWheels()
basic.forever(on_forever)
