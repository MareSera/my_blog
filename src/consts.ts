// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TITLE = "MareSera";
export const SITE_DESCRIPTION = "maresera's blog";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "MareSera";
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://www.MareSera.com";
export const TRANSITION_API = true;

// Some informative text on the site
export const infoTest = {
  tag: "Tag: ",
  noTag: "Uncategorized",
  tagPage: "Blog - ",
  link: "Link: ",
  prevPage: "Recent posts",
  nextPage: "Older posts",
};

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "Home", href: "/", svg: "home" }, // Home page
  { id: "about", text: "About", href: "/about", svg: "about" }, // About page
  { id: "blog", text: "Blogs", href: "/blog", svg: "blog" }, // Blog page
  { id: "project", text: "Projects", href: "/project", svg: "project" }, // Projects page
  { id: "friend", text: "Friends", href: "/friend", svg: "friend" }, // Friends page
  {
    id: "contact",
    text: "Contact",
    href: "mailto:lyt15624134413@163.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "contact",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://afdian.com/",
    ariaLabel: "Support my work",
    title: "Support my work",
    svg: "support",
  },
  {
    href: "https://github.com/MareSera",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "https://space.bilibili.com/1158812072",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "bilibili",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "rss",
  },
];
