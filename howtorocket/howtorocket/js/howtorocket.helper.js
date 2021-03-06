/**
 * helper对象：提供一些常用帮助函数
 */
(function($) {

window.howtorocket = window.howtorocket || {};

howtorocket.helper = {

    escapeHTML: function(str){
        // @note: escape & first
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    ,escapeMarkdownText: function(type, content){
        switch(type){
            case 'code':
                return howtorocket.helper.escapeHTML(content)
                    .replace(/[ \t]+/g, function($0){
                        var i = $0.length, 
                            str = '';
                        while(i-- > 0){
                            str += '&nbsp;';
                        }
                        return str;
                    });

            case 'paragraph':
            case 'ol':
            case 'ul':
                return howtorocket.helper.escapeHTML(content)
                    .replace(/\+@@__LEFT__@@/g, '<')
                    .replace(/-@@__RIGHT__@@/g, '>')
                    .replace(/\+@@__EMPHASIS__@@/g, '<em>')
                    .replace(/-@@__EMPHASIS__@@/g, '</em>');
        }
    }

};
    

})(Zepto);

