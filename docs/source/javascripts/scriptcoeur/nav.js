

// nav
// navigation-related scripts

  function openOffcanvas(nav) {
    var width = $(nav).attr('data-width');
    var push = $(nav).attr('data-push');

    $(nav).toggleClass('--open');

    if(width) {
      $(nav).css({'width': `${width}px`})
      if($(nav).hasClass('--left')) 
        $(nav).css({'left': `-${width}px`})
      else
        $(nav).css({'right': `-${width}px`})
    }

    console.log(nav, width)

    // tiny delay required bc we're adding a left/right: 0
    // and then immediately adding another w/ value
    function delayPush(obj, dir, width) {
      window.setTimeout(function() {
        if(dir == 'left')
          $(obj).css({left: `${width}px`})
        else 
          $(obj).css({right: `${width}px`})
      },1);
    }

    if(push) {
      $(push).addClass('_nav-offcanvas-target');
        console.log('aaa')

      if($(nav).hasClass('--open')) {
        if($(nav).hasClass('--left')) {
          $(push).addClass('--left');
          delayPush($(push),'left',width);
        } else if($(nav).hasClass('--right')) {
          $(push).addClass('--right');
          delayPush($(push),'right',width);
        }
      } else {
        if($(nav).hasClass('--left')) {
          delayPush($(push),'left',0);
        } else if($(nav).hasClass('--right')) {
          delayPush($(push),'right',0);
        }
      }
      
      
    }

  }