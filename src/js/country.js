export const createList = ({ flags, name }) => {
  return `
        <li class="country-list__item">
        <span class="county-list__svg-box"><img class="country-list__svg" src='${flags.svg}' alt='Flag of ${name.common}' width='40px'></span><span class="country-list__name"> ${name.official}</span>
        </li>
`;
};
