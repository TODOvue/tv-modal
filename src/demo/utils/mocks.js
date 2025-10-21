import Default from './demos/default.vue?raw';
import Success from './demos/success.vue?raw';
import Error from './demos/error.vue?raw';
import Info from './demos/info.vue?raw';

export const demos = [
  {
    id: 1,
    title: "TvModal Default",
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
    propsData: {
      buttonText: "Show Error",
      configModal: {
        title: "Error occurred",
        description: "Something went wrong. Please try again later.",
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        icon: "error",
      }
    },
    html: Error,
  },
  {
    id: 4,
    title: "TvModal Info",
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
];
