import Div from "../Div/Div";

const ListWrapper = ({ component, children, sx }) => {
  const WrapperComponent = component ? component : Div;
  return (
    <WrapperComponent sx={{ position: "relative", ...sx }}>
      {children}
    </WrapperComponent>
  );
};

export default ListWrapper;
