angular
	.module('Whatsapp')
	.controller('ChatCtrl', function ChatCtrl($scope, $reactive, $stateParams){
		$reactive(this).attach($scope);

		let chatId = $stateParams.chatId;

		this.helpers({
			data(){
				return Chats.findOne(chatId);
			}
		});


	});