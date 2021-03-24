import React, { useState, useContext, createContext } from "react";
import {
  Title,
  Header,
  Frame,
  Inner,
  Item,
  Body,
  Container,
} from "./styles/accordion";

//createContext, useCoontext: Context provides a way to pass data{props} through the component tree
// without having to pass props down manually at every level.
const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function accordionTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children} </Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}> {children} </Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  //useState: sstting te initialState of toggle to false
  const [toggleShow, setToggleShow] = useState(false);
  return (
    //ToggleContext.Provider: using context to pass down the toggle state to enclosing tags(Item, Header)
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}> {children} </Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  //useContext: useContext: making the passed down state accessible in Header
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  //useContext: useContext: making the passed down state accessible in Body
  const { toggleShow } = useContext(ToggleContext);
  /* return toggleShow ? <Body {...restProps}>{children}</Body> : null; */
  return (
    <Body className={toggleShow ? "open" : "closed"} {...restProps}>
      <span>{children}</span>
    </Body>
  );
};
