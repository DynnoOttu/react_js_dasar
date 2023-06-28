const Button = (props) => {
    // eslint-disable-next-line react/prop-types
    const {children = "data not found", classname ="bg-yellow-500", onClick = () => {}, type="button"} = props;
    return(
      <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} type={type} onClick={() =>  onClick() }>
      {children}
    </button>
    )
  }

export default Button