import { ComponentChildren } from "preact";

export interface InitialContextData {
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

export interface typeapiData {
  record: Record;
  metadata: Metadata;
}

export interface Metadata {
  id: string;
  private: boolean;
  createdAt: Date;
}

export interface Record {
  checkbox: Checkbox[];
  Radio: string[];
}

export interface Checkbox {
  id: string;
  value: string;
}

//

export interface dataWelcome {
  question: string;
  type?: string;
  options: Array<OptionClass>;
}

export interface OptionClass {
  id?: string;
  value?: string;
  imgurl?: string;
  item?: string;
  pricerange?: string[];
}

//  type props

export type mainmodalprops = {
  handleModal: () => void;
  children: ComponentChildren;
};

export type PluginContextprops = {
  children: ComponentChildren;
};

export type logicComponentsprops = {
  value: InitialContextData;
  handleChange: (fields: {}) => void;
  handleQuestionState?: (id: string) => dataWelcome;
  questiontype?: string;
  inputbox?: boolean;
  placheoldertext?: string;
};

export type handleremovexcesschild = {
  handleremovexcesschild: (
    property: keyof InitialContextData,
    id: string
  ) => void;
};

export type extendedtypes = handleremovexcesschild & logicComponentsprops;

// typescript

// api interface

export interface dataWelcome {
  question: string;
  type?: string;
  options: Array<OptionClass>;
}

export interface OptionClass {
  id?: string;
  value?: string;
  imgurl?: string;
  item?: string;
  pricerange?: string[];
}

export interface Apiinterface {
  record: Record[];
  metadata: Metadata;
}

export interface Metadata {
  id: string;
  private: boolean;
  createdAt: Date;
}

export interface Record {
  question: string;
  type?: string;
  options: Array<OptionClass>;
}
