import React from "react";
import { render } from "@testing-library/react";
import HomepageFeatures from "./index";

const homepageFeatures = render(<HomepageFeatures></HomepageFeatures>);

// Problem: test fails just from using the React component
// test("adds 1 + 2 to equal 3", () => {
//   expect(1 + 2).toBe(3);
// });
