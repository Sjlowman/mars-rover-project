import { allocatePlateauSize } from "../plateau/plateau";
describe("test setting the plateau size", () => {
  it("Should  return msg to say it's been set if it receives two positive integers", () => {
    expect(allocatePlateauSize(10, 7)).toBe("Plateau max boundary set");
  });
});
