import React, {ReactNode} from 'react';
import classnames from 'classnames';
import {FiCalendar, FiCheckSquare, FiEdit, FiPlus} from "react-icons/fi";
import './Tab.scss';

type IconType = 'plus' | 'calendar' | 'edit' | 'check-square';

interface Props {
    children: ReactNode;
    onClick?: () => void;
    icon?: IconType;
    className?: string;
    disabled?: boolean;
    size?: 'small' | 'medium';
}

class Tab extends React.Component<Props> {
    private static icons = {
        plus: FiPlus,
        calendar: FiCalendar,
        edit: FiEdit,
        "check-square": FiCheckSquare,
    };

    private static iconFor = (icon: IconType) => {
        let IconTag = Tab.icons[icon];
        return <IconTag className="Tab--icon"/>;
    };

    public static Primary = (props: Props) => <Tab
        onClick={props.onClick}
        className={classnames("Tab--primary", props.className)}
        disabled={props.disabled}
        size={props.size}
    >
        {props.children}
    </Tab>;

    public render() {
        const {onClick, className, children, disabled, icon, size} = this.props;
        return (
            <button
                className={classnames(
                    "Tab",
                    className,
                    disabled && "Tab__disabled",
                    size && size === 'small' && 'Tab__small',
                )}
                onClick={onClick}
                disabled={disabled}>
                {icon && Tab.iconFor(icon)}
                {children}
            </button>
        );
    }
}

export default Tab;
