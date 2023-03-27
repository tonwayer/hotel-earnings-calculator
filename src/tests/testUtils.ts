import { waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export const typeIntoInput  = async (label: string, value: string) => {
  const input = await screen.getByLabelText(label);
  input.focus();
  userEvent.type(input, value);
  return waitFor(() => {
    expect((input as HTMLInputElement).value).toEqual(value);
  });
};
