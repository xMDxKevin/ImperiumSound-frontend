interface Props {
  Titulos: string;
}

function Navbar(props: Props) {
  const { Titulos } = props;

  return (
    <>
      <a href="#">{Titulos}</a>
    </>
  );
}
export default Navbar;
