import { Button as ButtonNative } from 'react-native';

interface ButtonProps {
    label: string;
    link: string;
    disabled?: boolean;
}

export function Button({ label, link, disabled }: ButtonProps) {
    return (
        <ButtonNative title={label} disabled={disabled} />
    );
}