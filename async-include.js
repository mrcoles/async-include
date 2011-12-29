/* async-inlude - by Peter Coles http://mrcoles.com */
(function($) {
    $(function() {
        $('.async-include').each(function() {
            var $this = $(this),
                url = $this.data('url');
            $.ajax({
                url: url,
                dataType: 'html',
                type: 'get',
                success: function(html) {
                    $this.replaceWith(html);
                }
            });
        });
    });
})(jQuery);
