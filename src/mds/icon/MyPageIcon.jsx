import styled from "styled-components";
import { COLOR } from "../../constants";

const MyPageIcon = () => {
  let isCurrentLocation = false;

  return (
    <Container>
      <svg
        width="52"
        height="42"
        viewBox="0 0 52 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30.4995 6.53581C30.4996 7.13153 30.3833 7.72142 30.1572 8.27181C29.9311 8.8222 29.5998 9.3223 29.182 9.74358C28.7642 10.1649 28.2682 10.499 27.7223 10.7271C27.1764 10.9551 26.5913 11.0725 26.0005 11.0726C24.8071 11.0727 23.6626 10.5949 22.8187 9.74423C21.9748 8.8936 21.5006 7.73983 21.5005 6.53674C21.5004 5.94103 21.6167 5.35114 21.8428 4.80075C22.0689 4.25036 22.4002 3.75025 22.818 3.32897C23.6618 2.47817 24.8062 2.00012 25.9995 2C27.1929 1.99988 28.3374 2.47769 29.1813 3.32832C30.0252 4.17895 30.4994 5.33272 30.4995 6.53581ZM26 12.4603C19.5205 12.4603 17 16.6176 17 18.5516C17 20.4847 22.3654 21 26 21C29.6346 21 35 20.4847 35 18.5516C35 16.6176 32.4795 12.4603 26 12.4603Z"
          fill={isCurrentLocation ? COLOR.GRAY800 : COLOR.GRAY200}
        />
        <path
          d="M6.00758 29.5391H1.09742V36.3594H6.00758V29.5391ZM2.18727 35.457V30.418H4.90602V35.457H2.18727ZM7.76539 38.9961H8.87867V33.5469H10.5662V32.6094H8.87867V28.4961H7.76539V38.9961ZM19.6454 28.4961H18.5321V39.0195H19.6454V28.4961ZM11.3134 32.9609C11.3134 35.2285 12.4442 36.6582 14.0321 36.6523C15.5907 36.6582 16.7391 35.2285 16.7391 32.9609C16.7391 30.7168 15.5907 29.2871 14.0321 29.2812C12.4442 29.2871 11.3134 30.7168 11.3134 32.9609ZM12.3915 32.9609C12.3856 31.3145 13.0536 30.2832 14.0321 30.2773C14.993 30.2832 15.661 31.3145 15.661 32.9609C15.661 34.6309 14.993 35.6562 14.0321 35.6562C13.0536 35.6562 12.3856 34.6309 12.3915 32.9609ZM30.2832 28.4961H29.2168V38.9961H30.2832V28.4961ZM21.084 35.5273L21.2129 36.4648C22.5723 36.4648 24.752 36.418 26.416 36.0898L26.334 35.2812C26.0176 35.3223 25.6719 35.3633 25.3145 35.3926V30.6992H26.123V29.7852H21.3066V30.6992H22.1152V35.5215C21.7402 35.5273 21.3887 35.5273 21.084 35.5273ZM23.123 35.5039V30.6992H24.2832V35.4629C23.8965 35.4805 23.5039 35.498 23.123 35.5039ZM25.8418 33.4297H27.1543V38.457H28.209V28.7305H27.1543V32.4336H25.8418V33.4297ZM40.1476 28.4961H39.0343V39.0195H40.1476V28.4961ZM31.8155 32.9609C31.8155 35.2285 32.9464 36.6582 34.5343 36.6523C36.0929 36.6582 37.2413 35.2285 37.2413 32.9609C37.2413 30.7168 36.0929 29.2871 34.5343 29.2812C32.9464 29.2871 31.8155 30.7168 31.8155 32.9609ZM32.8937 32.9609C32.8878 31.3145 33.5558 30.2832 34.5343 30.2773C35.4952 30.2832 36.1632 31.3145 36.1632 32.9609C36.1632 34.6309 35.4952 35.6562 34.5343 35.6562C33.5558 35.6562 32.8878 34.6309 32.8937 32.9609ZM45.5705 31.5898V30.4766H47.9612V29.5508H42.0432V30.4766H44.4455V31.5898C44.4338 33.4004 43.262 35.3691 41.6799 36.1133L42.3245 36.9922C43.5491 36.3945 44.5334 35.1172 45.0198 33.6172C45.5061 35.0176 46.4905 36.1777 47.7268 36.7227L48.3362 35.8555C46.719 35.1641 45.5647 33.3477 45.5705 31.5898ZM49.2854 38.9961H50.3987V28.4961H49.2854V38.9961Z"
          fill={isCurrentLocation ? COLOR.GRAY800 : COLOR.GRAY200}
        />
      </svg>
    </Container>
  );
};

export default MyPageIcon;

const Container = styled.div``;
