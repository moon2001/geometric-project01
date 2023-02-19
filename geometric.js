function getRandomColor() {
    var letters = 'BCDEFGHIJKLM';
    var color = '#';
    for (var i = 0; i < 8; i++) {
      color += letters[Math.floor(Math.random() * 3)];
    }
    return color;
  }
 