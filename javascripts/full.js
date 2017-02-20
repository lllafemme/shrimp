// $(document).ready(function () {
//
//     $('video').click(function () {
//
//         var o=$(this).parent();
//
//         var src=o.find('video').attr('source src');
//
//         var html='<a href="#" class="big"><video  autoplay="autoplay" loop="loop" preload="auto"><source src="a.mp4"></source></video></a>';
//
//         o.append(html);
//
//         o=o.find('.big');
//
//         o.animate({width:'200%',height:'200%'});
//
//         o.click(function () {
//
//
//             $(this).remove();
//         });
//
//     });
//
// });

$(document).ready(function(){
   $("video").click(function(){    
        $("video").animate({height: "300px"});
    });
});
