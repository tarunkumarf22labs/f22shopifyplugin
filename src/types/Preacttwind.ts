import { ComponentChildren } from "preact";

export interface interfaceforcontextvalueINITIAL_DATA {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
  radioval: string;
  checkbox: string[];
}

//  type props 

export type mainmodalprops = {
  handleChange: () => void;
};

export type PluginContextprops = {
  children: ComponentChildren;
};

export type logicComponentsprops = {
  value: interfaceforcontextvalueINITIAL_DATA;
  handleChange: (fields: {}) => void;
};

