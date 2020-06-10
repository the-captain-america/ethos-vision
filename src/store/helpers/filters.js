const getCustomFields = (filterIdObj = {}) => {
	console.log('custom fields :::', filterIdObj);
	const { customFields } = filterIdObj;
	return (
		customFields &&
		Object.keys(customFields).reduce((allCriterias, uid) => {
			const { value } = customFields[uid];
			const newCriterias = value
				.filter(currentItem => currentItem.checked)
				.reduce((allCriterias, currentItem) => {
					const { value: val } = currentItem;
					return [
						...allCriterias,
						{
							uid,
							val
						}
					];
				}, []);
			return [...allCriterias, ...newCriterias];
		}, [])
	);
};

export { getCategories, getCustomFields };
