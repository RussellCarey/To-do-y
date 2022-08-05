export const validateLength = (data: string, lengthMin: number, lengthMax: number) => {
	if (data.length < lengthMin || data.length > lengthMax) return false;
	return true;
};

export const validatePresence = (data: string) => {
	if (!data || data.length === 0) return false;
	return true;
};
