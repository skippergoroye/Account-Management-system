
const Button = ({btnClass, btnText, onClick}) => {
    return (
    <button className={`bg-violet-600 px-5 py-2 rounded-md text-white text-sm ${btnClass}`} onClick={onClick}>{btnText}</button>
  )
}

export default Button