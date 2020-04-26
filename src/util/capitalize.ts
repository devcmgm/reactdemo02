export default function capitalize(str: string) {
    if (str) return str[0].toUpperCase() + str.slice(1, str.length);
    else return '';
}
