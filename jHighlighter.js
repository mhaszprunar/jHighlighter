;(function( $ ){

  $.fn.jHighlighter = function( options ) {

    var $elementScope = $(this); // remember scope
    
    // Create some defaults, extending them with any options that were provided
    var settings = $.extend( {
          'elementType'         : 'checkbox',       // checkbox | radio | block  (block = just line highlighting, no element activation)
          'highlightClass'      : 'lineChecked',    // any CSS class name
          'hideParent'          : true,             // hides the parent element of the radio or checkbox. Set to FALSE for block elements automatically
          'parentFilter'        : null,             // if hideParent is true this filter will be used for parents()
          'multipleSelection'   : true              // only valid if elementType = block. For all others this will be set automatically
        }, options);

    // setting multipleSelection right for checkbox and radio
    switch(settings.elementType)
    {
        case 'radio':       settings.multipleSelection = false; break;
        case 'checkbox':    settings.multipleSelection = true; break;
        case 'block':       settings.hideParent = false; break;
    }

    // helper function to toggle elements
    var toggleElement = function($element, $input){
        $element.toggleClass(settings.highlightClass);

        var newCheckState = ($input.is(':checked')) ? false : true;
        $input.prop('checked', newCheckState);
    }
    
    // reset every element to deactivated state
    var resetElements = function(){
        var $elements = $elementScope.filter('.' + settings.highlightClass).removeClass(settings.highlightClass);
        
        if(settings.elementType !== 'block')
        {
            $elements.find(':' + settings.elementType).prop('checked', false);
        }
    }
    
    // Attach events
    return this.each(function() {
        var $element = $(this),
            $input = (settings.elementType === 'block') ? $(null) : $element.find(':'+settings.elementType);

        // if inputs are already activated
        if($input.is(':checked'))
        {
            $element.addClass(settings.highlightClass);
        }

        // hide parent element
        if(settings.hideParent)
        {
            if(settings.parentFilter === null) // if no parentFilter is given, hide the parent one level up
            {
                $input.parent().hide();
            }
            else // if parentFilter is given, use it
            {
                $input.parents(settings.parentFilter).hide();   
            }
        }

        // click handler
        $element.on('click', function(){
            if(settings.multipleSelection === false) // no multiple selection, e.g. radio or custom set
            {
                resetElements();
            }
            toggleElement($element, $input); // activate clicked checkbox
        });

    });

  };
})( jQuery );