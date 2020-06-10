import React, { useRef, useState, useCallback, useEffect } from 'react';
import Icon from '../../common/Icon';
import ClickOutside from '../../hooks/clickOutside';
import {
	SelectGroup,
	SelectStyle,
	SelectOption,
	Chevron,
	SelectedItem,
	SelectContainer
} from './styledComponents';

const Select = props => {
	const {
		name = '',
		callback = () => {},
		options = [],
		disabled = false,
		defaultValue = '',
		placeholder = 'Select'
	} = props;
	const [isOpen, setIsOpen] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const [selectedName, setSelectedName] = useState('');
	const [focus, setFocus] = useState(false);
	const [disabledState, setDisabled] = useState(true);

	const handleOpen = () => {
		if (disabledState) return;
		setIsOpen(!isOpen);
	};
	const handleClose = () => {
		setIsOpen(false);
		setFocus(false);
	};

	const handleSelected = index => {
		setSelectedIndex(index);
		setSelectedName(options[index].name);
		callback(options[index]);
		setIsOpen(false);
	};

	const getDefault = ({ options, defaultValue }) => {
		console.log('default Value', defaultValue);
		return options
			.filter(item => item.value === defaultValue)
			.map(obj => obj.name);
	};

	const selectRef = useRef(null);

	useEffect(() => {
		if (!defaultValue || defaultValue === '') return;
		setSelectedName(getDefault({ options, defaultValue }));
		// eslint-disable-next-line
	}, [options, defaultValue]);

	const onFocus = () => {
		setFocus(true);
	};

	const onEnter = useCallback(event => {
		if (event.keyCode === 13) handleOpen();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		selectRef.current.addEventListener('focus', onFocus, true);
		return () => {
			// eslint-disable-next-line
			selectRef.current.removeEventListener('focus', onFocus, false);
		};
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (!focus) return;
		document.addEventListener('keydown', onEnter, false);
		return () => {
			document.removeEventListener('keydown', onEnter, false);
		};
		// eslint-disable-next-line
	}, [focus]);

	useEffect(() => {
		setDisabled(disabled);
	}, [disabled]);

	const renderItems = () => {
		if (!options) {
			return (
				<SelectOption>
					<span className="text">None</span>
				</SelectOption>
			);
		}
		return options.map((item, index) => (
			<SelectOption
				key={index}
				tabIndex={1}
				isActive={selectedIndex === index}
				onClick={() => handleSelected(index)}
			>
				<span className="text">{item.name}</span>
			</SelectOption>
		));
	};

	return (
		<SelectStyle>
			<ClickOutside callback={handleClose}>
				<SelectContainer>
					<SelectedItem
						ref={selectRef}
						isDisabled={disabledState}
						isActive={selectedIndex !== -1}
						className={selectedIndex !== -1 ? 'is-active' : 'not-active'}
						tabIndex={(isOpen && -1) || disabledState ? -1 : 0}
						name="selected-item"
						onClick={handleOpen}
					>
						{selectedName ? (
							<span className="text">{selectedName}</span>
						) : (
							<span className="text">{placeholder}</span>
						)}
						<Chevron className="icon">
							<Icon name="CARROT" size={24} viewBox="-7 -7 20 20" />
						</Chevron>
					</SelectedItem>
					{isOpen && <SelectGroup>{renderItems()}</SelectGroup>}
				</SelectContainer>
			</ClickOutside>
		</SelectStyle>
	);
};

export default Select;
