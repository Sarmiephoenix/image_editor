import { useContext } from "react";
import ImageCarousel from "../modules/ImageCarousel";
import SideNav from "../modules/SideNav";
import SideToolBar from "../modules/SideToolBar";
import Preview from "./Preview";
import { SideNavContext, ToolBarContext } from "../App";



const MainContent = () => {
  const isSideNavToggled = useContext(SideNavContext)
  const isToolBarToggled = useContext(ToolBarContext)
  return (

    <div className="main-container">
      <ul className={`side-nav-${isSideNavToggled}`}>
        <li>
          <svg
            width="26"
            height="20"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.76747 0.840332V17.9849H0.178467V24.2089H9.29432V17.9849H6.70531V0.840332H2.76747ZM13.1034 0.840332V11.9072H10.5121V18.1311H19.6287V11.9072H17.0389V0.840332H13.1034ZM23.4354 0.840332V5.77968H20.8464V12.0036H29.9623V5.77968H27.3732V0.840332H23.4354ZM22.1673 7.01452H28.6414V8.25013H22.1673V7.01452ZM23.4354 13.0433V30.2376H27.3732V13.0433H23.4354ZM11.8337 13.142H18.307V14.3776H11.8337V13.142ZM13.1034 19.1202V30.2376H17.0389V19.1202H13.1034ZM1.49935 19.219H7.97345V20.4546H1.49935V19.219ZM2.76827 25.2477V30.2376H6.70608V25.2477H2.76827Z"
              fill="black"
            />
          </svg>
        </li>

        <li>
          <svg
            width="26"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.00923 29.5526C4.88809 29.5526 3.77942 29.2637 2.6832 28.6858C1.58698 28.1079 0.702527 27.3461 0.0298462 26.4004C0.677613 26.4004 1.33784 26.1309 2.01052 25.5919C2.6832 25.0529 3.01954 24.2717 3.01954 23.2483C3.01954 21.9349 3.45553 20.8185 4.32753 19.8991C5.19952 18.9797 6.25837 18.52 7.50407 18.52C8.74978 18.52 9.80863 18.9797 10.6806 19.8991C11.5526 20.8185 11.9886 21.9349 11.9886 23.2483C11.9886 24.982 11.4031 26.4661 10.2322 27.7007C9.0612 28.9353 7.65356 29.5526 6.00923 29.5526ZM14.6046 20.0961L10.4938 15.7619L24.919 0.552612L29.0298 4.88685L14.6046 20.0961Z"
              fill="white"
            />
          </svg>
        </li>
        <li>
          <svg
            width="26"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5298 23.8595L23.4908 29.5526L21.1128 18.8226L29.0298 11.6031L18.6043 10.6721L14.5298 0.552612L10.4553 10.6721L0.0298462 11.6031L7.94685 18.8226L5.56885 29.5526L14.5298 23.8595Z"
              fill="white"
            />
          </svg>
        </li>
        <li>
          <svg
            width="26"
            height="20"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5887 7.51732L31.9204 7.71257L32.0298 1.92336L1.02985 1.55261V7.71257L14.123 7.51732C14.4782 7.51732 15.1617 7.90099 15.1617 8.32036L15.013 24.2065C15.013 24.6266 13.1435 24.4595 12.7876 24.4595L1.02985 24.2376V30.5526L31.9204 30.3566V24.4595H18.9657C18.6098 24.4595 17.9103 24.1191 17.9103 23.6998L18.1806 7.95037C18.1806 7.53024 20.2335 7.51732 20.5887 7.51732Z"
              fill="white"
            />
            <path
              d="M1.02985 1.6825H31.9204V30.5526H1.02985V1.6825Z"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.02985 7.71265H15.1617V24.4596H1.02985M31.9204 24.4596H17.9103V7.71265H31.9204"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.95227 5.4713C5.33577 5.4713 5.64666 5.10429 5.64666 4.65155C5.64666 4.19881 5.33577 3.83179 4.95227 3.83179C4.56876 3.83179 4.25787 4.19881 4.25787 4.65155C4.25787 5.10429 4.56876 5.4713 4.95227 5.4713Z"
              fill="#2B3595"
            />
            <path
              d="M8.81366 5.4713C9.19716 5.4713 9.50805 5.10429 9.50805 4.65155C9.50805 4.19881 9.19716 3.83179 8.81366 3.83179C8.43015 3.83179 8.11926 4.19881 8.11926 4.65155C8.11926 5.10429 8.43015 5.4713 8.81366 5.4713Z"
              fill="#2B3595"
            />
            <path
              d="M12.6749 5.4713C13.0584 5.4713 13.3693 5.10429 13.3693 4.65155C13.3693 4.19881 13.0584 3.83179 12.6749 3.83179C12.2914 3.83179 11.9805 4.19881 11.9805 4.65155C11.9805 5.10429 12.2914 5.4713 12.6749 5.4713Z"
              fill="#2B3595"
            />
            <path
              d="M16.5363 5.4713C16.9198 5.4713 17.2307 5.10429 17.2307 4.65155C17.2307 4.19881 16.9198 3.83179 16.5363 3.83179C16.1528 3.83179 15.8419 4.19881 15.8419 4.65155C15.8419 5.10429 16.1528 5.4713 16.5363 5.4713Z"
              fill="#2B3595"
            />
            <path
              d="M20.3976 5.4713C20.7811 5.4713 21.092 5.10429 21.092 4.65155C21.092 4.19881 20.7811 3.83179 20.3976 3.83179C20.0141 3.83179 19.7032 4.19881 19.7032 4.65155C19.7032 5.10429 20.0141 5.4713 20.3976 5.4713Z"
              fill="#2B3595"
            />
            <path
              d="M24.2589 5.4713C24.6424 5.4713 24.9533 5.10429 24.9533 4.65155C24.9533 4.19881 24.6424 3.83179 24.2589 3.83179C23.8754 3.83179 23.5645 4.19881 23.5645 4.65155C23.5645 5.10429 23.8754 5.4713 24.2589 5.4713Z"
              fill="#2B3595"
            />
            <path
              d="M28.1203 5.4713C28.5038 5.4713 28.8147 5.10429 28.8147 4.65155C28.8147 4.19881 28.5038 3.83179 28.1203 3.83179C27.7368 3.83179 27.4259 4.19881 27.4259 4.65155C27.4259 5.10429 27.7368 5.4713 28.1203 5.4713Z"
              fill="#2B3595"
            />
            <path
              d="M4.9414 28.3531C5.32491 28.3531 5.6358 27.9861 5.6358 27.5334C5.6358 27.0806 5.32491 26.7136 4.9414 26.7136C4.5579 26.7136 4.24701 27.0806 4.24701 27.5334C4.24701 27.9861 4.5579 28.3531 4.9414 28.3531Z"
              fill="#2B3595"
            />
            <path
              d="M8.80267 28.3531C9.18617 28.3531 9.49707 27.9861 9.49707 27.5334C9.49707 27.0806 9.18617 26.7136 8.80267 26.7136C8.41917 26.7136 8.10828 27.0806 8.10828 27.5334C8.10828 27.9861 8.41917 28.3531 8.80267 28.3531Z"
              fill="#2B3595"
            />
            <path
              d="M12.6641 28.3531C13.0476 28.3531 13.3585 27.9861 13.3585 27.5334C13.3585 27.0806 13.0476 26.7136 12.6641 26.7136C12.2806 26.7136 11.9697 27.0806 11.9697 27.5334C11.9697 27.9861 12.2806 28.3531 12.6641 28.3531Z"
              fill="#2B3595"
            />
            <path
              d="M16.5253 28.3531C16.9088 28.3531 17.2197 27.9861 17.2197 27.5334C17.2197 27.0806 16.9088 26.7136 16.5253 26.7136C16.1418 26.7136 15.8309 27.0806 15.8309 27.5334C15.8309 27.9861 16.1418 28.3531 16.5253 28.3531Z"
              fill="#2B3595"
            />
            <path
              d="M20.3867 28.3531C20.7702 28.3531 21.0811 27.9861 21.0811 27.5334C21.0811 27.0806 20.7702 26.7136 20.3867 26.7136C20.0032 26.7136 19.6923 27.0806 19.6923 27.5334C19.6923 27.9861 20.0032 28.3531 20.3867 28.3531Z"
              fill="#2B3595"
            />
            <path
              d="M24.248 28.3531C24.6315 28.3531 24.9424 27.9861 24.9424 27.5334C24.9424 27.0806 24.6315 26.7136 24.248 26.7136C23.8645 26.7136 23.5536 27.0806 23.5536 27.5334C23.5536 27.9861 23.8645 28.3531 24.248 28.3531Z"
              fill="#2B3595"
            />
            <path
              d="M28.1093 28.3531C28.4928 28.3531 28.8037 27.9861 28.8037 27.5334C28.8037 27.0806 28.4928 26.7136 28.1093 26.7136C27.7258 26.7136 27.4149 27.0806 27.4149 27.5334C27.4149 27.9861 27.7258 28.3531 28.1093 28.3531Z"
              fill="#2B3595"
            />
          </svg>
        </li>
        <li>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5298 0.552612C6.51135 0.552612 0.0298462 7.07761 0.0298462 15.0526C0.0298462 18.8983 1.55752 22.5864 4.2768 25.3057C5.62325 26.6521 7.22171 27.7202 8.98094 28.4489C10.7402 29.1776 12.6257 29.5526 14.5298 29.5526C18.3755 29.5526 22.0636 28.0249 24.7829 25.3057C27.5022 22.5864 29.0298 18.8983 29.0298 15.0526C29.0298 13.1484 28.6548 11.2629 27.9261 9.5037C27.1974 7.74448 26.1293 6.14601 24.7829 4.79956C23.4364 3.45311 21.838 2.38505 20.0788 1.65636C18.3195 0.927666 16.434 0.552612 14.5298 0.552612ZM19.6048 9.25261C20.1817 9.25261 20.7349 9.48176 21.1428 9.88966C21.5507 10.2975 21.7798 10.8508 21.7798 11.4276C21.7798 12.0045 21.5507 12.5577 21.1428 12.9656C20.7349 13.3735 20.1817 13.6026 19.6048 13.6026C19.028 13.6026 18.4748 13.3735 18.0669 12.9656C17.659 12.5577 17.4298 12.0045 17.4298 11.4276C17.4298 10.8508 17.659 10.2975 18.0669 9.88966C18.4748 9.48176 19.028 9.25261 19.6048 9.25261ZM9.45485 9.25261C10.0317 9.25261 10.5849 9.48176 10.9928 9.88966C11.4007 10.2975 11.6298 10.8508 11.6298 11.4276C11.6298 12.0045 11.4007 12.5577 10.9928 12.9656C10.5849 13.3735 10.0317 13.6026 9.45485 13.6026C8.878 13.6026 8.32478 13.3735 7.91689 12.9656C7.509 12.5577 7.27985 12.0045 7.27985 11.4276C7.27985 10.8508 7.509 10.2975 7.91689 9.88966C8.32478 9.48176 8.878 9.25261 9.45485 9.25261ZM14.5298 23.0276C11.1513 23.0276 8.28035 20.9106 7.12035 17.9526H21.9393C20.7648 20.9106 17.9083 23.0276 14.5298 23.0276Z"
              fill="white"
            />
          </svg>
        </li>
        <li>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.7991 0.552612H6.72215C6.13052 0.552612 5.56311 0.830371 5.14476 1.32479C4.72641 1.8192 4.49138 2.48977 4.49138 3.18898V5.82534H2.26062C1.66898 5.82534 1.10157 6.1031 0.683223 6.59751C0.264873 7.09193 0.0298462 7.7625 0.0298462 8.4617V26.9163C0.0298462 27.6155 0.264873 28.286 0.683223 28.7804C1.10157 29.2749 1.66898 29.5526 2.26062 29.5526H22.3375C22.9292 29.5526 23.4966 29.2749 23.9149 28.7804C24.3333 28.286 24.5683 27.6155 24.5683 26.9163V24.2799H26.7991C27.3907 24.2799 27.9581 24.0021 28.3765 23.5077C28.7948 23.0133 29.0298 22.3427 29.0298 21.6435V3.18898C29.0298 2.48977 28.7948 1.8192 28.3765 1.32479C27.9581 0.830371 27.3907 0.552612 26.7991 0.552612ZM6.72215 3.18898H26.7991V13.5285L25.3951 11.8709C25.1879 11.626 24.942 11.4317 24.6713 11.2992C24.4006 11.1667 24.1105 11.0985 23.8175 11.0985C23.5245 11.0985 23.2344 11.1667 22.9637 11.2992C22.693 11.4317 22.4471 11.626 22.2399 11.8709L19.4515 15.1663L13.3169 7.91631C12.8986 7.42227 12.3314 7.14474 11.74 7.14474C11.1486 7.14474 10.5814 7.42227 10.1631 7.91631L6.72215 11.9829V3.18898ZM22.3375 26.9163H2.26062V8.4617H4.49138V21.6435C4.49138 22.3427 4.72641 23.0133 5.14476 23.5077C5.56311 24.0021 6.13052 24.2799 6.72215 24.2799H22.3375V26.9163ZM26.7991 21.6435H6.72215V15.7117L11.7414 9.77989L18.6651 17.9625C18.8743 18.2095 19.1579 18.3483 19.4536 18.3483C19.7493 18.3483 20.0329 18.2095 20.242 17.9625L23.8196 13.7344L26.7991 17.2573V21.6435ZM18.9914 7.80261C18.9914 7.41154 19.0895 7.02926 19.2733 6.7041C19.4572 6.37894 19.7185 6.12551 20.0242 5.97585C20.3299 5.8262 20.6663 5.78704 20.9909 5.86333C21.3154 5.93963 21.6135 6.12794 21.8475 6.40447C22.0815 6.681 22.2408 7.03331 22.3054 7.41687C22.3699 7.80042 22.3368 8.19798 22.2102 8.55928C22.0835 8.92058 21.8691 9.22939 21.594 9.44666C21.3188 9.66392 20.9954 9.77989 20.6645 9.77989C20.2207 9.77989 19.7952 9.57157 19.4814 9.20076C19.1677 8.82995 18.9914 8.32702 18.9914 7.80261Z"
              fill="white"
            />
          </svg>
        </li>
        <li>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.0298462 13.4415H12.9187V0.552612H0.0298462V13.4415ZM3.25207 3.77483H9.69651V10.2193H3.25207V3.77483ZM0.0298462 29.5526H12.9187V16.6637H0.0298462V29.5526ZM3.25207 19.8859H9.69651V26.3304H3.25207V19.8859ZM16.141 0.552612V13.4415H29.0298V0.552612H16.141ZM25.8076 10.2193H19.3632V3.77483H25.8076V10.2193ZM25.8076 26.3304H29.0298V29.5526H25.8076V26.3304ZM16.141 16.6637H19.3632V19.8859H16.141V16.6637ZM19.3632 19.8859H22.5854V23.1082H19.3632V19.8859ZM16.141 23.1082H19.3632V26.3304H16.141V23.1082ZM19.3632 26.3304H22.5854V29.5526H19.3632V26.3304ZM22.5854 23.1082H25.8076V26.3304H22.5854V23.1082ZM22.5854 16.6637H25.8076V19.8859H22.5854V16.6637ZM25.8076 19.8859H29.0298V23.1082H25.8076V19.8859Z"
              fill="white"
            />
          </svg>
        </li>
        <li>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.8943 1.43054C17.5714 0.886792 16.9767 0.552612 16.3423 0.552612C15.708 0.552612 15.1132 0.886792 14.7904 1.43054L9.35289 10.493C9.01871 11.0538 9.00739 11.7505 9.33024 12.3169C9.65309 12.8833 10.2535 13.2344 10.9048 13.2344H21.7798C22.4312 13.2344 23.0373 12.8833 23.3545 12.3169C23.6716 11.7505 23.666 11.0538 23.3318 10.493L17.8943 1.43054ZM16.3423 18.2245V26.3807C16.3423 27.6325 17.3562 28.6464 18.608 28.6464H26.7642C28.016 28.6464 29.0298 27.6325 29.0298 26.3807V18.2245C29.0298 16.9727 28.016 15.9589 26.7642 15.9589H18.608C17.3562 15.9589 16.3423 16.9727 16.3423 18.2245ZM7.27985 29.5526C9.20267 29.5526 11.0467 28.7888 12.4064 27.4291C13.766 26.0695 14.5298 24.2254 14.5298 22.3026C14.5298 20.3798 13.766 18.5357 12.4064 17.1761C11.0467 15.8164 9.20267 15.0526 7.27985 15.0526C5.35703 15.0526 3.51296 15.8164 2.15332 17.1761C0.793683 18.5357 0.0298462 20.3798 0.0298462 22.3026C0.0298462 24.2254 0.793683 26.0695 2.15332 27.4291C3.51296 28.7888 5.35703 29.5526 7.27985 29.5526Z"
              fill="white"
            />
          </svg>
        </li>
        <li>
          <svg
            width="36"
            height="30"
            viewBox="0 0 36 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.9476 9.62441C25.073 9.62441 22.5044 11.4135 21.4042 14.1826L20.9462 15.3144L23.758 16.5918L24.2154 15.4601C24.8359 13.8986 26.3008 12.891 27.9476 12.891C30.3564 12.891 31.9747 14.6213 31.9747 17.1971V17.3682C30.4324 17.412 28.5827 17.5206 26.9359 17.7281C23.1347 18.2062 20.866 20.4221 20.866 23.6559C20.866 25.3781 21.474 26.9277 22.5784 28.0126C23.6151 29.0321 25.0284 29.5526 26.5594 29.5526C28.711 29.5526 30.5684 29.0076 31.9747 27.8691V29.5526H35.0298V17.1971C35.0298 12.8092 32.0514 9.62441 27.9476 9.62441ZM26.5594 26.3604C25.3421 26.3604 23.9205 25.6287 23.9205 23.6559C23.9205 22.864 24.1868 22.3093 24.7836 21.8572C25.3651 21.417 26.2561 21.1025 27.2936 20.9723C28.8121 20.7812 30.5224 20.6786 31.9649 20.6362C31.8143 24.465 30.0427 26.3604 26.5594 26.3604ZM6.25246 21.2147H15.0025L17.944 29.5526H21.2251L10.5577 0.552612L0.0298462 29.5526H3.31092L6.25246 21.2147ZM10.6275 8.93361L13.8521 17.9526H7.40285L10.6275 8.93361Z"
              fill="white"
            />
          </svg>
        </li>
      </ul>

      <ul className={`toolbar-${isToolBarToggled}`}>
        <li>
          <span>
            <svg
              width="26"
              height="20"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.14955 0V17.4961H0.541748V23.8477H9.72377V17.4961H7.11597V0H3.14955ZM13.5605 0V11.2938H10.9503V17.6453H20.1331V11.2938H17.5245V0H13.5605ZM23.9675 0V5.04063H21.3597V11.3922H30.5417V5.04063H27.9339V0H23.9675ZM22.6902 6.30078H29.2113V7.56173H22.6902V6.30078ZM23.9675 12.4531V30H27.9339V12.4531H23.9675ZM12.2816 12.5539H18.8019V13.8148H12.2816V12.5539ZM13.5605 18.6547V30H17.5245V18.6547H13.5605ZM1.87222 18.7555H8.39332V20.0164H1.87222V18.7555ZM3.15035 24.9078V30H7.11675V24.9078H3.15035Z"
                fill="#2B3595"
              />
            </svg>
          </span>
        
        </li>
        <li>
          <span>
            <svg
              width="26"
              height="20"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.0417 13.7985H27.5717C26.7422 13.7985 26.0717 14.337 26.0717 15C26.0717 15.6615 26.7422 16.1985 27.5717 16.1985H29.0417C29.8697 16.1985 30.5417 15.663 30.5417 15C30.5417 14.3385 29.8682 13.7985 29.0417 13.7985ZM15.5417 6.75C14.4574 6.74663 13.3831 6.95773 12.3806 7.37114C11.3782 7.78454 10.4674 8.39211 9.70061 9.15886C8.93385 9.92562 8.32629 10.8364 7.91288 11.8389C7.49947 12.8413 7.28838 13.9157 7.29175 15C7.29175 19.5765 10.9652 23.25 15.5417 23.25C20.1167 23.25 23.7917 19.5765 23.7917 15C23.7917 10.4235 20.1152 6.75 15.5417 6.75ZM15.5417 21C12.2252 21 9.54175 18.3135 9.54175 15C9.54175 11.6835 12.2252 9 15.5417 9C17.133 9 18.6592 9.63214 19.7844 10.7574C20.9096 11.8826 21.5417 13.4087 21.5417 15C21.5417 16.5913 20.9096 18.1174 19.7844 19.2426C18.6592 20.3679 17.133 21 15.5417 21ZM5.04175 15C5.04175 14.3385 4.36825 13.7985 3.54175 13.7985H2.04175C1.21225 13.7985 0.541748 14.337 0.541748 15C0.541748 15.6615 1.21225 16.1985 2.04175 16.1985H3.54175C4.36825 16.1985 5.04175 15.6615 5.04175 15ZM15.5417 4.5C16.2032 4.5 16.7402 3.8295 16.7402 3V1.5C16.7402 0.6705 16.2032 0 15.5417 0C14.8787 0 14.3402 0.6705 14.3402 1.5V3C14.3402 3.8295 14.8787 4.5 15.5417 4.5ZM15.5417 25.5C14.8787 25.5 14.3402 26.1705 14.3402 27V28.5C14.3402 29.3295 14.8787 30 15.5417 30C16.2032 30 16.7402 29.3295 16.7402 28.5V27C16.7402 26.1705 16.2032 25.5 15.5417 25.5ZM26.5892 5.649C27.1757 5.0625 27.2702 4.2075 26.8022 3.7395C26.3342 3.2715 25.4777 3.3675 24.8942 3.954L23.8442 5.0025C23.2577 5.589 23.1632 6.444 23.6312 6.912C24.0992 7.38 24.9557 7.284 25.5407 6.6975L26.5892 5.649ZM5.54275 23.2995L4.49275 24.351C3.90625 24.9375 3.81175 25.7895 4.27975 26.2575C4.74775 26.7255 5.60425 26.6325 6.18775 26.046L7.23775 24.9975C7.82425 24.411 7.91875 23.556 7.45075 23.0865C6.98275 22.617 6.12625 22.716 5.54275 23.2995ZM6.18925 3.9525C5.60425 3.366 4.74775 3.27 4.27975 3.738C3.81175 4.206 3.90775 5.0625 4.49125 5.649L5.54125 6.6975C6.12775 7.284 6.98125 7.38 7.44925 6.912C7.91725 6.444 7.82275 5.5875 7.23775 5.0025L6.18925 3.9525ZM23.8427 24.999L24.8927 26.0475C25.4792 26.634 26.3327 26.727 26.8007 26.262C27.2687 25.794 27.1742 24.9375 26.5877 24.3525L25.5392 23.304C24.9527 22.7175 24.0977 22.6215 23.6282 23.0895C23.1587 23.5575 23.2562 24.4125 23.8427 24.999Z"
                fill="#2B3595"
              />
            </svg>
          </span>
       
        </li>
        <li>
          <span>
            <svg
              width="26"
              height="20"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5417 0C16.9187 0 18.2468 0.175781 19.5261 0.527344C20.8054 0.878906 21.9968 1.38672 23.1003 2.05078C24.2039 2.71484 25.2146 3.49609 26.1326 4.39453C27.0505 5.29297 27.8367 6.30371 28.491 7.42676C29.1453 8.5498 29.6482 9.74609 29.9998 11.0156C30.3513 12.2852 30.532 13.6133 30.5417 15C30.5417 16.377 30.366 17.7051 30.0144 18.9844C29.6628 20.2637 29.155 21.4551 28.491 22.5586C27.8269 23.6621 27.0457 24.6729 26.1472 25.5908C25.2488 26.5088 24.238 27.2949 23.115 27.9492C21.9919 28.6035 20.7957 29.1064 19.5261 29.458C18.2566 29.8096 16.9285 29.9902 15.5417 30C15.0242 30 14.5408 29.9023 14.0916 29.707C13.6423 29.5117 13.2419 29.2432 12.8904 28.9014C12.5388 28.5596 12.2703 28.1641 12.0847 27.7148C11.8992 27.2656 11.8015 26.7773 11.7917 26.25C11.7917 25.7324 11.8552 25.2295 11.9822 24.7412C12.1091 24.2529 12.3142 23.7842 12.5974 23.335C12.656 23.2275 12.7097 23.1445 12.7585 23.0859C12.8074 23.0273 12.866 22.9492 12.9343 22.8516C13.1785 22.4707 13.3591 22.124 13.4763 21.8115C13.5935 21.499 13.657 21.1035 13.6667 20.625C13.6667 20.1074 13.5691 19.624 13.3738 19.1748C13.1785 18.7256 12.9099 18.3252 12.5681 17.9736C12.2263 17.6221 11.8308 17.3535 11.3816 17.168C10.9324 16.9824 10.4441 16.8848 9.91675 16.875C9.448 16.875 9.05737 16.9336 8.74487 17.0508C8.43237 17.168 8.08081 17.3535 7.69019 17.6074C7.59253 17.6758 7.5144 17.7344 7.45581 17.7832C7.39722 17.832 7.31421 17.8857 7.20679 17.9443C6.76733 18.2178 6.30347 18.418 5.81519 18.5449C5.3269 18.6719 4.81909 18.7402 4.29175 18.75C3.77417 18.75 3.29077 18.6523 2.84155 18.457C2.39233 18.2617 1.99194 17.9932 1.64038 17.6514C1.28882 17.3096 1.02026 16.9141 0.834717 16.4648C0.64917 16.0156 0.551514 15.5273 0.541748 15C0.541748 13.623 0.717529 12.2949 1.06909 11.0156C1.42065 9.73633 1.92847 8.54492 2.59253 7.44141C3.25659 6.33789 4.03784 5.32715 4.93628 4.40918C5.83472 3.49121 6.84546 2.70508 7.96851 2.05078C9.09155 1.39648 10.2878 0.893555 11.5574 0.541992C12.8269 0.19043 14.155 0.00976562 15.5417 0ZM21.1667 7.03125C20.8445 7.03125 20.5417 7.08984 20.2585 7.20703C19.9753 7.32422 19.7263 7.49512 19.5115 7.71973C19.2966 7.94434 19.1306 8.19336 19.0134 8.4668C18.8962 8.74023 18.8328 9.04297 18.823 9.375C18.823 9.69727 18.8816 10 18.9988 10.2832C19.116 10.5664 19.2869 10.8154 19.5115 11.0303C19.7361 11.2451 19.9851 11.4111 20.2585 11.5283C20.532 11.6455 20.8347 11.709 21.1667 11.7188C21.489 11.7188 21.7917 11.6602 22.075 11.543C22.3582 11.4258 22.6072 11.2549 22.822 11.0303C23.0369 10.8057 23.2029 10.5566 23.3201 10.2832C23.4373 10.0098 23.5007 9.70703 23.5105 9.375C23.5105 9.05273 23.4519 8.75 23.3347 8.4668C23.2175 8.18359 23.0466 7.93457 22.822 7.71973C22.5974 7.50488 22.3484 7.33887 22.075 7.22168C21.8015 7.10449 21.4988 7.04102 21.1667 7.03125ZM8.04175 13.5938C8.36401 13.5938 8.66675 13.5352 8.94995 13.418C9.23315 13.3008 9.48218 13.1299 9.69702 12.9053C9.91187 12.6807 10.0779 12.4316 10.1951 12.1582C10.3123 11.8848 10.3757 11.582 10.3855 11.25C10.3855 10.9277 10.3269 10.625 10.2097 10.3418C10.0925 10.0586 9.92163 9.80957 9.69702 9.59473C9.47241 9.37988 9.22339 9.21387 8.94995 9.09668C8.67651 8.97949 8.37378 8.91602 8.04175 8.90625C7.71948 8.90625 7.41675 8.96484 7.13354 9.08203C6.85034 9.19922 6.60132 9.37012 6.38647 9.59473C6.17163 9.81934 6.00562 10.0684 5.88843 10.3418C5.77124 10.6152 5.70776 10.918 5.698 11.25C5.698 11.5723 5.75659 11.875 5.87378 12.1582C5.99097 12.4414 6.16187 12.6904 6.38647 12.9053C6.61108 13.1201 6.86011 13.2861 7.13354 13.4033C7.40698 13.5205 7.70972 13.584 8.04175 13.5938ZM13.6667 9.84375C13.989 9.84375 14.2917 9.78516 14.575 9.66797C14.8582 9.55078 15.1072 9.37988 15.322 9.15527C15.5369 8.93066 15.7029 8.68164 15.8201 8.4082C15.9373 8.13477 16.0007 7.83203 16.0105 7.5C16.0105 7.17773 15.9519 6.875 15.8347 6.5918C15.7175 6.30859 15.5466 6.05957 15.322 5.84473C15.0974 5.62988 14.8484 5.46387 14.575 5.34668C14.3015 5.22949 13.9988 5.16602 13.6667 5.15625C13.3445 5.15625 13.0417 5.21484 12.7585 5.33203C12.4753 5.44922 12.2263 5.62012 12.0115 5.84473C11.7966 6.06934 11.6306 6.31836 11.5134 6.5918C11.3962 6.86523 11.3328 7.16797 11.323 7.5C11.323 7.82227 11.3816 8.125 11.4988 8.4082C11.616 8.69141 11.7869 8.94043 12.0115 9.15527C12.2361 9.37012 12.4851 9.53613 12.7585 9.65332C13.032 9.77051 13.3347 9.83398 13.6667 9.84375ZM19.2917 24.8438C19.614 24.8438 19.9167 24.7852 20.2 24.668C20.4832 24.5508 20.7322 24.3799 20.947 24.1553C21.1619 23.9307 21.3279 23.6816 21.4451 23.4082C21.5623 23.1348 21.6257 22.832 21.6355 22.5C21.6355 22.1777 21.5769 21.875 21.4597 21.5918C21.3425 21.3086 21.1716 21.0596 20.947 20.8447C20.7224 20.6299 20.4734 20.4639 20.2 20.3467C19.9265 20.2295 19.6238 20.166 19.2917 20.1562C18.9695 20.1562 18.6667 20.2148 18.3835 20.332C18.1003 20.4492 17.8513 20.6201 17.6365 20.8447C17.4216 21.0693 17.2556 21.3184 17.1384 21.5918C17.0212 21.8652 16.9578 22.168 16.948 22.5C16.948 22.8223 17.0066 23.125 17.1238 23.4082C17.241 23.6914 17.4119 23.9404 17.6365 24.1553C17.8611 24.3701 18.1101 24.5361 18.3835 24.6533C18.657 24.7705 18.9597 24.834 19.2917 24.8438ZM23.0417 19.2188C23.364 19.2188 23.6667 19.1602 23.95 19.043C24.2332 18.9258 24.4822 18.7549 24.697 18.5303C24.9119 18.3057 25.0779 18.0566 25.1951 17.7832C25.3123 17.5098 25.3757 17.207 25.3855 16.875C25.3855 16.5527 25.3269 16.25 25.2097 15.9668C25.0925 15.6836 24.9216 15.4346 24.697 15.2197C24.4724 15.0049 24.2234 14.8389 23.95 14.7217C23.6765 14.6045 23.3738 14.541 23.0417 14.5312C22.7195 14.5312 22.4167 14.5898 22.1335 14.707C21.8503 14.8242 21.6013 14.9951 21.3865 15.2197C21.1716 15.4443 21.0056 15.6934 20.8884 15.9668C20.7712 16.2402 20.7078 16.543 20.698 16.875C20.698 17.1973 20.7566 17.5 20.8738 17.7832C20.991 18.0664 21.1619 18.3154 21.3865 18.5303C21.6111 18.7451 21.8601 18.9111 22.1335 19.0283C22.407 19.1455 22.7097 19.209 23.0417 19.2188Z"
                fill="#2B3595"
              />
            </svg>
          </span>
  
        </li>
        <li>
          <span>
            <svg
              width="26"
              height="20"
              viewBox="0 0 35 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.07907 18.8707L12.4569 22.3785L15.9085 31.7253L22.1715 23.9447L32.1877 23.5638L26.6806 15.2475L29.4193 5.66514L19.7527 8.30598L11.4292 2.76463L10.962 12.7132L3.07907 18.8707Z"
                fill="#2B3595"
                stroke="#2B3595"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M27.6338 35.0076L23.8107 27.3644L27.6338 35.0076Z"
                fill="#2B3595"
              />
              <path
                d="M27.6338 35.0076L23.8107 27.3644"
                stroke="#2B3595"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
         
        </li>
        <li>
          <span>
            <svg
              width="26"
              height="20"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8629 0.740234L30.5417 13.2161H1.13806V9.85062H23.5876L17.8262 3.11964L19.8629 0.740234ZM29.9454 18.2644V21.6298H7.49585L13.2573 28.3608L11.2206 30.7402L0.541748 18.2644H29.9454Z"
                fill="#2B3595"
              />
            </svg>
          </span>
     
        </li>
        <li>
          <span>
            <svg
              width="26"
              height="20"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.14955 0.740234V18.2363H0.541748V24.5879H9.72377V18.2363H7.11597V0.740234H3.14955ZM13.5605 0.740234V12.034H10.9503V18.3855H20.1331V12.034H17.5245V0.740234H13.5605ZM23.9675 0.740234V5.78086H21.3597V12.1324H30.5417V5.78086H27.9339V0.740234H23.9675ZM22.6902 7.04101H29.2113V8.30196H22.6902V7.04101ZM23.9675 13.1934V30.7402H27.9339V13.1934H23.9675ZM12.2816 13.2941H18.8019V14.5551H12.2816V13.2941ZM13.5605 19.3949V30.7402H17.5245V19.3949H13.5605ZM1.87222 19.4957H8.39332V20.7567H1.87222V19.4957ZM3.15035 25.648V30.7402H7.11675V25.648H3.15035Z"
                fill="#2B3595"
              />
            </svg>
          </span>

        </li>
      </ul>
      <SideNav />
      <div className="carousel-container">
        <ImageCarousel />
        <Preview />
      </div>
      <SideToolBar />
    </div>

  );
};

export default MainContent;
