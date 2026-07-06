import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import ExpandableText from "./ExpandableText";

describe("ExpandableText", () => {
  it("hides the text until 'Read more' is clicked, then toggles back", () => {
    render(<ExpandableText text="The full description." />);

    expect(screen.queryByText("The full description.")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Read more" }));
    expect(screen.getByText("The full description.")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Show less" }));
    expect(screen.queryByText("The full description.")).not.toBeInTheDocument();
  });
});
