/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Peter Zerbinos
 * Created on: Sep 2024
 * This program shows the temperature
*/

//happy face when turned on
basic.clearScreen()
basic.showIcon(IconNames.Happy)

//our variable for the temperature
let findngTemperature = input.temperature()

//pressing A will show temperature then end with happy face
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString('The temperature is:')
    basic.showNumber(findngTemperature)
    basic.showString('C.')
    basic.showIcon(IconNames.Happy)
})
