def on_logo_long_pressed():
    pass
input.on_logo_event(TouchButtonEvent.LONG_PRESSED, on_logo_long_pressed)

def on_forever():
    pass
basic.forever(on_forever)

def on_forever2():
    irRemote.connect_infrared(DigitalPin.P16)
basic.forever(on_forever2)
