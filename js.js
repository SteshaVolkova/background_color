var global = {
  konami: function() {
    var konamikeys = [38,38,40,40,37,39,37,39,66,65],
    started = false,
    count = 0;

    $(document).keydown(function(e){
      var reset = function() {
        started = false;
        count = 0;
        return;
      };

      key = e.keyCode;
      // Проверка: нажата ли последовательность?
      if(!started){
        if(key == 38){
          started = true;
        }
      }
      // Если мы начнем, обратить внимание на нажатия клавиш, ища правильную последовательность.
      if (started){

      if (konamikeys[count] == key){
        count++;
      } else {
        // Ключ введён неправильно.
        reset();
      }
      if (count == 10){
    // вроде получилось.

      setTimeout(function() {
          $('#myModal').trigger('click');
      }, 100);
      $(window).ready(function() {
          var myModal = new jBox('Modal');
          new jBox('Modal', {
          attach: '#myModal',
          width: 300,
          height: 80,
          animation: "tada",
          title: 'My Modal Window',
          content: '<i>Hello there!</i>'
          });
      });
      reset();
      }
      }else {
        reset();
      }
    });
  }
}
global.konami();
