import React from "react";
import { create } from "react-test-renderer";
import Counter from "../components/Counter"

describe("Counter component", () => {
    test("Matches the snapshot", () => {
        const counter = create(<Counter total={402} />);
        expect(counter.toJSON()).toMatchSnapshot();
    });
});