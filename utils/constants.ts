const AppText = {
  downloadTheApp: "Join the waitlist",
  getCoveredInMinutes: "Get early access",
  joinMelon: "Join Melon",
};

const AppLinks = {
  downloadTheApp: "https://melon.fillout.com/waitlist",
  getCoveredInMinutes: "https://melon.fillout.com/waitlist",
};

const handleSmoothScroll = (
  e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>,
  targetId: string
) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    const navHeight = 64; // Height of the fixed navigation (h-16 = 64px)
    const elementPosition = element.offsetTop - navHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};

export { AppText, AppLinks, handleSmoothScroll };
