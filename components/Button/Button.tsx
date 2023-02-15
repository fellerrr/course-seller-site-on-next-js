import styles from './Button.module.css';
import {ButtonProps} from "./Button.props";
import Image from 'next/image';
import cn from "classnames";


const Button = ({appearance, arrow = 'none', children, className, ...props}:ButtonProps):JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]:appearance == 'primary',
                [styles.ghost]:appearance == 'ghost',
            })}
            {...props}
        >
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, {
                [styles.down]:arrow == 'down',
            })}>
                  <Image
                      priority
                      src="./arrow.svg"
                      height={10}
                      width={10}
                      alt="arrow"
                      className={styles.hoverable}
                      style={{
                          filter: appearance == 'primary' ? 'brightness(0) invert(1)' : 'none'
                      }}
                  />
            </span>}
        </button>
    );
};

export default Button;

