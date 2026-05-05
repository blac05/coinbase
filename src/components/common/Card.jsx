import clsx from "clsx";

const Card = ({
  children,
  className = "",
  shadow = true,
  rounded = true,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "bg-white",
        shadow && "shadow-md hover:shadow-lg transition-shadow",
        rounded && "rounded-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
