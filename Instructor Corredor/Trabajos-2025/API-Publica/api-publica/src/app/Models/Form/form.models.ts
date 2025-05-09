// models/field-config.model.ts
export interface FieldConfig {
    name: string;
    label: string;
    type: string; // text, number, select, checkbox, etc.
    value?: any;
    options?: { key: string; value: string }[]; // para selects o radios
    validations?: any[];
}
