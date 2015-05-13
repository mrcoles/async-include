/* async-inlude-extra - by Peter Coles http://mrcoles.com */
(function ($) {
  $.fn.asyncInclude = function() {
    return this.each(function() {
      var that = $(this);

      var url = that.data('async-include-url'),
        dataType = that.data('async-include-type') || that.data('type') || 'html',
        delay = that.data('async-include-delay') || that.data('delay') || 0;

      window.setTimeout(function() {
        $.ajax({
          url: url,
          dataType: dataType,
          type: 'get',
          context: that
        }).done(function(data) {
          var html = dataType == 'json' ? data.html : data;
          this.replaceWith(html);
        });
      }, delay);

      return this;
    });
  };
}(jQuery));