input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("Ask A Question Then Shake")
    basic.showIcon(IconNames.Ghost)
    soundExpression.twinkle.playUntilDone()
})
input.onGesture(Gesture.Shake, function () {
    magic_8_ball_answer = randint(0, 3)
    if (magic_8_ball_answer == 3) {
        basic.showString("Only the future will tell ")
    } else if (magic_8_ball_answer == 2) {
        basic.showString("Yes")
    } else if (magic_8_ball_answer == 1) {
        basic.showString("No")
    } else {
        basic.showString("Maybe")
    }
})
let magic_8_ball_answer = 0
basic.showString("Ask A Question Then Shake")
basic.showIcon(IconNames.Ghost)
soundExpression.twinkle.playUntilDone()
basic.forever(function () {
	
})
