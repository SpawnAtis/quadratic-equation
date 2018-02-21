module.exports = function solveEquation(equation) {
    let splitEquation = equation.split(' '),
        a = +splitEquation[0],
        b = +(splitEquation[3] + splitEquation[4]),
        c = +(splitEquation[7] + splitEquation[8]);

    let D = (b * b) - 4 * a * c;
    if(D < 0) { console.log('The roots are complex numbers'); return }

    let x1, x2;
    if(D < 0) {
        x1 = x2 = - (b / (2*a));
    } else {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
    }

    return [Math.round(x1), Math.round(x2)].sort((a, b) => a - b );
};
