$(function() {

  $('#inbreakfast').change(function() {
    checkText1($('#inbreakfast')[0].value)
  })

  function checkText1(text) {
    if (text == 'клуб завтрак' || text == 'breakfast club') {
      $('#divbreakfast').text('true')
    } else {
      $('#divbreakfast').text('false')
    }
  }



  $('#inchtivo').change(function() {
    checkText2($('#inchtivo')[0].value)
  })

  function checkText2(text) {
    if (text == 'криминальное чтиво' || text == 'pulp fiction') {
      $('#divchtivo').text('true')
    } else {
      $('#divchtivo').text('false')
    }
  }



  $('#innapoleon').change(function() {
    checkText3($('#innapoleon')[0].value)
  })

  function checkText3(text) {
    if (text == 'наполеон динамит' || text == 'napoleon dynamite') {
      $('#divnapoleon').text('true')
    } else {
      $('#divnapoleon').text('false')
    }
  }



  $('#inlambs').change(function() {
    checkText4($('#inlambs')[0].value)
  })

  function checkText4(text) {
    if (text == 'молчание ягнят' || text == 'the silence of the lambs') {
      $('#divlambs').text('true')
    } else {
      $('#divlambs').text('false')
    }
  }



  $('#ingarrel').change(function() {
    checkText5($('#ingarrel')[0].value)
  })

  function checkText5(text) {
    if (text == 'друзья' || text == 'friends') {
      $('#divgarrel').text('true')
    } else {
      $('#divgarrel').text('false')
    }
  }




  $('#inchildren').change(function() {
    checkText6($('#inchildren')[0].value)
  })

  function checkText6(text) {
    if (text == 'уже не дети' || text == 'electrick children') {
      $('#divchildren').text('true')
    } else {
      $('#divchildren').text('false')
    }
  }



  $('#inmommy').change(function() {
    checkText7($('#inmommy')[0].value)
  })

  function checkText7(text) {
    if (text == 'мамочка' || text == 'mommy') {
      $('#divmommy').text('true')
    } else {
      $('#divmommy').text('false')
    }
  }


  $('#inlove').change(function() {
    checkText8($('#inlove')[0].value)
  })

  function checkText8(text) {
    if (text == 'воображаемая любовь' || text == 'heartbreaks') {
      $('#divlove').text('true')
    } else {
      $('#divlove').text('false')
    }
  }



  $('#inklik').change(function() {
    checkText9($('#inklik')[0].value)
  })

  function checkText9(text) {
    if (text == 'клык' || text == 'dogtooth') {
      $('#divklik').text('true')
    } else {
      $('#divklik').text('false')
    }
  }



  $('#infrances').change(function() {
    checkText10($('#infrances')[0].value)
  })

  function checkText10(text) {
    if (text == 'милая фрэнсис' || text == 'frances ha') {
      $('#divfrances').text('true')
    } else {
      $('#divfrances').text('false')
    }
  }



  $('#infight').change(function() {
    checkText11($('#infight')[0].value)
  })

  function checkText11(text) {
    if (text == 'бойцовский клуб' || text == 'fight club') {
      $('#divfight').text('true')
    } else {
      $('#divfight').text('false')
    }
  }



  $('#inlost').change(function() {
    checkText12($('#inlost')[0].value)
  })

  function checkText12(text) {
    if (text == 'трудности перевода' || text == 'lost in translation') {
      $('#divlost').text('true')
    } else {
      $('#divlost').text('false')
    }
  }


  $('#inbanda').change(function() {
    checkText13($('#inbanda')[0].value)
  })

  function checkText13(text) {
    if (text == 'банда аутсайдеров' || text == 'band of outsiders') {
      $('#divbanda').text('true')
    } else {
      $('#divbanda').text('false')
    }
  }



  $('#inmoonrise').change(function() {
    checkText14($('#inmoonrise')[0].value)
  })

  function checkText14(text) {
    if (text == 'королевство полной луны' || text == 'moonrise kingdom') {
      $('#divmoonrise').text('true')
    } else {
      $('#divmoonrise').text('false')
    }
  }

})





  // $(document).keypress(function (e) {
  //     if (e.which == 13) {
  //         getTxt1();
  //     }
  // });
  //
  // function getTxt1() {
  //   var film = 'клуб завтрак';
  //   var film2 = 'breakfast club';
  //   var inputValue = $('#inbreakfast').val();
  //   var t = $('#divbreakfast').text('true')
  //   var f = $('#divbreakfast').text('false')
  //
  //   if (film = inputValue) {
  //     t
  //   } else if (film2 = inputValue) {
  //     t
  //   } else {
  //     f
  //   }
  //
  //
  //
  //
  // }

//
// function getTxt2() {
// var film = 'криминальное чтиво';
// var film2 = 'pulp fiction';
// var inputValue = $('#inchtivo').val();
// var t = $('#divchtivo').text('true')
// var f = $('#divchtivo').text('false')
//
// if (film == inputValue) {t}
// else if (film2 == inputValue) {t}
// else {f}
// }
// //
// function getTxt3() {
// var film = 'наполеон динамит';
// var film2 = 'napoleon dynamite';
// var inputValue = $('#innapoleon').val();
// var t = $('#divnapoleon').text('true')
// var f = $('#divnapoleon').text('false')
//
// if (film == inputValue) {t}
// else if (film2 == inputValue) {t}
// else {f}
// }
// //
// //
// function getTxt4() {
// var film = 'молчание ягнят';
// var film2 = 'the silence of the lambs';
// var inputValue = $('#inlambs').val();
// var t = $('#divlambs').text('true')
// var f = $('#divlambs').text('false')
//
// if (film == inputValue) {t}
// else if (film2 == inputValue) {t}
// else {f}
// }
// //
// function getTxt5() {
// var film = 'друзья';
// var film2 = 'friends';
// var inputValue = $('#ingarrel').val();
// var t = $('#divgarrel').text('true')
// var f = $('#divgarrel').text('false')
//
// if (film == inputValue) {t}
// else if (film2 == inputValue) {t}
// else {f}
// }
// //
// function getTxt6() {
//   var film = 'уже не дети';
//   var film2 = 'electrick children';
//   var inputValue = $('#inchildren').val();
//   var t = $('#divchildren').text('true')
//   var f = $('#divchildren').text('false')
//
//   if (film == inputValue) {t}
//   else if (film2 == inputValue) {t}
//   else {f}
// }
// //
// function getTxt7() {
// var film = 'мамочка';
// var film2 = 'mommy';
// var inputValue = $('#inmommy').val();
// var t = $('#divmommy').text('true')
// var f = $('#divmommy').text('false')
//
// if (film == inputValue) {t}
// else if (film2 == inputValue) {t}
// else {f}
// }
// //
// function getTxt8() {
// var film = 'воображаемая любовь';
// var film2 = 'heartbeats';
// var inputValue = $('#inlove').val();
// var t = $('#divlove').text('true')
// var f = $('#divlove').text('false')
//
// if (film == inputValue) {t}
// else if (film2 == inputValue) {t}
// else {f}
// }
// //
// function getTxt9() {
// var film = 'клык';
// var film2 = 'dogtooth';
// var inputValue = $('#inklik').val();
// var t = $('#divklik').text('true')
// var f = $('#divklik').text('false')
//
// if (film == inputValue) {t}
// else if (film2 == inputValue) {t}
// else {f}
// }
// //
// function getTxt10() {
// var film = 'милая фрэнсис';
// var film2 = 'frances ha';
// var inputValue = $('#infrances').val();
// var t = $('#divfrances').text('true')
// var f = $('#divfrances').text('false')
//
// if (film == inputValue) {t}
// else if (film2 == inputValue) {t}
// else {f}
// }
// //
// function getTxt11() {
// var film = 'бойзовский клуб';
// var film2 = 'fight club';
// var inputValue = $('#infight').val();
// var t = $('#divfight').text('true')
// var f = $('#divfight').text('false')
//
// if (film == inputValue) {t}
// else if (film2 == inputValue) {t}
// else {f}
// }
// //
// function getTxt12() {
// var film = 'трудности перевода';
// var film2 = 'lost in translation';
// var inputValue = $('#inlost').val();
// var t = $('#divlost').text('true')
// var f = $('#divlost').text('false')
//
// if (film == inputValue) {t}
// else if (film2 == inputValue) {t}
// else {f}
// }
// //
// function getTxt13() {
// var film = 'банда аутсайдеров';
// var film2 = 'band of outsiders';
// var inputValue = $('#inbanda').val();
// var t = $('#divbanda').text('true')
// var f = $('#divbanda').text('false')
//
// if (film == inputValue) {t}
// else if (film2 == inputValue) {t}
// else {f}
// }
// //
// function getTxt14() {
// var film = 'королевство полной луны';
// var film2 = 'moonrise kingdom';
// var inputValue = $('#inmoonrise').val();
// var t = $('#divmoonrise').text('true')
// var f = $('#divmoonrise').text('false')
//
// if (film == inputValue) {t}
// else if (film2 == inputValue) {t}
// else {f}
// }
// //
