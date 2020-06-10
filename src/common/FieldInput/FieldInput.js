import React, { forwardRef } from "react";
import Icon from "../../common/Icon";
import Theme from "../../common/Theme";
import {
  FieldGroup,
  TextArea,
  FieldIcon,
  Input,
  FieldContainer,
  FieldLabel
} from "./styledComponents";

const FieldInput = (props, ref) => {
  const {
    placeholder,
    onChange,
    multiple = false,
    label = "",
    hasBorder = true,
    error = "",
    value = "",
    name = ""
  } = props;
  return (
    <FieldGroup>
      {label && (
        <FieldLabel error={error}>
          {error && error.length > 0 ? error : label}
        </FieldLabel>
      )}
      <FieldContainer>
        {multiple ? (
          <TextArea
            name={name}
            ref={ref}
            placeholder={placeholder}
            onChange={onChange}
            error={error}
            value={value}
            {...props}
          />
        ) : (
          <Input
            name={name}
            ref={ref}
            hasBorder={hasBorder}
            placeholder={placeholder}
            onChange={onChange}
            error={error}
            value={value}
            {...props}
          />
        )}
        {error && (
          <FieldIcon>
            <Icon
              name="ALERT"
              fill={Theme.colors.primary.redPinkDark}
              size={20}
            />
          </FieldIcon>
        )}
      </FieldContainer>
    </FieldGroup>
  );
};

const FieldInputForward = forwardRef(FieldInput);

export default FieldInputForward;
