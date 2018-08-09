function update() {
    let _element = document.getElementById("progressBar"),
        _width = 1;
    
    let _setInterval = setInterval(progress,10);
    function progress() {
        if (_width >= 100) {
            clearInterval(_setInterval);
          } else {
            _width++; 
            _element.style.width = _width + '%'; 
          }
    }
}