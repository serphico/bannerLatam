

$(document).ready(function(){
    debugger;
    var arequipaAnimationLeft = document.querySelector('.arequipaAnimationLeft'); 
    console.log(arequipaAnimationLeft);
    arequipaAnimationLeft.addEventListener('webkitAnimationEnd', onTransitionEnd, false);
    var loopeo = false;
    function onTransitionEnd() {
        
        if(!loopeo){
            loopeo=true;
            setTimeout(function() {
            $('#reservaAnimation').removeClass('reservaAnimationClass');
            $('#limaSquareAnimation').removeClass('squareAnimationLima');
            $('#arequipaAnimation').removeClass('arequipaAnimationLeft');
            $('#cuscoAnimation').removeClass('cuscoAnimationLeft');
            $('#cuscoSquareAnimation').removeClass('squareAnimationCusco');
            $('#arequipaSquareAnimation').removeClass('squareAnimationArequipa');
            },1000);
            setTimeout(function() {
                $('#reservaAnimation').addClass('reservaAnimationClass');
                $('#limaSquareAnimation').addClass('squareAnimationLima');
                $('#cuscoAnimation').addClass('cuscoAnimationLeft');
                $('#arequipaAnimation').addClass('arequipaAnimationLeft');
                $('#cuscoSquareAnimation').addClass('squareAnimationCusco');
            $('#arequipaSquareAnimation').addClass('squareAnimationArequipa');
            },1010);
        }


    }


    });

    

