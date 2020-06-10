import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
	Button,
	Heading,
	Content,
	Block,
	Circle,
	Row
} from '../../common/Components';
import Builder from '../../features/Builder';
import Modal from '../../common/Modal';
import Icon from '../../common/Icon';

const Layer = () => {
	const [menu, setMenu] = useState(true);

	const onClose = () => setMenu(false);
	const onToggle = () => setMenu(!menu);

	return (
		<Block
			align="flex-end"
			direction="column"
			verticalPush={16}
			bgColor="white"
		>
			<Button onClick={() => setMenu()}>Close</Button>
			<Block bgColor="white" verticalPush={16} padding={2}>
				<Builder />
			</Block>
		</Block>
	);
};

const Client = () => {
	const [state, setState] = useState({
		membership: ''
	});
	const [modal, setModal] = useState(false);
	const [type, setType] = useState('');

	const modalTypes = {
		notification: (
			<Content>
				<h3>Client Notification Sent</h3>
				<span>You have successfully sent your client an notification.</span>
			</Content>
		)
	};

	const onClose = () => {
		setModal(false);
	};

	const openModal = type => {
		setModal(true);
		setType(type);
	};

	const programs = [
		{
			uid: 'xyz123',
			name: 'First Workout Program',
			duration: 31,
			status: 'started'
		},
		{
			uid: 'xyz123',
			name: 'First Workout Program',
			duration: 31,
			status: 'completed'
		}
	];

	const history = useHistory();
	let { id } = useParams();
	return (
		<div>
			<Button reset onClick={() => history.push('/dashboard/clients')}>
				<Icon name="CHEVRON_LEFT" size={20} fill="white" stroke="none" />
			</Button>
			{/* <h1>{id} Profile</h1> */}
			<Block
				verticalPush={16}
				justify="space-between"
				align="flex-start"
				bgColor="white"
			>
				<Circle horizontalPush={16} size={200}>
					<Heading>Avatar</Heading>
				</Circle>
				<Block style={{ paddingLeft: '16px' }} reset>
					<Heading>User: {id}</Heading>
					<p>Activate Client:</p>
					<Button onClick={() => openModal('notification')}>
						Notify Client
					</Button>
				</Block>
			</Block>

			<Layer />
			<ul>
				{programs.map((item, index) => (
					<Row key={index}>
						<h2>{item.name}</h2>
						<span>{item.status}</span>
						<span>{`${item.duration} days`}</span>
					</Row>
				))}
			</ul>
			<Modal onClose={onClose} isActive={modal}>
				{modalTypes[type]}
			</Modal>
		</div>
	);
};

export default Client;
