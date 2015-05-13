/* async-inlude - by Peter Coles http://mrcoles.com */
(function ($) {
  $.fn.asyncInclude = function() {
    return this.each(function() {
      var that = $(this);

      var url = that.data('async-include-url');

      $.ajax({
        url: url,
        dataType: 'html',
        type: 'get',
        context: that
      }).done(function(html) {
        this.replaceWith(html);
      });

      return this;
    });
  };
}(jQuery));