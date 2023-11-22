// $(document).ready(function () {}) : this is used to ready the document for execution
console.log($);   // $ is also called jQuery
// syntax : $('selector').action();
// ex:
$(document).ready(function () {
    console.log(`I m in a new file`);
    console.log(`document is ready`);
    // there are three main types of selectors 
    // 1. element selector
    // 2. id selector
    // 3. class selector


    // 1. element selector
    // $('p').click(function () {
    //     console.log(`p is click`, this)
    // });
    // 2. id selector
    var a;
    // $('#first').click(a = () => { $('#first').hide(); })

    // 3. class selector
    // $('.second').click(function () { $('#first').show()  })

    // other selectors
    // $('*').click(()=>{console.log("p is clicked")});
    // $('p.second').click();
    // $('p:first').click();



    //events in jQuery

    // 1. mouse events : click, dbclick, mouseenter, mouseleave
    // 2. keyboard events : keypress, keydown, MediaKeyStatusMap
    // 3. form events : submit, change, focus, blur 
    // 4. document/window events : load, resize, scroll, unload 
    // $('p').dblclick(function () {
    //     console.log(`p is doubled click`)
    // })
    // $('p').mouseenter(()=>{
    //     console.log(`mouseenter`)
    // })
    // $('#first').hover(()=>{
    //     console.warn(`mouse Hovered`)
    // },
    //   () => {
    //         console.log("thanks for coming")
    // });

    // on method in jquery : multiple events can be handled...

    // $('p').on(
    //     {
    //         click: function () {
    //             console.log(`With on method click action is done`);
    //         },
    //         mouseleave: function () {
    //             console.warn(`With on method mouseleave action is done`);
    //         }
    //     });

    // $('div').hide(0, function () {
    //     $('div').show(4000);
    // });

    // $('button').click(function () {
    //     $('div').toggle(1000);
    // })


    // fade methods
    //-----------------
    // fadeIn()
    //-----------

    // $('button').click(function () {
    //     $('div').fadeOut(5000);
    // })

    // fadeOut()
    //-----------
    // $("div").hide();
    // $('button').click(function () {
    //     $('div').fadeIn(5000);
    // })

    // fadeToggle()
    //-------------

    // $('button').click(function () {
    //     $('div').fadeToggle();
    // })

    //fadeTo('speed', opacity(0-1),callback function)
    //-------------------------------

    // $('button').click(function () {
    //     $('div').fadeTo('slow',0.3);
    // })

    //slide methods
    //---------------
    // slideDown(speed)
    //------------------

    // $("div").hide();
    // $('button').click(function () {
    //     $('div').slideDown('slow');
    // })

    // slideUp(speed)
    //------------------

    // $('button').click(function () {
    //     $('div').slideUp(1000);
    // })

    // slideToggle(speed, callback)
    //-----------------------------

    // $('button').click(function () {
    //         $('div').slideToggle();
    //     })


    // animate methods
    //-----------------

    $('div').animate({
        opacity: 0.3,
        height: '150px',
        width: '450px'
    }, 3000);

    // $('div').animate({opacity : 0.5},4000);
    // $('div').animate({opacity : 0.9},2000);
    // $('div').animate({opacity : 0.4},5000);
    
    //stop method
    //-----------

    $('button').click(function () {
        $('div').stop();       
    });
})


