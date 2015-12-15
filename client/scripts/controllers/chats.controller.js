angular
	.module('Whatsapp')
	.controller('ChatsCtrl', function ChatsCtrl($scope, $reactive){
	
	$reactive(this).attach($scope);

	this.remove = remove;
  $scope.shouldShowDelete = false;

  this.helpers({
    data(){
      return Chats.find();
    }
  });

   function remove (chat){
     this.data.remove(chat);
  }


});