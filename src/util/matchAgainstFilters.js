export default ({ objectProperties, filtersToMatch }) => {
	const filtersChecksum = filtersToMatch.length;
	let propertiesChecksum = 0;

	objectProperties.forEach(property => {
		if (filtersToMatch.includes(property)) propertiesChecksum += 1;
	});

	if (filtersChecksum === propertiesChecksum) return true;
	return false;
};
