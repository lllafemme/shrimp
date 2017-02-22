$('#preview').click(function() {
    var docHeight = $(document).height(),
        docWidth = $(document).width(),
        $figure = $('#preview'),
        figureWidth = $figure.width(),
        figureHeight = $figure.height(),
        heightMax = docHeight - figureHeight,
        widthMax = docWidth - figureWidth;

    $figure.css({
        left: Math.floor( Math.random() * widthMax ),
        top: Math.floor( Math.random() * heightMax )
    });
});
