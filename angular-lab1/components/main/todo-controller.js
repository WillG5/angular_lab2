"use strict";
{
    angular.module('todoapp')
    .controller('ToDoController', function(){
        const $ctrl = this;

        $ctrl.tasks = [
            {todo: 'Walk the dog', complete: true},
            {todo: 'Go to the store', complete: true},
            {todo: 'Get Gas', complete: false},
            {todo: 'Wash the car', complete: true }
        ];

        $ctrl.add=function(task){
            $ctrl.tasks.push({todo:$ctrl.list, complete: true});
            console.log($ctrl.tasks)
        };

     

        $ctrl.delete=function(index){
            $ctrl.tasks.splice(index, 1);

        };

            
        
    });
}