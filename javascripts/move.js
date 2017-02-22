

$(document).ready(function() {
    animateA($('.a'));
    animateA($('.b'));
    animateA($('.c'));
    animateA($('.d'));
    animateA($('.e'));
    animateA($('.f'));
    animateA($('.g'));
    animateA($('.h'));
    animateA($('.i'));
    animateA($('.j'));
    animateA($('.k'));
    animateA($('.l'));
    animateA($('.m'));
    animateA($('.n'));
    animateA($('.o'));
    animateA($('.p'));
    animateA($('.q'));

});

function makeNewPosition($container) {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $container.height() - 50;
    var w = $container.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateA($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    // $target.animate({
    //   transform: 'translateY(100px)' //'translateY(' + newq[0] + 'px) translateX(' + newq[1] + 'px)'
    // }, speed, function() {
    //     animateA($target);
    // });

    // $target.animate({
    //   transform: 'translateY(' + newq[0] + 'px) translateX(' + newq[1] + 'px)'
    // }, {
    //   duration: speed,
    //   step: function() {
    //     $target.css('transform','translateY(' + newq[0] + 'px) translateX(' + newq[1] + 'px)');
    //   },
    //   complete: function() {
    //     console.log('animation complete')
    //     animateA($target)
    //   }
    // })

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateA($target);
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier =0.05;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}
