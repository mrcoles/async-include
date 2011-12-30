/* async-inlude-extra - by Peter Coles http://mrcoles.com */
(function($) {
    $(function() {
        $('[data-async-url]').each(function() {
            var $this = $(this),
                url = $this.data('async-url'),
                dataType = $this.data('type'),
                delay = $this.data('delay') || 0;
            window.setTimeout(function() {
                $.ajax({
                    url: url,
                    dataType: dataType,
                    type: 'get',
                    success: function(data) {
                        var html = dataType == 'json' ? data.html : data;
                        $this.replaceWith(html);
                    }
                });
            }, delay);
        });
    });
})(jQuery);
