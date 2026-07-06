import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import type { Publication } from "@/content/speaking";
import PublicationsExplorer from "./PublicationsExplorer";

const fixture: Publication[] = [
  {
    type: "talk",
    title: "Talk A",
    venue: "Venue One",
    date: "January 1, 2024",
    url: "#",
    description: "Description of talk A.",
    event: "Event X",
    relevance: 1,
  },
  {
    type: "panel",
    title: "Panel B",
    venue: "Venue Two",
    date: "January 1, 2025",
    url: "#",
    description: "Description of panel B.",
    event: "Event Y",
    relevance: 3,
  },
  {
    type: "press",
    title: "Press C",
    venue: "Venue Three",
    date: "January 1, 2023",
    url: "#",
    description: "Description of press C.",
    event: "Event X",
    relevance: 5,
  },
];

function cardTitles(): string[] {
  return screen.getAllByRole("heading", { level: 3 }).map((el) => el.textContent);
}

describe("PublicationsExplorer", () => {
  it("sorts by relevance by default", () => {
    render(<PublicationsExplorer publications={fixture} />);
    expect(cardTitles()).toEqual(["Talk A", "Panel B", "Press C"]);
  });

  it("sorts by date (newest first) when Sort is changed", () => {
    render(<PublicationsExplorer publications={fixture} />);
    fireEvent.change(screen.getByLabelText("Sort:"), { target: { value: "date" } });
    expect(cardTitles()).toEqual(["Panel B", "Talk A", "Press C"]);
  });

  it("filters by search query and updates the results count", () => {
    render(<PublicationsExplorer publications={fixture} />);
    fireEvent.change(screen.getByPlaceholderText("Search talks, articles, panels..."), {
      target: { value: "press" },
    });
    expect(cardTitles()).toEqual(["Press C"]);
    expect(screen.getByText("Showing 1 of 3")).toBeInTheDocument();
  });

  it("filters by category via the collapsible filter pills", () => {
    render(<PublicationsExplorer publications={fixture} />);
    fireEvent.click(screen.getByRole("button", { name: "More filters" }));
    fireEvent.click(screen.getByRole("button", { name: "Panel" }));
    expect(cardTitles()).toEqual(["Panel B"]);
  });

  it("filters by event via the collapsible filter pills", () => {
    render(<PublicationsExplorer publications={fixture} />);
    fireEvent.click(screen.getByRole("button", { name: "More filters" }));
    fireEvent.click(screen.getByRole("button", { name: "Event X" }));
    expect(cardTitles()).toEqual(["Talk A", "Press C"]);
  });

  it("resets query, sort, and filters when Clear filters is clicked", () => {
    render(<PublicationsExplorer publications={fixture} />);
    fireEvent.change(screen.getByPlaceholderText("Search talks, articles, panels..."), {
      target: { value: "press" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Clear filters" }));
    expect(screen.getByPlaceholderText("Search talks, articles, panels...")).toHaveValue("");
    expect(cardTitles()).toEqual(["Talk A", "Panel B", "Press C"]);
  });

  it("shows an empty state when no results match", () => {
    render(<PublicationsExplorer publications={fixture} />);
    fireEvent.change(screen.getByPlaceholderText("Search talks, articles, panels..."), {
      target: { value: "nonexistent" },
    });
    expect(screen.getByText("No results match your search or filters.")).toBeInTheDocument();
  });
});
