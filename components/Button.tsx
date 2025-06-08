
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

// Base props common to all button variants
interface BaseButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
}

// Props for rendering as an anchor tag (<a>)
type AnchorButtonProps = BaseButtonProps & 
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps | 'children'> & {
  href: string;
  to?: never; 
};

// Props for rendering as a React Router <Link>
type RouterLinkButtonProps = BaseButtonProps & 
  Omit<LinkProps, keyof BaseButtonProps | 'children' | 'to'> & { 
  to: string;
  href?: never; 
};

// Props for rendering as a native <button>
type NativeButtonProps = BaseButtonProps & 
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps | 'children'> & {
  to?: never;
  href?: never;
};

// Combined ButtonProps type using a discriminated union
export type ButtonProps = AnchorButtonProps | RouterLinkButtonProps | NativeButtonProps;

const Button: React.FC<ButtonProps> = (componentProps) => { 
  const {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    leftIcon,
    rightIcon,
    disabled, 
  } = componentProps;

  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ease-in-out";
  
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-dark focus:ring-primary-light transform hover:scale-105 focus:scale-105",
    secondary: "bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary-light transform hover:scale-105 focus:scale-105",
    outline: "bg-transparent text-primary border border-primary hover:bg-primary/10 dark:text-primary-light dark:border-primary-light dark:hover:bg-primary-light/10 focus:ring-primary-light transform hover:scale-105 focus:scale-105",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-7 py-3 text-lg",
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed hover:scale-100 focus:scale-100" : ""; // Reset scale on disabled
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledClasses} ${className}`;

  const content = (
    <>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  );

  if ('href' in componentProps && componentProps.href !== undefined) {
    const { 
      children: _c, variant: _v, size: _s, className: _cl, leftIcon: _li, rightIcon: _ri, disabled: _d, 
      href, 
      ...anchorSpecificProps 
    } = componentProps as AnchorButtonProps;
    
    return (
      <a
        {...anchorSpecificProps} 
        href={disabled ? undefined : href}
        className={combinedClassName}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
          }
          if (anchorSpecificProps.onClick) {
            anchorSpecificProps.onClick(e);
          }
        }}
        aria-disabled={disabled}
      >
        {content}
      </a>
    );
  }

  if ('to' in componentProps && componentProps.to !== undefined) {
    const { 
      children: _c, variant: _v, size: _s, className: _cl, leftIcon: _li, rightIcon: _ri, disabled: _d, 
      to,
      ...linkSpecificProps 
    } = componentProps as RouterLinkButtonProps;

    return (
      <Link
        {...linkSpecificProps} 
        to={disabled ? '#' : to}
        className={combinedClassName}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault(); 
          }
          if (linkSpecificProps.onClick) {
            linkSpecificProps.onClick(e);
          }
        }}
        aria-disabled={disabled}
      >
        {content}
      </Link>
    );
  }

  const { 
    children: _c, variant: _v, size: _s, className: _cl, leftIcon: _li, rightIcon: _ri, disabled: _d, 
    type, 
    ...buttonSpecificProps 
  } = componentProps as NativeButtonProps;

  return (
    <button
      {...buttonSpecificProps} 
      type={type || 'button'} 
      className={combinedClassName}
      disabled={disabled} 
    >
      {content}
    </button>
  );
};

export default Button;