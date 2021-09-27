import React from 'react';
import { useState } from 'react';
import GameInviteModal from './gameInviteModal';
import GameSettingModal from './gameSettingModal';

// type User = {
// 	nickname: string,
// 	avater: string
// }

function Game() {
	const [isGameSettingModalOpen, setGameSettingModalOpen] = useState(false);
	const [isGameInviteModalOpen, setGameInviteModalOpen] = useState(false);

	const openGameSettingModal = () => {
		setGameSettingModalOpen(true);
	}

	const closeGameSettingModal = () => {
		setGameSettingModalOpen(false);
	}

	const openGameInviteModal = () => {
		setGameInviteModalOpen(true);
	}

	const closeGameInviteModal = () => {
		setGameInviteModalOpen(false);
	}

	return (
		<React.Fragment>
			<button onClick={openGameSettingModal}>modal open</button>
			<GameSettingModal open={isGameSettingModalOpen} close={closeGameSettingModal}  header="게임 설정">
			</GameSettingModal>

			{/* from Server send */}
			<button onClick={openGameInviteModal}>modal open</button>
			<GameInviteModal open={isGameInviteModalOpen} 
							close={closeGameInviteModal} 
							header="게임 참가" 
							user={{nickname: "chlee", avater: "https://cdn.intra.42.fr/users/small_chlee.png"}}
							isCustom={1}>
			</GameInviteModal>
		</React.Fragment>
	);

}

export default Game;        

