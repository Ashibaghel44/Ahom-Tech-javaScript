// Create afunction that will return aBoolean value indicating iftwo circles
// defined by center coordinates and radius are intersecting


function circles(circle1X, circle1Y, circle1R, circle2X, circle2Y, circle2R){

    return distance(circle1X, circle1Y, circle2X, circle2Y) <= circle1R + circle2R;
}

function distance(x1, y1, x2, y2){

    let l1 = x2 - x1;
    let l2 = y2 - y1;
    
    return Math.sqrt(l1 * l1 + l2 * l2);
}

console.log(circles(200, 200, 100, 300,300, 50));

  