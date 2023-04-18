  $(document).ready(function() {
//кнб механика
$('#butk').click(function () {
  f1('k')

})
$('#butn').click(function () {
  f1('n')
})
$('#butb').click(function () {
  f1('b')
})
let comp = ''
let hum = ''
const turn = ['k', 'n', 'b']
const win = ['kn', 'nb', 'bk']
const loose = ['kb', 'nk', 'bn']
const draw = ['kk', 'nn', 'bb']
let scoreh = 0
let score = 0

function f1(x) {
  console.log(x)
  hum = x
  let r = Math.round(Math.random() * 3)
  comp = turn[r]
  console.log(hum, comp)
  $('#out').text(' Маг ' + hum + ' Колдун ' + comp)
  // анимация хода comp
  switch (comp) {
    case 'k':
      $("#faer1").show().animate({
        left: '250px',
        height: '100px',
        width: '100px'
      }, 1000, function() {
        $('#faer1').animate({
          left: '-=250px',
          height: '0px',
          width: '0px'
        }, 1000).hide();
      });
      break;
    case 'n':
      $("#water1").show().animate({
        left: '250px',
        height: '100px',
        width: '100px'
      }, 1000, function() {
        $('#water1').animate({
          left: '-=250px',
          height: '0px',
          width: '0px'
        }, 1000).hide();
      });
      break;
    case 'b':
      $("#rock1").show().animate({
        left: '250px',
        height: '100px',
        width: '100px'
      }, 1000, function() {
        $('#rock1').animate({
          left: '-=250px',
          height: '0px',
          width: '0px'
        }, 1000).hide();
      });
      break;
    default:
      break;
  }
  proverka()
}


function proverka() {
  let result = hum + comp
  if (win.includes(result)) {
    console.log('победа')
    scoreh += 1
    $('#out').append('  Вы Победили ' + scoreh + ' : ' + score)
  }
  else if (loose.includes(result)) {
    console.log(' проиграл ')
    score += 1
    $('#out').append('  Увы Проиграл ' + scoreh + ' : ' + score)
  }
  else {
    console.log('ничья')
    $('#out').append('  Эх Ничья ' + scoreh + ' : ' + score)
  }
}

//анимация боя
$("#butn").click(function () {
  $("#water").show().animate({
    left: '250px',
    height: '100px',
    width: '100px'
  }).queue(function () {
    $('#water').animate({
      left: '0px',
      height: '0px',
      width: '0px'
    }).hide();
    $('#water').dequeue();
  });
});
$("#butk").click(function () {
  $("#faer").show().animate({
    left: '250px',
    height: '100px',
    width: '100px'
  }).queue(function () {
    $('#faer').animate({
      left: '0px',
      height: '0px',
      width: '0px'
    }).hide();
    $('#faer').dequeue();
  });
});
$("#butb").click(function () {
  $("#rock").show().animate({
    left: '250px',
    height: '100px',
    width: '100px'
  }).queue(function () {
    $('#rock').animate({
      left: '0px',
      height: '0px',
      width: '0px'
    }).hide();
    $('#rock').dequeue();
  });
});})