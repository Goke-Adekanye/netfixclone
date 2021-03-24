import React from "react";
import {
  Text,
  Input,
  Container,
  TextSmall,
  Base,
  Title,
  Error,
  Link,
  Submit,
} from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}> {children}</Error>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}> {children} </Text>;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children} </Title>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}> {children} </TextSmall>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}> {children} </Base>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};
