import Async from "./Async";
import {render, screen} from "@testing-library/react";

describe("Async component tests", () => {
  test("renders posts if request success", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{id: 'p1', title: 'First post'}],
    });
    render(<Async/>);
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
})