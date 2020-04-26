import React, {ReactNode} from 'react';
import classnames from 'classnames';
import {FiCalendar, FiCheckSquare, FiEdit, FiPlus} from "react-icons/fi";
import './Button.scss';

type IconType = 'plus' | 'calendar' | 'edit' | 'check-square';

interface Props {
    children: ReactNode;
    onClick?: () => void;
    icon?: IconType;
    className?: string;
    disabled?: boolean;
    size?: 'small' | 'medium';
}

class Button extends React.Component<Props> {
    private static icons = {
        plus: FiPlus,
        calendar: FiCalendar,
        edit: FiEdit,
        "check-square": FiCheckSquare,
    };

    private static iconFor = (icon: IconType) => {
        let IconTag = Button.icons[icon];
        return <IconTag className="Button--icon"/>;
    };

    public static Primary = (props: Props) => <Button
        onClick={props.onClick}
        className={classnames("Button--primary", props.className)}
        disabled={props.disabled}
        size={props.size}
    >
        {props.children}
    </Button>;

    public render() {
        const {onClick, className, children, disabled, icon, size} = this.props;
        return (
            <button
                className={classnames(
                    "Button",
                    className,
                    disabled && "Button__disabled",
                    size && size === 'small' && 'Button__small',
                )}
                onClick={onClick}
                disabled={disabled}>
                {icon && Button.iconFor(icon)}
                {children}
            </button>
        );
    }
}

export default Button;
