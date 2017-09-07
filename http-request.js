/**
 * Base module for the Http request handler
 * http-request.js
 *
 * 2017 @krescruz http://github.com/krescruz
 * @license http://opensource.org/licenses/MIT  MIT License
 */

(function($) {

    var CONTENT_TYPE_DEFAULT = 'application/json; charset=utf-8';
    var METHODS = {
        'GET': 'GET',
        'POST': 'POST',
    };

    function service() {
        return {
            'get': httpGet,
            'post': httpPost,
            'put': httpPut,
            'path': httpPatch,
            'delete': httpDelete,
        };
    }

    function httpGet(url, data) {
        return ajax({ 'url': url, 'data': data, 'method': METHODS.GET });
    }

    function httpPost(url) {
        return ajax({ 'url': url, 'data': data, 'method': METHODS.GET });
    }

    function httpPut() {}

    function httpPatch() {}

    function httpDelete() {}

    function ajax(config) {
        return $.ajax({
            'url': config.url,
            'method': config.method,
            'data': config.data,
            'contentType': CONTENT_TYPE_DEFAULT
        });
    }

})(jQuery);
