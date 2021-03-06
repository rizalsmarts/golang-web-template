$(function() {
    $('body').on('click touchstart', '.notif-list-toggle', function(){
        $(this).closest('.notif').find('.notif-list').toggleClass('toggled');
        $('.notif .status').removeClass('ijo');
    });

    $('body').on('click touchstart', '.notif .header-notif .btn', function(e){
        e.preventDefault();
        // $('.notif .notif-list').removeClass('toggled');
        $(this).closest('.notif').toggleClass('toggled');
        $('.notif .status').removeClass('ijo');
    });

    $(document).on('mouseup touchstart', function (e) {
        var container = $('.notif, .notif .notif-list');
        if (container.has(e.target).length === 0) {
            container.removeClass('toggled');
        }
    });

    generalfunc({
        title:"Widget", 
        breadcrumb: {urlhome:"/template/index", menu:[{
            title:"Widget",
            href:"#"
        }]},
        panel: { areaPanel:'#widgetArea' }
    });

    // generate menu top
    




    // If type panel inline and content have script in end script must <\/script>
    // function init will run when add panel first and you can run again idpanel.init() example panel14.init()
    // function dispose will run when close panel and you can run again idpanel.dispose() example panel14.dispose()
    $('#addpanel').click(function(){
        // Add Panel Type Inline
        $('#widgetArea').eaciitPanel('add', {idpanel:'widget14', width: 'col-8', height:'0px', title:'Yoi Yoi', type: 'inline', url: '', reference:'', content:'aku adalah seorang pahlawan bertopeng pembela kebenaran dari Indonesia yang pantang menyerah dan tidak rajin menabung !! <br\/> Terimakasih !! <script>function init(){alert("Hallo dari panel 14");} function dispose(){alert("close panel 14");} <\/script>'});
    });

    $('#addpanel2').click(function(){
        $('#widgetArea').eaciitPanel('add', {idpanel:'widget15', width: 'col-2', height:'300px', title:'Yoi Yoi', type: 'inline', url: '', reference:'', content:'aku adalah seorang pahlawan bertopeng pembela kebenaran dari Indonesia yang pantang menyerah dan tidak rajin menabung !! <br/> Terimakasih !!'});
    });

    $('#addpanel3').click(function(){
        $('#widgetArea').eaciitPanel('add', {idpanel:'widget16', width: 'col-6', height:'500px', title:'Yoi Yoi', type: 'inline', url: '', reference:'', content:'aku adalah seorang pahlawan bertopeng pembela kebenaran dari Indonesia yang pantang menyerah dan tidak rajin menabung !! <br/> Terimakasih !!'});
    });

    $('#addpanel4').click(function(){
        // Add Panel Type Referance
        $('#widgetArea').eaciitPanel('add', {idpanel:'widget17', width: 'col-3', height:'200px', title:'Yoi Yoi', type: 'reference', url: '/template/gethtmlwidget', reference:'config/addwidget.html'});
    });

    $('#addpanel5').click(function(){
        // Add Panel Type Data Binding
        $('#widgetArea').eaciitPanel('add', {idpanel:'widget18', width: 'col-4', height:'500px', title:'Binding', type: 'reference', url: '/template/gethtmldatabind', reference:'config/addwidget.html'});
    });

    $('#hidepanel2').click(function(){
        // Hide Panel
        $('#widgetArea').eaciitPanel('hide',{id:'widget15'});
        // Or can use function panel.panel15_hide()
    });

    $('#showpanel2').click(function(){
        // Show Panel
        $('#widgetArea').eaciitPanel('show',{id:'widget15'});
        // Or can use function panel.widget15_show()
    });

    $('#closepanel2').click(function(){
        // Close Panel
        $('#widgetArea').eaciitPanel('close',{id:'widget15'});
        // Or can use function panel.widget15_close()
    });
});

function generalfunc (item) {
    $.each( item, function( key, value ) {
        if (key === 'panel'){
            // console.log(item.panel);
            var $o = $(item.panel.areaPanel), $divColumn;
            $divColumn = jQuery('<div />');
            $divColumn.addClass('column-eaciit');
            $divColumn.appendTo($o);
            // $(".column-eaciit").shapeshift({
            //     minColumns: 3
            // });

            // Coba Drag
            // $(".column-eaciit").sortable({
            //     cursor: 'move',
            //     connectWith: ".column-eaciit",
            //     helper: 'clone',
            //     appendTo: 'body',
            //     placeholder: 'placeholder',
            //     forcePlaceholderSize: true,
            //     start: function(e,ui){
            //         ui.placeholder.height(ui.item.height());
            //         ui.placeholder.width(ui.item.width());
            //     }
            // });
            // $(".column-eaciit").disableSelection();
            // $(".column-eaciit").addClass("ui-helper-clearfix");
            // $(".column-eaciit").addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" );
        }
    });
}

var methodsNotif = {
    data_notiv: [],
    add: function(item){
        var $o = this, $divmedia, $iconnotiv, $divtext;
        $divmedia = jQuery('<div />');
        $divmedia.addClass('media');
        $divmedia.attr('idnotiv',item.id);
        $divmedia.appendTo($o);

        $iconnotiv = jQuery('<i />');
        $iconnotiv.addClass('pull-left glyphicon glyphicon-info-sign');
        // $iconnotiv.css({'color':'#D1F026','font-size':'25px'});
        $iconnotiv.css({'color':'#26C7F0','font-size':'25px'});
        $iconnotiv.appendTo($divmedia);

        $divtext = jQuery('<div />');
        $divtext.addClass('media-body');
        $divtext.html(item.text);
        $divtext.appendTo($divmedia);

        methodsNotif.data_notiv.push(item);
        if (item.notif)
            $('.notif .status').addClass('ijo');
    },
    addMultiple: function(item){
        var $o = this, $divmedia, $iconnotiv, $divtext;
        for(var key in item.data){
            $divmedia = jQuery('<div />');
            $divmedia.addClass('media');
            $divmedia.attr('idnotiv',item.data[key].id);
            $divmedia.appendTo($o);

            $iconnotiv = jQuery('<i />');
            $iconnotiv.addClass('pull-left glyphicon glyphicon-info-sign');
            // $iconnotiv.css({'color':'#D1F026','font-size':'25px'});
            $iconnotiv.css({'color':'#26C7F0','font-size':'25px'});
            $iconnotiv.appendTo($divmedia);

            $divtext = jQuery('<div />');
            $divtext.addClass('media-body');
            $divtext.html(item.data[key].text);
            $divtext.appendTo($divmedia);

            methodsNotif.data_notiv.push(item.data[key]);
        }
        if (item.notif)
            $('.notif .status').addClass('ijo');
    },
    remove: function(item){
        var $o = this;
        if(item.key == 'id'){
            var data = $.grep(methodsNotif.data_notiv, function(e){ 
                return e.id != item.value;
            });
            methodsNotif.data_notiv = data;
            $o.find('div.media[idnotiv='+ item.value +']').remove('');
        } else {
            var data = $.grep(methodsNotif.data_notiv, function(e){ 
                return e.text != item.value;
            });
            methodsNotif.data_notiv = data;
            $o.find('div.media').remove(":contains('"+ item.value +"')");
        }
    },
    clear: function(item){
        var $o = this;
        $o.empty();
        methodsNotif.data_notiv = [];
    },
    get: function(){
        return methodsNotif.data_notiv;
    }
}

$.fn.eaciitNotif = function (method) {
    if (method == 'get')
        return methodsNotif[method].apply(this, Array.prototype.slice.call(arguments, 1));
    else
        methodsNotif[method].apply(this, Array.prototype.slice.call(arguments, 1));
}

function clickHideShowPanel() {
    var x_panel = $(this).closest('div.panel-container');
    var button = $(this).find('i');
    var content = x_panel.find('div.panel-content');
    content.slideToggle(200);
    // (x_panel.hasClass('fixed_height_390') ? x_panel.toggleClass('').toggleClass('fixed_height_390') : '');
    // (x_panel.hasClass('fixed_height_320') ? x_panel.toggleClass('').toggleClass('fixed_height_320') : '');
    button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
    if(button.hasClass('fa-chevron-up')){
        $(x_panel).animate({height:parseInt($(x_panel).attr('heightContent'))},200, function() {
            $('#menu-right .list-menu-right').css('min-height', $('.content-all').height());
            $('#menu-left .list-group').css('min-height', $('.content-all').height() - $('.content-header').height() - $('.content-breadcrumb').height());
            $(".column-eaciit").trigger("ss-rearrange");
        });
    } else {
        $(x_panel).animate({height:55},200, function() {
            $('#menu-right .list-menu-right').css('min-height', $('.content-all').height());
            $('#menu-left .list-group').css('min-height', $('.content-all').height() - $('.content-header').height() - $('.content-breadcrumb').height());
            $(".column-eaciit").trigger("ss-rearrange");
        });
    }
    x_panel.toggle
    setTimeout(function () {
        x_panel.resize();
    }, 50);

    // $('.panel-content').css('display', 'block');
    // $('.panel-header').find('i').toggleClass('fa-chevron-up').toggleClass('fa-chevron-down'); dan dilanjutkan animasi height
}

function removePanel(){
    // console.log($(this).closest('.panel-eaciit').attr('id'));
    var idpanel = $(this).closest('.panel-eaciit').attr('id');
    // if(window[idpanel+'_dispose'])
    //     window[idpanel+'_dispose']();
    if (window[idpanel]['dispose'])
        window[idpanel]['dispose']();
    delete window[idpanel];
    $(this).closest('.panel-eaciit').remove();
    $(".column-eaciit").trigger("ss-rearrange");
}

function addPanelNew(item, elem, content){
    var $o = elem, $column = elem.find('.column-eaciit'), $divpanel, $divcontainer, $panelheader, $headertitle, $ulnavbar, $linavbar, $hideshow, $removepanel, $divClear, $panelContent;
    $divpanel = jQuery('<div />');
    $divpanel.addClass('panel-eaciit');
    var widthpanel = '12';
    if(item.width === 'col-1')
        widthpanel = '1';
    else if(item.width === 'col-2')
        widthpanel = '2';
    else if(item.width === 'col-3')
        widthpanel = '3';
    else if(item.width === 'col-4')
        widthpanel = '4';
    else if(item.width === 'col-5')
        widthpanel = '5';
    else if(item.width === 'col-6')
        widthpanel = '6';
    else if(item.width === 'col-7')
        widthpanel = '7';
    else if(item.width === 'col-8')
        widthpanel = '8';
    else if(item.width === 'col-9')
        widthpanel = '9';
    else if(item.width === 'col-10')
        widthpanel = '10';
    else if(item.width === 'col-11')
        widthpanel = '11';

    // $divpanel.css('width', item.width);
    var idpanelwidget = 'Panel'+panel.seqid;
    console.log('id panel = ' + idpanelwidget);

    addModelObservable(idpanelwidget,item.idpanel);
    // $divpanel.attr({'id':item.idpanel, 'data-ss-colspan':widthpanel});
    $divpanel.attr({'id':idpanelwidget, 'idwidget':item.idpanel, 'data-ss-colspan':widthpanel});
    $divpanel.appendTo($column);

    $divcontainer = jQuery('<div />');
    $divcontainer.addClass('panel-container');
    if(item.height != "0px" && item.height != "0")
        $divcontainer.css('height',item.height);
    $divcontainer.appendTo($divpanel);

    $panelheader = jQuery('<div />');
    $panelheader.addClass('panel-header');
    $panelheader.appendTo($divcontainer);

    $headertitle = jQuery('<span />');
    $headertitle.addClass('panel-title');
    $headertitle.html(item.title);
    $headertitle.appendTo($panelheader);

    $ulnavbar = jQuery('<ul />');
    $ulnavbar.addClass('nav navbar-right panel-toolbox');
    $ulnavbar.appendTo($panelheader);

    $linavbar = jQuery('<li />');
    // $linavbar.html('<a class="collapse-link"><i class="fa fa-chevron-up"></i></a>');
    $linavbar.appendTo($ulnavbar);

    $hideshow = jQuery('<a />');
    $hideshow.addClass('collapse-link"');
    // $hideshow.attr(id, 'collapse-link');
    $hideshow.html('<i class="fa fa-chevron-up"></i>');
    $hideshow.click(clickHideShowPanel);
    $hideshow.appendTo($linavbar);

    $linavbar = jQuery('<li />');
    // $linavbar.html('<a class="close-link"><i class="fa fa-close"></i></a>');
    $linavbar.appendTo($ulnavbar);

    $removepanel = jQuery('<a />');
    $removepanel.addClass('close-link"');
    $removepanel.html('<i class="fa fa-close"></i>');
    $removepanel.click(removePanel);
    $removepanel.appendTo($linavbar);

    $divClear = jQuery('<div />');
    $divClear.css('clear', 'both');
    $divClear.appendTo($panelheader);

    $panelContent = jQuery('<div />');
    $panelContent.addClass('panel-content');
    $panelContent.html(content);
    $panelContent.appendTo($divcontainer);

    if(window['init']){
    //     window[item.idpanel+'_init']();
        // window[item.idpanel] = {};
        // window[item.idpanel]['init'] = window['init'],
        // window['init'] = undefined;
        // window[item.idpanel]['init']();
        window[idpanelwidget] = {};
        window[idpanelwidget]['init'] = window['init'],
        window['init'] = undefined;
        window[idpanelwidget]['init']();
    }

    if (window['dispose']){
        window[idpanelwidget]['dispose'] = window['dispose'];
        window['dispose'] = undefined;
    }
    // $(".column-eaciit").shapeshift({minColumns: 4});
    $(".column-eaciit").shapeshift();
    
    $($divpanel).find('div.panel-container').attr('heightContent', $($divpanel).find('div.panel-container').height() + 22);
    $('#menu-right .list-menu-right').css('min-height', $('.content-all').height());
    $('#menu-left .list-group').css('min-height', $('.content-all').height() - $('.content-header').height() - $('.content-breadcrumb').height());

    ko.applyBindings(model, $divpanel[0]);
}

var panel = {
    seqid: 0,
}, model = {};

function addModelObservable(itemid, widgetid){
    // console.log('model observalbel '+itemid+'_'+widgetid);
    // model[itemid+'_'+widgetid] = ko.observable({});
    console.log('model observalbel '+itemid+'_'+widgetid);
    model[itemid+'_'+widgetid] = ko.observable({});
}

function addMethods(fn, method){
    panel[fn] = method.panel;
}

var methodsPanel = {
    add: function (item){
        // if ($('#'+).length == 0){
        panel.seqid += 1;
        var $elem = this;
        if (item.type === 'inline'){
            addPanelNew(item, $elem, item.content);
        } else {
            var url = item.url;
            $.ajax({
                url: url,
                type: 'post',
                dataType: 'html',
                // contentType: "application/json",
                // data : JSON.stringify({path: item.reference}),
                data : {path: item.reference},
                success : function(res) {
                    var idpanelwidget = 'Panel'+panel.seqid;
                    // var result = res.replace(/PanelID/i, idpanelwidget);
                    var resultpanel = res.replace(new RegExp('PanelID', 'g'), idpanelwidget);
                    var resultwidget = resultpanel.replace(new RegExp('WidgetID', 'g'), item.idpanel);
                    // console.log(resultwidget);
                    addPanelNew(item, $elem, resultwidget);
                },
            });
        }
        var idpanel = item.idpanel;
        addMethods(idpanel + '_hide', {'panel': function(){methodsPanel['hide']({id:idpanel})} });
        addMethods(idpanel + '_show', {'panel': function(){methodsPanel['show']({id:idpanel})} });
        addMethods(idpanel + '_close', {'panel': function(){methodsPanel['close']({id:idpanel})} });
            // ko.applyBindings(model);
        // } else {
        //     alert("id panel alredy exist!! ");
        // }
        // console.log($($divpanel).find('div.panel-container').height() + 22);
    },
    hide: function(item){
        $('div[idwidget='+item.id+']').find('.panel-content').css('display', 'none');
        // $('#'+item.id).find('.panel-header').find('i').toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        var $iconHideShow = $('#'+item.id).find('.panel-header li').eq(0).find('i');
        $iconHideShow.removeClass('fa-chevron-up');
        $iconHideShow.addClass('fa-chevron-down');

        var x_panel = $('div[idwidget='+item.id+']').find('div.panel-container');
        if($iconHideShow.hasClass('fa-chevron-up')){
            $(x_panel).animate({height:parseInt($(x_panel).attr('heightContent'))},200, function() {
                $('#menu-right .list-menu-right').css('min-height', $('.content-all').height());
                $('#menu-left .list-group').css('min-height', $('.content-all').height() - $('.content-header').height() - $('.content-breadcrumb').height());
                $(".column-eaciit").trigger("ss-rearrange");
            });
        } else {
            $(x_panel).animate({height:55},200, function() {
                $('#menu-right .list-menu-right').css('min-height', $('.content-all').height());
                $('#menu-left .list-group').css('min-height', $('.content-all').height() - $('.content-header').height() - $('.content-breadcrumb').height());
                $(".column-eaciit").trigger("ss-rearrange");
            });
        }
        x_panel.toggle
        setTimeout(function () {
            x_panel.resize();
        }, 50);
        // $(".column-eaciit").trigger("ss-event-arrange");
    },
    show: function(item){
        $('div[idwidget='+item.id+']').find('.panel-content').css('display', 'block');
        var $iconHideShow = $('div[idwidget='+item.id+']').find('.panel-header li').eq(0).find('i');
        $iconHideShow.removeClass('fa-chevron-down');
        $iconHideShow.addClass('fa-chevron-up');

        var x_panel = $('div[idwidget='+item.id+']').find('div.panel-container');
        if($iconHideShow.hasClass('fa-chevron-up')){
            $(x_panel).animate({height:parseInt($(x_panel).attr('heightContent'))},200, function() {
                $('#menu-right .list-menu-right').css('min-height', $('.content-all').height());
                $('#menu-left .list-group').css('min-height', $('.content-all').height() - $('.content-header').height() - $('.content-breadcrumb').height());
                $(".column-eaciit").trigger("ss-rearrange");
            });
        } else {
            $(x_panel).animate({height:55},200, function() {
                $('#menu-right .list-menu-right').css('min-height', $('.content-all').height());
                $('#menu-left .list-group').css('min-height', $('.content-all').height() - $('.content-header').height() - $('.content-breadcrumb').height());
                $(".column-eaciit").trigger("ss-rearrange");
            });
        }
        x_panel.toggle
        setTimeout(function () {
            x_panel.resize();
        }, 50);
        // $(".column-eaciit").trigger("ss-event-arrange");
    },
    close: function(item){
        var elem = $('div[idwidget='+item.id+']');
        for (var i = 0; i < elem.length; i++){
            var itemid = $('div[idwidget='+item.id+']').eq(i).attr('id');
            // console.log(itemid);
            if (window[itemid]['dispose'])
                window[itemid]['dispose']();
            delete window[itemid];
        }

        $('div[idwidget='+item.id+']').remove();
        $(".column-eaciit").trigger("ss-rearrange");
    }
}

$.fn.eaciitPanel = function (method) {
    // console.log(method);
    methodsPanel[method].apply(this, Array.prototype.slice.call(arguments, 1));
}