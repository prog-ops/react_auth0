import {render} from "@testing-library/react";
import Home from "./Home";

test('should render welkam message', () => {
  const { queryByText } = render(<Home/>)
  expect(queryByText(/Welcome to Code Editor App/)).toBeInTheDocument() // passed
})
