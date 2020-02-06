import React from "react";
import { grab } from "../utils";

export const Component = props => {
  const { m, my, mx, mt, mr, mb, ml, p, py, px, pt, pr, pb, pl, ...props2 } = props;

  const {
    component: Component = props.as || "div",
    as,
    children,
    padding,
    margin,
    style,
    ...attr
  } = props2;

  const spacing = {
    marginTop: grab(mt, my, m, margin),
    marginRight: grab(mr, mx, m, margin),
    marginBottom: grab(mb, my, m, margin),
    marginLeft: grab(ml, mx, m, margin),
    paddingTop: grab(pt, py, p, padding),
    paddingRight: grab(pr, px, p, padding),
    paddingBottom: grab(pb, py, p, padding),
    paddingLeft: grab(pl, px, p, padding)
  };

  return (
    <Component {...attr} style={{ ...spacing, ...style }}>
      {children}
    </Component>
  );
};

export default Component;
