input.onGesture(Gesture.EightG, function () {
    if (seguridad == 1) {
        basic.showIcon(IconNames.Happy)
        basic.showNumber(input.acceleration(Dimension.Strength))
        seguridad = 0
    }
})
input.onButtonPressed(Button.A, function () {
    seguridad = 1
})
input.onGesture(Gesture.SixG, function () {
    if (seguridad == 1) {
        basic.showIcon(IconNames.Yes)
        basic.showNumber(input.acceleration(Dimension.Strength))
        seguridad = 0
    }
})
input.onGesture(Gesture.ThreeG, function () {
    if (seguridad == 1) {
        basic.showIcon(IconNames.Sad)
        basic.showNumber(input.acceleration(Dimension.Strength))
        seguridad = 0
    }
})
let seguridad = 0
seguridad = 0
