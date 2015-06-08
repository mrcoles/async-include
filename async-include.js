/* async-inlude - by Peter Coles http://mrcoles.com */
(function ($) {
  $.fn.asyncInclude = function() {
    return this.each(function() {
      var $this = $(this);

      var url = $this.data('async-include-url');

      $.ajax({
        url: url,
        dataType: 'html',
        type: 'get',
        context: $this
      }).done(function(html) {
        this.replaceWith(html);
      });

      return this;
    });
  };
}(jQuery));