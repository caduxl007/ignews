import { render, screen } from "@testing-library/react";
import { useSession } from "next-auth/client";
import { mocked } from "ts-jest/utils";
import Home, { getStaticProps } from "../../pages";
import { stripe } from "../../services/stripe";

jest.mock("next/router");
jest.mock("next-auth/client", () => {
  return {
    useSession: () => [null, false],
  };
});

//video 2 - testando paginas

// describe("Home page", () => {
//   it("renders correctly", () => {
//     render(<Home product={{ priceId: "fake-price", amount: "R$10,00" }} />);

//     expect(screen.getByText("for R$10,00 month")).toBeInTheDocument();
//   });

//   it("loads inital data", async () => {
//     const retrieveStripePricesMocked = mocked(stripe.prices.retrieve);

//     retrieveStripePricesMocked.mockResolvedValueOnce({
//       id: "fake-price",
//       unit_amount: 10000,
//     } as any);  

//     const response = await getStaticProps({});

//     console.log(response);

//     expect(response).toEqual(
//       expect.objectContaining({
//         props: {
//           product: {
//             priceId: "fake-price",
//             amount: "$10.00",
//           },
//         },
//       })
//     );
//   });
// });
