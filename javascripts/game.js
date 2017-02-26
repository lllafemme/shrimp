// function getTxt() {
//
//   if $('#aud').val().txt('клуб завтрак') {
//     $('frame').txt('true')
//   }
//
//   else if $('#aud').val().txt('') {
//     $('frame').txt('true')
//   }
//
//   else {
//     $('frame').txt('false')
//   }
//
//
//   $(function(){
//     $('a.ph.a').click(function(){
//       getTxt()
//     })
//   })
// function getTxt() {
// if ($('#aud').val() == 'клуб завтрак') {
// console.log('nay')
// } else {
// console.log('yay')
// }

function getTxt() {
var film = 'клуб завтрак';
var inputValue = $('#aud').val();

if (film == inputValue) {
console.log('урааа')
} else {
 $('frame').txt('false')
}
}

$('#aud').keyup(function(event) {
if (event.keyCode == 13) {
getTxt()
}
})
