"""
Copyright (c) 2020 MTHS All rights reserved

Created by: Peter Zerbinos
Created on: Sep 2024
This program shows the temperature

"""

from microbit import *


# happy face when turned on
display.clear()
display.show(Image.HAPPY)

# our variable for the temperature
findingTemperature = input.temperature()

# pressing A will show temperature then end with happy face
while True:
    if button_a.is_pressed():
        display.clear()
        display.scroll("The temperature is:")
        display.scroll(str(findingTemperature))
        display.scroll("C.")
        display.show(Image.HAPPY)
