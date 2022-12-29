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
  handleQuestionState?: (id: keyof Record) => [];
};

export type handleremovexcesschild = {
  handleremovexcesschild: (
    property: keyof InitialContextData,
    id: string
  ) => void;
};

export type extendedtypes = handleremovexcesschild & logicComponentsprops;

// typescript
