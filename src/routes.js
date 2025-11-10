import { PATHS } from "@/configs/paths.js";
import { LAYOUTS } from "@/configs/layouts.js";

import NotFound from "@pages/NotFound";
import Counter from "./pages/Counter";
import Countdown from "./pages/CountDown";
import ShoppingCart from "./pages/ShoppingCart";

export const ROUTES = [
  {
    layout: LAYOUTS.DEFAULT,
    children: [
      {
        path: PATHS.COUNTER,
        title: "Counter",
        element: Counter,
        isShowInNav: true,
      },
      {
        path: PATHS.COUNT_DOWN,
        title: "Count down",
        element: Countdown,
        isShowInNav: true,
      },
      {
        path: PATHS.SHOPPING_CART,
        title: "Shopping Cart",
        element: ShoppingCart,
        isShowInNav: true,
      },
    ],
  },
  {
    layout: LAYOUTS.NO_LAYOUT,
    children: [
      {
        path: PATHS.NOT_FOUND,
        title: "Not Found",
        element: NotFound,
        isShowInNav: false,
      },
    ],
  },
];
