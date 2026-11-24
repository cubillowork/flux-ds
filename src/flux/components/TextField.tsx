import { useId, type InputHTMLAttributes } from 'react';
import { Icon } from '../icons/Icon';
import type { IconName } from '../icons/icons';

// Figma: ❖ COMPONENTS → Forms → "Input" (State × Size: Small | Middle | Big) + "Field" (label, supporting text, error)
export type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  label?: string;
  /** Helper text under the field. */
  hint?: string;
  /** Error message — also turns the field red. */
  error?: string;
  size?: 'md' | 'lg';
  /** Icon at the start of the field (e.g. Search). */
  icon?: IconName;
  /** Unit or text at the end (Figma: Show Unit), e.g. "kW". */
  unit?: string;
};

export function TextField({ label, hint, error, size = 'lg', icon, unit, id, className, ...rest }: TextFieldProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const hintId = hint || error ? `${fieldId}-hint` : undefined;
  return (
    <div className={['flux-field', className].filter(Boolean).join(' ')}>
      {label && (
        <label htmlFor={fieldId} className="p5-regular flux-field__label">
          {label}
          {rest.required && <span className="flux-field__required"> *</span>}
        </label>
      )}
      <div className={`flux-input flux-input--${size}${error ? ' is-error' : ''}${rest.disabled ? ' is-disabled' : ''}`}>
        {icon && <Icon name={icon} size={size === 'lg' ? 24 : 18} className="flux-input__icon" />}
        <input id={fieldId} aria-invalid={!!error} aria-describedby={hintId} className="p3-regular" {...rest} />
        {unit && <span className="p3-regular flux-input__unit">{unit}</span>}
      </div>
      {(error || hint) && (
        <span id={hintId} className={`p5-regular ${error ? 'flux-field__error' : 'flux-field__hint'}`}>
          {error && <Icon name="Alert" size={16} />}
          {error ?? hint}
        </span>
      )}
    </div>
  );
}

/** Search box: TextField with the Search icon and type="search". */
export function SearchField(props: Omit<TextFieldProps, 'icon' | 'type'>) {
  return <TextField type="search" icon="Search" {...props} />;
}
