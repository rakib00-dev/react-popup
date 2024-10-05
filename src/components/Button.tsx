interface ButtonProps {
  color?: string;
  btnTxt: string;
  onClick: () => void;
}

function Button({ color = 'primary', btnTxt, onClick }: ButtonProps) {
  return (
    <button type="button" className={'btn btn-' + color} onClick={onClick}>
      {btnTxt}
    </button>
  );
}

export default Button;
