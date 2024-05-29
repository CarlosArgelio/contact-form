import React from "react";

export interface BasePropInput {
  id: string;
  title: string;
  isOptional?: boolean;
}

export interface TextFieldProps extends BasePropInput {
  type: string;
}

export interface RadioSelectionProps extends BasePropInput {}

export type TitleObligaotryType = Omit<BasePropInput, "id" | "isOptional">;

export const Label: React.FC<BasePropInput> = ({ id, title, isOptional }) => {
  if (!isOptional) {
    return (
      <label className="block text-grey-900" htmlFor={id}>
        <TitleObligatory title={title} />
      </label>
    );
  }

  return (
    <label className="block text-grey-900" htmlFor={id}>
      {title}
    </label>
  );
};

export const TextField: React.FC<TextFieldProps> = ({
  id,
  title,
  type,
  isOptional,
}) => {
  return (
    <>
      <div>
        <Label id={id} title={title} isOptional={isOptional} />
        <input
          className="w-full px-6 py-3 mt-2 mb-6 border border-honeydew focus:outline-none focus:border-tropical-rain-forest hover:border-tropical-rain-forest invalid:text-red-errors invalid:border-red-errors focus:invalid:border-red-errors rounded-lg"
          type={type}
          id={id}
        />
      </div>
    </>
  );
};

export const RadioSelection: React.FC<RadioSelectionProps> = ({
  id,
  title,
  isOptional,
}) => {
  return (
    <>
      <div className="flex gap-3 px-6 py-3 mt-2 mb-6 border border-honeydew focus:outline-none focus:border-tropical-rain-forest hover:border-tropical-rain-forest active:bg-honeydew rounded-lg">
        <input type="radio" id={id} />
        <Label id={id} title={title} isOptional={isOptional} />
      </div>
    </>
  );
};

export const TitleObligatory = ({ title }: TitleObligaotryType) => {
  return (
    <>
      <p className="text-grey-900">
        {title} <span className="font-light text-sm">*</span>
      </p>
    </>
  );
};

Label.defaultProps = {
  isOptional: false,
};
