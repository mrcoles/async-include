/* async-inlude - by Peter Coles http://mrcoles.com */
(function($) {
    $(function() {
        $('[data-async-url]').each(function() {
            var $this = $(this),
                url = $this.data('async-url');
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
