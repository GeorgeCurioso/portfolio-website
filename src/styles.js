const spacing = {
  paddingX: "px-6 sm:px-16",
  paddingY: "py-6 sm:py-16",
  padding: "px-6 sm:px-16 py-10 sm:py-16",
};

const typography = {
  heroHeadText:
    "mt-2 font-black text-white text-[40px] xs:text-[50px] sm:text-[60px] lg:text-[80px] lg:leading-[98px]",

  heroSubText:
    "text-[#dfd9ff] font-medium text-[16px] xs:text-[20px] sm:text-[26px] lg:text-[30px] lg:leading-[40px]",

  sectionHeadText:
    "text-[#6aa84f] font-black text-[30px] xs:text-[40px] sm:text-[50px] md:text-[60px]",

  sectionSubText:
    "text-secondary uppercase tracking-wider text-[14px] sm:text-[18px]",
};

export const styles = {
  ...spacing,
  ...typography,
};