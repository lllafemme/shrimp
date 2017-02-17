$(document).ready(function () {

    $('a').click(function () {

        var o=$(this).parent();

        var url=o.find('a').attr('url');

        var html='<a href="#" class="clone"><iframe width="560" height="315" src="https://www.youtube.com/embed/13-tta8h-fk" frameborder="0" allowfullscreen></iframe></a>';

        o.append(html);

        o=o.find('.clone');

        o.animate({width:'200%',height:'200%'});

        o.click(function () {


            $(this).remove();
        });
    });

});
