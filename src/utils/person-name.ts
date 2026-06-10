export const getAlphabetName = (index: number): string => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letterIndex = index % 26;
    const numberIndex = Math.floor(index / 26);

    const letter = alphabet[letterIndex];
    return numberIndex === 0 ? letter : `${letter}${numberIndex}`;
};
