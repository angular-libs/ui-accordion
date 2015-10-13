angular.module('myApp', ['uiAccordion']);
angular.module('myApp').controller("myCtrl", function ($scope) {
    function animate(isOpen){
        var body=$(this.body),header=$(this.header);
        if(isOpen){
            header.find('a').addClass('is-collapsed');
            header.find('a').addClass('is-expanded');
            body.removeClass('is-collapsed');
            body.addClass('is-expanded');
            body.addClass('animateIn')
        }else{
            header.find('a').removeClass('is-collapsed');
            header.find('a').removeClass('is-expanded');
            body.addClass('is-collapsed');
            body.removeClass('is-expanded');
            body.removeClass('animateIn')
        }
    }
    $scope.accordionGroupOptions1 = {
        animateOpen:function(){
            // this here refers to AccordionGroup object which has header,body and options
            animate.call(this,true);
        },
        animateClose:function(){
            animate.call(this,false);
        }
    };
    $scope.accordionGroupOptions2 = {
        animateOpen:function(){
            animate.call(this,true);
        },
        animateClose:function(){
            animate.call(this,false);
        }
    };
    $scope.accordionGroupOptions3 = {
        animateOpen:function(){
            animate.call(this,true);
        },
        animateClose:function(){
            animate.call(this,false);
        }
    }
});