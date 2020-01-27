import React from "react";
import { create } from "react-test-renderer";
import SocialMedia from "../components/SocialMedia"

describe("Counter component", () => {
    test("Matches the snapshot", () => {
        const socialMedia = create(<SocialMedia />);
        expect(socialMedia.toJSON()).toMatchSnapshot();
    });
});