export const formatRupiah = (value: string | number): string => {
    const numberString = value.toString().replace(/[^0-9]/g, '');
    if (!numberString) return '';
    
    const number = parseInt(numberString, 10);
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(number);
};

export const parseRupiah = (value: string): string => {
    return value.replace(/[^0-9]/g, '');
};
