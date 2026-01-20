import Default from './demos/default.vue?raw';
import Success from './demos/success.vue?raw';
import Error from './demos/error.vue?raw';
import Info from './demos/info.vue?raw';
import Slots from './demos/slots.vue?raw';

export const demos = [
  {
    id: 1,
    title: "TvModal Default",
    description: "A simple confirmation modal with warning icon.",
    propsData: {
      buttonText: "Open modal",
      configModal: {
        title: "Are you sure you want to delete it?",
        description:
          "If you delete it there is no step back, it will be permanently deleted",
        confirmButtonText: "Yes, delete it",
        cancelButtonText: "No, keep it",
        icon: "warning",
      }
    },
    html: Default,
  },
  {
    id: 2,
    title: "TvModal Success",
    description: "Modal shows a success message with success icon.",
    propsData: {
      buttonText: "Show Success",
      configModal: {
        title: "Success!",
        description: "Your operation was completed successfully",
        confirmButtonText: "Great!",
        icon: "success",
      }
    },
    html: Success,
  },
  {
    id: 3,
    title: "TvModal Error",
    description: "A simple confirmation modal with error icon.",
    propsData: {
      buttonText: "Show Error",
      configModal: {
        title: "Error occurred",
        description: "Something went wrong. Please try again later.",
        confirmButtonText: "OK",
        icon: "error",
      }
    },
    html: Error,
  },
  {
    id: 4,
    title: "TvModal Info",
    description: "Modal shows an informational message with info icon.",
    propsData: {
      buttonText: "Show Info",
      configModal: {
        title: "Information",
        description: "Here is some important information you should know about.",
        confirmButtonText: "Got it",
        icon: "info",
      }
    },
    html: Info,
  },
  {
    id: 5,
    title: "TvModal Slots",
    description: "Modal using slots for custom header, body, and footer content.",
    propsData: {
      buttonText: "Open Slots Modal",
      configModal: {
        title: "Slots Demo",
        confirmButtonText: "Close",
      }
    },
    html: Slots,
  },
];
