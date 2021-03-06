import React from "react";
import styled from "styled-components";

const BookMarkIcon = styled.svg`
  display: block;
  fill: none;
  width: 13px;
  height: 13px;
`;

const ShaerIcon = styled.svg`
  display: block;
  fill: none;
  width: 13px;
  height: 13px;
`;

const DetailPageSvg = {
  BookMarkIcon: (
    <BookMarkIcon viewBox="0 0 13 17">
      <defs>
        <path
          id="bookmarkIconLine"
          d="M1.481 1.481h9.382v10.727c0 .409.331.74.74.74.41 0 .741-.331.741-.74V.74c0-.41-.331-.741-.74-.741H.74C.33 0 0 .332 0 .74v14.814c0 .568.614.925 1.108.643l5.18-2.873 5.104 2.873c.355.203.807.08 1.01-.276.203-.355.08-.808-.275-1.01l-5.471-3.083c-.228-.13-.507-.13-.735 0l-4.44 2.45V1.48z"
        ></path>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <use fill="#02CEA7" xlinkHref="#bookmarkIconLine"></use>
      </g>
    </BookMarkIcon>
  ),

  ShaerIcon: (
    <ShaerIcon
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      top="20px"
      width="13px"
      height="14px"
      viewBox="0 0 19 19"
    >
      <defs>
        <path
          id="shareIcon"
          d="M5.336 7.75c-.551-.703-1.418-1.136-2.365-1.136C1.337 6.614 0 7.898 0 9.494c0 1.596 1.336 2.879 2.971 2.879.93 0 1.785-.419 2.338-1.102l8.495 4.482c.128.068.276.092.42.068l.025-.004c.213-.036.395-.173.489-.367.101-.21.249-.393.437-.54.673-.526 1.643-.407 2.168.266.526.673.407 1.643-.265 2.167-.673.526-1.643.407-2.168-.266-.226-.29-.644-.34-.933-.115-.29.226-.34.644-.115.933.977 1.251 2.783 1.473 4.034.496 1.25-.976 1.472-2.782.495-4.033-.977-1.251-2.783-1.473-4.033-.496-.169.132-.32.28-.454.442L5.478 9.858c-.322-.241-.816-.145-1 .255-.259.558-.844.93-1.507.93-.913 0-1.642-.7-1.642-1.55 0-.849.73-1.55 1.642-1.55.636 0 1.2.343 1.473.863.107.368.526.64.954.413l9.026-4.762.118-.079.029-.024c.233-.197.303-.527.169-.8-.104-.212-.158-.442-.158-.68 0-.853.692-1.545 1.544-1.545.853 0 1.545.692 1.545 1.544 0 .854-.691 1.545-1.545 1.545-.367 0-.664.297-.664.664 0 .367.297.665.664.665C17.714 5.747 19 4.46 19 2.873 19 1.287 17.713 0 16.126 0c-1.586 0-2.873 1.287-2.873 2.873 0 .224.026.445.076.66L5.336 7.748z"
        ></path>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <use fill="#36F" xlinkHref="#shareIcon"></use>
      </g>
    </ShaerIcon>
  ),
};
export default DetailPageSvg;
