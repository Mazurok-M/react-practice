import cn from 'classnames';
import css from './Button.module.css';

export default function Button({
  text,
  buttonImg,
  btnAction,
  styleName,
  ...restProps
}) {
  return (
    <button
      type="button"
      onClick={btnAction}
      className={cn(css.button, styleName)}
      {...restProps}
    >
      {buttonImg && <img src={buttonImg} alt={text} />}

      {text}
    </button>
  );
}
