input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    minode.rgbChooseColor(ConnName.A0, MiNodeColor.MiNode_RGB_COLOR_CYAN)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
    minode.rgbChooseColor(ConnName.A0, MiNodeColor.MiNode_RGB_COLOR_YELLOW)
})
basic.forever(function () {
    basic.showNumber(minode.DHTGetHumidity(ConnName.A1))
    if (minode.DHTGetHumidity(ConnName.A1) > 60) {
        minode.FanControl_1(AnalogConnName.Analog_A2, 90)
    } else {
        minode.FanControl_1(AnalogConnName.Analog_A2, 0)
    }
})
