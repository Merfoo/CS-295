$(function() { //https://css-tricks.com/examples/RowColumnHighlighting/example-three.php
    $("table").delegate('td','mouseover mouseleave', function(e) {
        var $table = $(this).closest("table");

        if (e.type == 'mouseover') {
          $(this).parent().addClass("highlight");
          $table.children("colgroup").eq($(this).index()).addClass("highlight");
        } else {
          $(this).parent().removeClass("highlight");
          $table.children("colgroup").eq($(this).index()).removeClass("highlight");
        }
    });
});