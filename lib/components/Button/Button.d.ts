import React from 'react';
export interface ButtonProps {
    text: string;
    type?: 'primary' | 'secondary';
    onClick: () => void;
}
export declare const Button: React.FC<ButtonProps>;
