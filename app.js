var myApp = angular.module('myApp',[]);

myApp.controller('BookCtrl', function BookCtrl($scope){
        $scope.books = [
                {'name': 'Effective Java', 'author':'Joshua Bloch'},
                {'name': 'Year without Pants', 'author':'Scott Berkun'},
                { 'name':'Confessions of public speaker','author':'Scott Berkun'},
                {'name':'JavaScript Good Parts','author':'Douglas Crockford'}
        ]
});

myApp.directive("ensureUnique",function($http){
        return {
                require:'ngModel',
                link:function(scope,ele,attrs,c){
                        scope.$watch(attrs.ngModel,function(n){
                                if(!n) return;
                                $http({
                                        method:'POST',
                                        url:'/api/check/'+attrs.ensureUnique,
                                        data:{
                                                field:attrs.ensureUnique,
                                                value:scope.ngModel
                                        }
                                })

                        })
                }
        }
})