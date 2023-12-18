import cn from 'classnames';
import css from './Button.module.css';

export default function Button({
  text,
  buttonIcon,
  btnAction,
  styleName,
  ...restProps
}) {
  return (
    <button
      className={cn(css.button, styleName)}
      {...restProps}
      onClick={btnAction}
    >
      {buttonIcon && <img src={buttonIcon} alt={text} />}
      {text}
    </button>
  );
}
