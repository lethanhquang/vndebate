// ------------------------------
// =PLUGINS. custom made shizzle, yo!
// ------------------------------
(function($) {

  // ------------------------------
  // ScrollSidebar
  // ------------------------------
  $.scrollSidebar = function(element, options) {
    var defaults = {};
    var plugin = this;

    plugin.settings = {};
    var $element = $(element),
    element = element;

  }
  $.fn.scrollSidebar = function(options) {
    return this.each(function() {
      if (undefined == $(this).data('scrollSidebar')) {
        var plugin = new $.scrollSidebar(this, options);
        $(this).data('scrollSidebar', plugin);
      };
    });
  };


  // ------------------------------
  // Sidebar Accordion Menu
  // ------------------------------
  $.sidebarAccordion = function(element, options) {
    var defaults = {};
    var plugin = this;

    plugin.settings = {};
    var $element = $(element),
    element = element;

    plugin.init = function() {
      plugin.settings = $.extend({}, defaults, options);

      var menuCollapsed = localStorage.getItem('collapsed_menu');
      if (menuCollapsed === null) {
        localStorage.setItem('collapsed_menu', "false");
      }
      if (menuCollapsed === "true") {
        $('body').addClass('sidebar-collapsed');
      }

      $('body').on('click', 'ul.acc-menu a', function() {
        var LIs = $(this).closest('ul.acc-menu').children('li');
        $(this).closest('li').addClass('clicked');
        $.each( LIs, function(i) {
          if( $(LIs[i]).hasClass('clicked') ) {
            $(LIs[i]).removeClass('clicked');
            return true;
          }
          $(LIs[i]).find('ul.acc-menu:visible').slideToggle();
          $(LIs[i]).removeClass('open');
        });

        if (!$('body').hasClass('sidebar-collapsed') || $(this).parents('ul.acc-menu').length > 1) {
          if($(this).siblings('ul.acc-menu:visible').length>0)
            $(this).closest('li').removeClass('open');
          else
            $(this).closest('li').addClass('open');
          $(this).siblings('ul.acc-menu').slideToggle({
            duration: 200
          });
        }
      });

      var targetAnchor;
      $.each ($('ul.acc-menu a'), function() {
        if( this.href == window.location ) {
          targetAnchor = this;
          return false;
        };
      });

      var parent = $(targetAnchor).closest('li');
      while(true) {
        parent.addClass('active');
        parent.closest('ul.acc-menu').show().closest('li').addClass('open');
        parent = $(parent).parents('li').eq(0);
        if( $(parent).parents('ul.acc-menu').length <= 0 ) break;
      };

      var liHasUlChild = $('li').filter(function(){
        return $(this).find('ul.acc-menu').length;
      });
      $(liHasUlChild).addClass('hasChild');

    };
    plugin.init();
  }
  $.fn.sidebarAccordion = function(options) {
    return this.each(function() {
      if (undefined === $(this).data('sidebarAccordion')) {
        var plugin = new $.sidebarAccordion(this, options);
        $(this).data('sidebarAccordion', plugin);
      }
    });
  }

  // ------------------------------
  // Full Height Panel
  // ------------------------------
  $.fullHeightPanel = function(element, options) {
    var defaults = {};
    var plugin = this;
    plugin.settings = {};
    var $element = $(element),
    element = element;

    plugin.init = function() {
      plugin.settings = $.extend({}, defaults, options);

      try {
        fullHeightResizer();
      } catch(e) {
        // Do nothing
      }
    }

    var fullHeightResizer = function() {
      var t = Utility.getViewPort().height - $('.full-height-content').offset().top;
      var f = ($('footer').height() + parseInt($('.static-content').css('margin-bottom').replace('px', '')));

      if ($('.full-height-content').parent('.panel-body').size() === 1) {
        $('.full-height-content').height(t-f-41); //if full-height-panel
      } else {
        $('.full-height-content').height(t-f+10); //if full-height-body
      }
    }

    plugin.init();
  }
  $.fn.fullHeightPanel = function(options) {

    return this.each(function() {
      if (undefined == $(this).data('fullHeightPanel')) {
        var plugin = new $.fullHeightPanel(this, options);
        $(this).data('fullHeightPanel', plugin);
      }
    });
  }

})(jQuery);
// ------------------------------
// =/P
// ------------------------------
