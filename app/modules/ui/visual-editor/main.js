(function() {
    
    //Extends information about visual editor with the visual editor itself
    $.extend(didgeridoo.ui.visualEditor, $("#didgeridoo-visual-editor")[0]);

    didgeridoo.ui.visualEditor.iframe = $('#didgeridoo-visual-editor-iframe');

    didgeridoo.ui.visualEditor.interactor = $('#didgeridoo-visual-editor-interactor');

    didgeridoo.ui.visualEditor.selectedParent = null;

    didgeridoo.ui.visualEditor.interactor.selectObjectFromPoint = function(e, hilight) {
        var doc = didgeridoo.ui.visualEditor.iframe[0].contentDocument,
            body = doc.body,
            deltaX = $('#didgeridoo-visual-editor-interactorContainer')[0].scrollLeft,
            deltaY = $('#didgeridoo-visual-editor-interactorContainer')[0].scrollTop,
            x = (e.offsetX || e.layerX) - deltaX,
            y = (e.offsetY || e.layerY) - deltaY,
            result = null;
            

        hilight = hilight != false ? true : false;

        if(hilight) {$("#hilightDiv", body).css('display', 'none');}

        /**
         * ¡¡¡¡¡¡REVISAR ESTO!!!!!!!
         */
        if( $el = $(doc.elementFromPoint(x-1, y-1)) ) {
            if($el[0].tagName.toLowerCase() == 'body' || $el[0].tagName.toLowerCase() == 'html') {
                result = body;
            } else {
                if(hilight) {
                    var $parents = $el.parents(),
                        i = 0,
                        $pel = false;
                    while($parents && i < $parents.length) {
                        console.log($parents[i].tagName + ' - ' + $parents[i].className + ' - ' + $parents[i].scrollHeight + ' - ' + $($parents[i]).outerHeight() + ' - ' + $($parents[i]).css('overflow'));
                        if(($parents[i].scrollHeight &&
                           $parents[i].scrollHeight > $parents[i].clientHeight &&
                           $($parents[i]).css('overflow') == 'auto') ||
                           $parents[i].tagName.toLowerCase() == 'body') {
                            $pel = $($parents[i]);
                            break;
                        } else {
                            i++;
                        }
                    }

                    console.log($pel);

                    $("#didgeridoo-visual-editor-interactor").css({
                        'left': $pel.offset().left,
                        'top': $pel.offset().top,
                        'width': '100%',
                        'height': '100%',
                        'display': 'block'
                    });
                    $("#didgeridoo-visual-editor-resizerContainer").css({
                        'left': $pel.offset().left,
                        'top': $pel.offset().top,
                        'width': $pel[0].scrollWidth,
                        'height': $pel[0].scrollHeight,
                        'display': 'block'
                    });
                    $("#didgeridoo-visual-editor-resizer").css({
                        'left': $el.offset().left,
                        'top': $el.offset().top,
                        'width': $el.outerWidth(),
                        'height': $el.outerHeight()
                    });

                    $('#didgeridoo-visual-editor-interactor').bind('scroll', function(e) {
                        $pel[0].scrollTop = this.scrollTop;
                        console.log($pel[0].scrollTop);
                    });
                }

                result = $el;
            }

            didgeridoo.ui.visualEditor.interactor.css('display','none');
            didgeridoo.ui.visualEditor.interactor.height(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body.scrollHeight);
            didgeridoo.ui.visualEditor.interactor.width(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body.scrollWidth);
            didgeridoo.ui.visualEditor.interactor.css('display','block');
        }

        didgeridoo.ui.visualEditor.selectedObject = result;
        return result;
    };

    didgeridoo.ui.visualEditor.iframe.wrapTextBlobs = function() {
        body = didgeridoo.ui.visualEditor.iframe[0].contentDocument.body;

        $(body).contents().filter(function() {
            return this.nodeType == 3 && this.length > 1; //3 is the type of a TextNode
        }).wrap('<span></span>').end();
    };



    didgeridoo.ui.visualEditor.interactor.droppable({
        accept: '.didgeridoo-tools-tool',
        drop: function( event, ui ) {
            var body = didgeridoo.ui.visualEditor.iframe[0].contentDocument.body,
                path = didgeridoo.toolsPath + $(ui.draggable).data('toolPath'),
                containerEl = didgeridoo.ui.visualEditor.interactor.selectObjectFromPoint(event);

            $.ajax(path, {
                cache: false, //TIP: Do we have to cache or not? :/ Maybe a config option for didgeridoo?
                success: function(data) {
                    $(containerEl, body).append(data);
                }
            });
        }
    });

    $("#didgeridoo-visual-editor-resizerContainer, #didgeridoo-visual-editor-resizer").mousedown(function(e) {
        $("#didgeridoo-visual-editor-resizerContainer").css('display', 'none');
    });

    didgeridoo.ui.visualEditor.interactor.mouseup(function(e) {
        didgeridoo.ui.visualEditor.interactor.selectObjectFromPoint(e);
    });

    didgeridoo.ui.visualEditor.interactor.mousemove(function(e) {
        if(didgeridoo.ui.visualEditor.isDragging == true) {
            didgeridoo.ui.visualEditor.interactor.selectObjectFromPoint(e);
        }
    });

    /*$('#didgeridoo-visual-editor-interactor').scroll(function(e) {
        didgeridoo.ui.visualEditor.iframe[0].contentWindow.scroll(this.scrollLeft, this.scrollTop);
    });*/

    didgeridoo.ui.visualEditor.iframe.load(function() {
        didgeridoo.ui.visualEditor.iframe.wrapTextBlobs();
        //didgeridoo.ui.visualEditor.interactor.height($(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body).outerHeight());
        //didgeridoo.ui.visualEditor.iframe[0].contentDocument.getElementsByTagName('html')[0].height = didgeridoo.ui.visualEditor.iframe[0].contentWindow.outerHeight;
        didgeridoo.ui.visualEditor.interactor.height(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body.scrollHeight);
        didgeridoo.ui.visualEditor.interactor.width(didgeridoo.ui.visualEditor.iframe[0].contentDocument.body.scrollWidth);
        //$('#didgeridoo-visual-editor-interactorContainer').css('display', 'none');
    });
})();