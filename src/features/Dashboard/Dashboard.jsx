import React, { useState, useRef } from 'react';
import { Container, List, Circle, Item, Main } from '../../common/Components';
import { Link } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import useResize from '../../hooks/useResize';

const Dashboard = ({ children }) => {
	const { height: windowSize } = useWindowSize();
	const [selected, setSelected] = useState(null);

	const componentRef = useRef();
	const { width, height } = useResize(componentRef);

	const links = [
		{ id: 'xyz12', name: 'Dashboard', url: '/dashboard' },
		{ id: 'xyz123', name: 'Clients', url: '/dashboard/clients' },
		// { id: "xyz456", name: "Programs", url: "/dashboard/programs" },
		{ id: 'xyz789', name: 'Settings', url: '/dashboard/settings' }
	];

	const onSelect = item => {
		console.log('item >>>', item);
		setSelected(item.url);
	};

	return (
		<Container left>
			<section>
				<Circle style={{ width, height }} ref={componentRef}>
					<h2>Avatar</h2>
				</Circle>
				<List>
					{links.map((item, index) => (
						<Item
							onClick={() => onSelect(item)}
							key={index}
							className={item.url === selected ? 'is-active' : ''}
						>
							<Link to={item.url}>{item.name}</Link>
						</Item>
					))}
					<Item className="last">
						<Link to="/login">Logout</Link>
					</Item>
				</List>
			</section>
			<Main height={windowSize}>
				{children}
				<br />
			</Main>
		</Container>
	);
};

export default Dashboard;
