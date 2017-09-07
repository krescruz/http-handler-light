/**
 * Module for handling http response
 * http-response.js
 *
 * Copyright 2017 @krescruz, https://github.com/krescruz/
 * Released under MIT license <https://opensource.org/licenses/MIT>
 */
 
(function($) {

    var STATUS = {
        'HTTP_200_OK': 200,
        'HTTP_201_CREATED': 201,
        'HTTP_204_NO_CONTENT': 204,
        'HTTP_400_BAD_REQUEST': 400,
        'HTTP_404_NOT_FOUND': 404
    };

    function service() {
        return {
            'success': success,
            'fail': fail
        };
    }

    function success(data, textStatus, xhr) {
        var statusCode = getCodeStatus(xhr);

        switch (statusCode) {
            case STATUS.HTTP_200_OK:
                return responseOk(data);
            case STATUS.HTTP_201_CREATED:
                return responseCreate(data);
            default:
                throw new Error('HTTP CODE: ' + statusCode + ' - code not defined.');

        }
        return undefined;
    }

    function fail(xhr, textStatus, error) {
        var statusCode = getCodeStatus(xhr);

        try {
            data = JSON.parse(xhr.responseText);
        } catch (ex) {
            data = xhr.responseText;
        }

        switch (statusCode) {
            case 400:
                return responseBadRequest(data);
            default:
                return responseDefaulError(data, statusCode);
        }

        return undefined;
    }

    function getCodeStatus(xhr) {
        return parseInt(xhr.status, 10);
    }
    
    /**
     * HTTP CODE 200 response handler
     */
    function responseOk(data) {
        return resolve(data);
    }

    /**
     * HTTP CODE 201 response handler
     */
    function responseCreate() {
        return resolve(data);
    }

    /**
     * HTTP CODE 400 response handler
     */
    function responseBadRequest(data) {
        return reject({
            'type': 'INVALID_FORM',
            'detail': 'Invalid form.',
            'error': data
        });
    }

    /**
     * Handler for unknown HTTP status codes
     */
    function responseDefaulError(data, status) {
        return reject({
            'type': 'CRITICAL_ERROR',
            'detail': 'Critical error.',
            'erro': data,
            'statusCode': status
        });
    }

    function resolve(data) {
        var deferred = $.Deferred();
        deferred.resolve(data);
        return deferred.promise();
    }

    function reject(data) {
        var deferred = $.Deferred();
        return deferred.reject(data);
    }

})(jQuery);
